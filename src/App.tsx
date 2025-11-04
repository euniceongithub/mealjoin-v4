import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import { ToastProvider } from './components/ui/toast';
import { AdminLayout } from './components/admin/AdminLayout';
import { ProtectedAdminRoute } from './components/admin/ProtectedAdminRoute';
import { MacbookPro } from './screens/MacbookPro';
import { FindMeal } from './screens/FindMeal';
import { ShareMeal } from './screens/ShareMeal';
import { SignIn } from './screens/SignIn';
import { About } from './screens/About';
import { MealDetails } from './screens/MealDetails';
import { BookingConfirmation } from './screens/BookingConfirmation';
import { CookProfile } from './screens/CookProfile';
import { CookDashboard } from './screens/CookDashboard';
import { UserProfile } from './screens/UserProfile';
import { Complaint } from './screens/Complaint';
import { Messages } from './screens/Messages';
import { CreateMeal } from './screens/CreateMeal';
import { Settings } from './screens/Settings';
import { AdminLogin } from './screens/admin/AdminLogin';
import { AdminDashboard } from './screens/admin/AdminDashboard';
import { AdminUsers } from './screens/admin/AdminUsers';
import { AdminSessions } from './screens/admin/AdminSessions';
import { AdminReports } from './screens/admin/AdminReports';

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <AdminAuthProvider>
          <Router>
            <Routes>
              {/* Main App Routes */}
              <Route path="/" element={<MacbookPro />} />
              <Route path="/find-meal" element={<FindMeal />} />
              <Route path="/share-meal" element={<ShareMeal />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/about" element={<About />} />
              <Route path="/meal/:id" element={<MealDetails />} />
              <Route path="/booking/:id" element={<BookingConfirmation />} />
              <Route path="/cook/:id" element={<CookProfile />} />
              <Route path="/cook-dashboard" element={<CookDashboard />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/complaint" element={<Complaint />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/create-meal" element={<CreateMeal />} />
              <Route path="/settings" element={<Settings />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={
                <ProtectedAdminRoute>
                  <AdminLayout />
                </ProtectedAdminRoute>
              }>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="sessions" element={<AdminSessions />} />
                <Route path="reports" element={<AdminReports />} />
              </Route>
            </Routes>
          </Router>
        </AdminAuthProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;