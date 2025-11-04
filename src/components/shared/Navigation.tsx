import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Menu, X } from 'lucide-react';

export const Navigation = (): JSX.Element => {
  const location = useLocation();
  const { isAuthenticated, isCook, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed w-full h-16 md:h-20 top-0 left-0 bg-white z-50 shadow-sm">
      <nav className="flex items-center justify-between px-4 md:px-6 h-full max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <img
            className="w-8 h-7 md:w-10 md:h-8 lg:w-12 lg:h-10"
            alt="MealJoin Logo"
            src="/justlogo-1.png"
          />
          <img
            className="w-20 h-5 md:w-28 md:h-7 lg:w-32 lg:h-8 ml-2 md:ml-3"
            alt="MealJoin Text"
            src="/justtext-1.png"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#fdaa00]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <Link 
            to="/"
            className={`text-base lg:text-lg font-medium hover:text-[#fdaa00] cursor-pointer transition-colors ${
              isActive('/') ? 'text-[#fdaa00]' : 'text-gray-700'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/find-meal"
            className={`text-base lg:text-lg font-medium hover:text-[#fdaa00] cursor-pointer transition-colors ${
              isActive('/find-meal') ? 'text-[#fdaa00]' : 'text-gray-700'
            }`}
          >
            Find Meal
          </Link>
          <Link 
            to="/share-meal"
            className={`text-base lg:text-lg font-medium hover:text-[#fdaa00] cursor-pointer transition-colors ${
              isActive('/share-meal') ? 'text-[#fdaa00]' : 'text-gray-700'
            }`}
          >
            Share Meal
          </Link>
          
          {/* Show Dashboard only for authenticated cooks */}
          {isAuthenticated && isCook && (
            <Link 
              to="/cook-dashboard"
              className={`text-base lg:text-lg font-medium hover:text-[#fdaa00] cursor-pointer transition-colors ${
                isActive('/cook-dashboard') ? 'text-[#fdaa00]' : 'text-gray-700'
              }`}
            >
              Dashboard
            </Link>
          )}
          
          {/* Show Sign In button only when not authenticated */}
          {!isAuthenticated && (
            <Link to="/sign-in">
              <Button className="h-8 md:h-10 px-4 md:px-6 bg-[#fdaa00] hover:bg-[#e09900] rounded-full transition-colors">
                <span className="text-white text-xs md:text-sm font-medium">
                  Sign In
                </span>
              </Button>
            </Link>
          )}
          
          {/* Show Profile and Logout when authenticated */}
          {isAuthenticated && (
            <div className="flex items-center gap-2 md:gap-4">
              <Link to="/profile">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <img
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"
                    alt="Profile"
                    src={user?.profileImage || "/61f75ea9a680def2ed1c6929fe75aeee-3.png"}
                  />
                </div>
              </Link>
              <Button 
                onClick={logout}
                className="h-8 md:h-10 px-3 md:px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full transition-colors"
              >
                <span className="text-xs md:text-sm font-medium">
                  Logout
                </span>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile navigation menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden">
            <div className="px-4 py-2 space-y-2">
              <Link 
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-2 text-base font-medium hover:text-[#fdaa00] transition-colors ${
                  isActive('/') ? 'text-[#fdaa00]' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/find-meal"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-2 text-base font-medium hover:text-[#fdaa00] transition-colors ${
                  isActive('/find-meal') ? 'text-[#fdaa00]' : 'text-gray-700'
                }`}
              >
                Find Meal
              </Link>
              <Link 
                to="/share-meal"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-2 text-base font-medium hover:text-[#fdaa00] transition-colors ${
                  isActive('/share-meal') ? 'text-[#fdaa00]' : 'text-gray-700'
                }`}
              >
                Share Meal
              </Link>
              
              {isAuthenticated && isCook && (
                <Link 
                  to="/cook-dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-2 text-base font-medium hover:text-[#fdaa00] transition-colors ${
                    isActive('/cook-dashboard') ? 'text-[#fdaa00]' : 'text-gray-700'
                  }`}
                >
                  Dashboard
                </Link>
              )}
              
              {!isAuthenticated ? (
                <div className="pt-2">
                  <Link to="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full h-12 bg-[#fdaa00] hover:bg-[#e09900] rounded-lg transition-colors">
                      <span className="text-white text-base font-medium">
                        Sign In
                      </span>
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="pt-2 space-y-2">
                  <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full h-12 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors justify-start">
                      <img
                        className="w-8 h-8 rounded-full object-cover mr-3"
                        alt="Profile"
                        src={user?.profileImage || "/61f75ea9a680def2ed1c6929fe75aeee-3.png"}
                      />
                      <span className="text-base font-medium">Profile</span>
                    </Button>
                  </Link>
                  <Button 
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full h-12 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                  >
                    <span className="text-base font-medium">Logout</span>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
      <Separator className="w-full h-px" />
    </header>
  );
};