import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'admin';
}

interface AdminAuthContextType {
  adminUser: AdminUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

interface AdminAuthProviderProps {
  children: ReactNode;
}

export const AdminAuthProvider: React.FC<AdminAuthProviderProps> = ({ children }) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(() => {
    const stored = localStorage.getItem('adminUser');
    return stored ? JSON.parse(stored) : null;
  });

  const login = async (email: string, password: string) => {
    // Mock login - in a real app, this would make an API call
    if (email === 'admin@mealjoin.com' && password === 'admin123') {
      const mockAdmin: AdminUser = {
        id: 'admin-1',
        name: 'Admin User',
        email: 'admin@mealjoin.com',
        role: 'admin'
      };
      
      setAdminUser(mockAdmin);
      localStorage.setItem('adminUser', JSON.stringify(mockAdmin));
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const logout = () => {
    setAdminUser(null);
    localStorage.removeItem('adminUser');
  };

  const value: AdminAuthContextType = {
    adminUser,
    isAuthenticated: !!adminUser,
    login,
    logout
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};