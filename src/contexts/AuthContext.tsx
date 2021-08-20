import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';

import api from '~/services/api';

type User = {
  name: string;
  email: string;
  role: number;
  permission: number | null;
};

type SignInCredentials = {
  email: string;
  password: string;
  type: string;
};

type SignUpData = {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
  corporate_name?: string;
  cnpj?: string;
  description?: string;
  address?: string;
  address_number?: string;
  address_complement?: string;
  neighborhood?: string;
  postal_code?: string;
  state?: string;
  city?: string;
  main_phone?: string;
  secondary_phone?: string;
};

export type AuthContextData = {
  signUp(data: SignUpData): Promise<void>;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  isAuthenticated: boolean;
  user: User;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();

  const [user, setUser] = useState<User>(null);
  const isAuthenticated = !!user;

  const loadInstitution = async () => {
    const { 'fazumbem.token': token } = parseCookies();

    try {
      const decoded = jwtDecode(token);
      const institution = await api.get(`institutions/${decoded.id}`);

      if (token) {
        setUser(institution.data.data);
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    loadInstitution();
  }, []);

  const signIn = useCallback(
    async ({ email, password, type }: SignInCredentials) => {
      try {
        const response = await api.post('login', { email, password, type });
        const { token, refreshToken } = response.data.data;

        const decoded = jwtDecode(token);
        const institution = await api.get(`institutions/${decoded.id}`);

        setCookie(undefined, 'fazumbem.token', token, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        });

        setCookie(undefined, 'fazumbem.refreshToken', refreshToken, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        });

        setUser(institution.data.data);

        api.defaults.headers.Authorization = `Bearer ${token}`;

        toast.success('Autenticação realizada com sucesso.');
        router.push('/dashboard');
      } catch (err) {
        toast.error(err.response?.data.message);
      }
    },
    [router],
  );

  const signUp = useCallback(
    async (data: SignUpData) => {
      try {
        const response = await api.post('/institutions', data);

        if (response) {
          toast.success('Cadastro realizado com sucesso.');
          router.push('/sign');
        }
      } catch ({ response }) {
        toast.error(response.data.message);
      }
    },
    [router],
  );

  const signOut = useCallback(() => {
    destroyCookie(undefined, 'fazumbem.token');
    destroyCookie(undefined, 'nextauth.refreshToken');

    if (
      ![
        '/',
        '/campaigns',
        '/campaigns/[slug]',
        '/institutions',
        '/institutions/[slug]',
      ].includes(router.pathname)
    ) {
      router.push('/');
    }
  }, [router]);

  return (
    <AuthContext.Provider
      value={{ signIn, signUp, signOut, isAuthenticated, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
