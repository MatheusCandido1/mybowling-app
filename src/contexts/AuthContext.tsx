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
  updateLoggedUser(user: any): void;
  showDropdown: boolean;
  openDropdown(): void;
  closeDropdown(): void;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loggedUser, setLoggedUser] = useState<IUser | null>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  function openDropdown() {
    setShowDropdown(true);
  }

  function closeDropdown() {
    setShowDropdown(false);
  }

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

  const updateLoggedUser = async (user: any) => {
    try {

      setLoggedUser(user);
      await AsyncStorage.setItem('loggedUser', JSON.stringify(user));


    } catch (error) {
      console.error('Error updating logged user:', error);
    }
  }

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
      fetchLoggedUser,
      updateLoggedUser,
      showDropdown,
      openDropdown,
      closeDropdown
    }}>
      {children}
    </AuthContext.Provider>
  )
}
