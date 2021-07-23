import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

// import api from '~/services/api';

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
        role: 1,
        permission: 1,
      });
    }
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    // const response = await api.post('sessions', { email, password });
    const token = 'faketoken';

    setUser({
      name: 'Wederson Fagundes',
      email: 'wederson@example.com',
      role: 1,
      permission: 1,
    });

    setCookie(undefined, 'fazumbem.token', token, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    // api.defaults.headers['Authorization'] = `Bearer ${token}`;

    router.push('/dashboard');
  }, []);

  const signOut = useCallback(() => {
    destroyCookie(undefined, 'fazumbem.token');
    setUser(null);

    router.push('/');
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
