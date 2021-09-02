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
  updateUser: (username: string) => void;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  async function loadUser() {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storage) {
      const userLogged = await JSON.parse(storage) as User;

      setUser(userLogged);
    }

    setLoading(false);
  }

  async function updateUser(username: string) {
    const updatedUser = {
      username,
      createdAt: user.createdAt
    } as User;

    await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(updatedUser));

    setUser(updatedUser);
  }
  
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, loadUser, updateUser }}>
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