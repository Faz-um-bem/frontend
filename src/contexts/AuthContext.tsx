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

export type AuthContextData = {
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
        role: 2,
        permission: null,
      });
    }
  }, []);

  const signIn = useCallback(
    async ({ email, password, type }: SignInCredentials) => {
      try {
        const response = await api.post('login', { email, password, type });
        const { token, refreshToken } = response.data.data;

        const decoded = jwtDecode(token);
        const institution = await api.get(`institutions/${decoded.id}`);

        console.log(institution);

        setCookie(undefined, 'fazumbem.token', token, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        });

        setCookie(undefined, 'fazumbem.refreshToken', refreshToken, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        });

        setUser(institution);

        api.defaults.headers.Authorization = `Bearer ${token}`;

        toast.success('Autenticação realizada com sucesso.');
        router.push('/dashboard');
      } catch (err) {
        toast.error(err.response?.data.message);
        console.log(err);
      }
    },
    [router],
  );

  const signOut = useCallback(() => {
    destroyCookie(undefined, 'fazumbem.token');
    setUser(null);

    router.push('/');
  }, [router]);

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
