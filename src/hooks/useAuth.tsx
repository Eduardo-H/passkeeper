import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLLECTION_USERS } from '../configs/database';

type User = {
  username: string;
  createdAt: Date;
}

type AuthContextData = {
  user: User;
  loading: boolean;
  loadUser: () => void;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>({} as User);

  async function loadUser() {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storage) {
      const userLogged = await JSON.parse(storage) as User;

      setUser(userLogged);
    }

    setLoading(false);
  }

  
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, loadUser }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
};