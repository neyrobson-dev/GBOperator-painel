import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface CredentialsProps {
  email: string;
  password: string;
}

interface AuthContextProps {
  signed: boolean;
  user: object | null;
  doLogin(values: CredentialsProps): Promise<void>;
  doLogout(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storageUser = localStorage.getItem('@gobuild:user');
    const storageToken = localStorage.getItem('@gobuild:token');

    if (storageUser && storageToken) {
      setUser(JSON.parse(storageUser));
      api.defaults.headers.common['Authorization'] = `Bearer ${storageToken}`;
    }
  }, []);

  async function doLogin({ email, password }: CredentialsProps){
    await api.post('login', { email, password }).then(response => {
      localStorage.setItem('@gobuild:user', JSON.stringify(response.data.user));
      localStorage.setItem('@gobuild:token', response.data.access_token);
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;

      setUser(response.data.user);

    }).catch( error => {
      throw new Error(JSON.stringify(error.response.data.errors))
    })
  }

  function doLogout(){
    localStorage.removeItem('@gobuild:user');
    localStorage.removeItem('@gobuild:token');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{signed: Boolean(user), user, doLogin, doLogout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;

export function useAuth(){
  const context = useContext(AuthContext);
  return context;
}
