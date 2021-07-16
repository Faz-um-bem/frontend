import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

// import api from '../services/api';

type User = {
  name: string;
  email: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
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
    const { 'fazumbem.user': userCookie } = parseCookies();

    console.log(userCookie);
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    // const response = await api.post('sessions', { email, password });

    setUser({
      name: 'Wederson Fagundes',
      email: 'wederson@example.com',
    });

    setCookie(
      undefined,
      'fazumbem.user',
      JSON.stringify({
        name: 'Wederson Fagundes',
        email: 'wederson@example.com',
      }),
      {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      },
    );

    // api.defaults.headers['Authorization'] = `Bearer ${token}`;

    router.push('/dashboard');
  }, []);

  const signOut = useCallback(() => {
    destroyCookie(undefined, 'fazumbem.user');
    setUser(null);

    router.push('/');
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
