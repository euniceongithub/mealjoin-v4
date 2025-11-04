import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'cook' | 'diner';
  profileImage?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: 'cook' | 'diner') => Promise<void>;
  logout: () => void;
  isCook: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: 'cook' | 'diner') => {
    // Mock login - in a real app, this would make an API call
    const mockUser: User = {
      id: '1',
      name: role === 'cook' ? 'Kevin Asante' : 'Ama Serwaa',
      email,
      role,
      profileImage: '/61f75ea9a680def2ed1c6929fe75aeee-3.png'
    };
    
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    isCook: user?.role === 'cook'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};