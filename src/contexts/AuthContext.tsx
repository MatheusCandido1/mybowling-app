import { createContext, useCallback, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from "../entities/User";
import { useMe } from "../hooks/useMe";

interface AuthContextData {
  authenticated: boolean;
  login(user: IUser, access_token: string): void;
  logout(): void;
  loggedUser: IUser | null;
  fetchLoggedUser(user: any): void;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loggedUser, setLoggedUser] = useState<IUser | null>(null);

  const { me } = useMe();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem('mybowling');
        setAuthenticated(!!token);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchLoggedUser(me)
    fetchToken();
  }, []);

  const fetchLoggedUser = async (user: any) => {
    try {
      const user = await AsyncStorage.getItem('loggedUser');
      setLoggedUser(user ? JSON.parse(user) : null);
    } catch (error) {
      console.error('Error fetching logged user:', error);
    }
  };



  const login = useCallback(async (user: IUser, accessToken: string) => {
    await AsyncStorage.setItem('mybowling', accessToken);
    setLoggedUser(user);
    await AsyncStorage.setItem('loggedUser', JSON.stringify(user));
    setAuthenticated(true);
  }, []);


  const logout = useCallback(async() => {
    await AsyncStorage.removeItem('mybowling')
    await AsyncStorage.removeItem('loggedUser')
    setAuthenticated(false)
  }, [])


  return (
    <AuthContext.Provider value={{
      authenticated,
      login,
      logout,
      loggedUser,
      fetchLoggedUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}
