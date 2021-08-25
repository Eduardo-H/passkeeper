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
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function loadUserStorageData() {
    setLoading(true);

    const storage = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storage) {
      const userLogged = JSON.parse(storage) as User;

      setUser(userLogged);
    }

    setLoading(false);
  }

  
  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{user, loading }}>
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