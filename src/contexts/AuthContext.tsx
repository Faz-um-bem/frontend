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
};

type SignUpData = {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
  reason_social?: string;
  cnpj?: string;
  description?: string;
  address?: string;
  address_number?: string;
  address_complement?: string;
  neighborhood?: string;
  cep?: string;
  uf?: string;
  city?: string;
  phone?: string;
  phone_secondary?: string;
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

  useEffect(() => {
    const { 'fazumbem.token': token } = parseCookies();

    if (token) {
      setUser({
        name: 'Wederson Fagundes',
        email: 'wederson@example.com',
        role: 1,
        permission: 1,
      });
    }
  }, []);

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      // const response = await api.post('sessions', { email, password });
      const token = 'faketoken';

      setUser({
        name: 'Wederson Fagundes',
        email: 'wederson@example.com',
        role: 1,
        permission: 1,
      });

      setCookie(undefined, 'fazumbem.token', token, {
        maxAge: 60 * 60 * 24 * 1, // 1 days
        path: '/',
      });

      // api.defaults.headers['Authorization'] = `Bearer ${token}`;

      toast.success('Autenticação realizada com sucesso.');
      router.push('/dashboard');
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
    setUser(null);

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
