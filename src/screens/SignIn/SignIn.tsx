import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Navigation } from '../../components/shared/Navigation';
import { Footer } from '../../components/shared/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Separator } from '../../components/ui/separator';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';

export const SignIn = (): JSX.Element => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    confirmPassword: '',
    userType: 'diner' as 'cook' | 'diner'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Handle authentication
    login(formData.email, formData.password, formData.userType)
      .then(() => {
        // Redirect based on user type
        if (formData.userType === 'cook') {
          navigate('/cook-dashboard');
        } else {
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="mt-16 md:mt-20 pt-8 md:pt-12 pb-6 md:pb-8 bg-gradient-to-r from-[#f0803e] to-[#fdaa00]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="font-['Luckiest_Guy',Helvetica] text-3xl md:text-4xl lg:text-5xl mb-4">
            {isSignUp ? 'Join MealJoin Community' : 'Welcome Back'}
          </h1>
          <p className="text-lg md:text-xl">
            {isSignUp 
              ? 'Start sharing and discovering amazing homemade meals' 
              : 'Sign in to continue your culinary journey'
            }
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 md:py-12">
        <div className="max-w-md mx-auto px-4 md:px-6">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="font-['Luckiest_Guy',Helvetica] text-xl md:text-2xl text-gray-800 mb-2">
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {isSignUp 
                    ? 'Fill in your details to get started' 
                    : 'Enter your credentials to access your account'
                  }
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selection for Sign Up */}
                {isSignUp && (
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      I want to *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      <button
                        type="button"
                        onClick={() => handleInputChange('userType', 'diner')}
                        className={`p-3 md:p-4 border-2 rounded-lg text-center transition-colors ${
                          formData.userType === 'diner'
                            ? 'border-[#f0803e] bg-[#f0803e]/10 text-[#f0803e]'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        <div className="font-medium text-sm md:text-base">Find Meals</div>
                        <div className="text-xs md:text-sm">Join as a diner</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleInputChange('userType', 'cook')}
                        className={`p-3 md:p-4 border-2 rounded-lg text-center transition-colors ${
                          formData.userType === 'cook'
                            ? 'border-[#f0803e] bg-[#f0803e]/10 text-[#f0803e]'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        <div className="font-medium text-sm md:text-base">Share Meals</div>
                        <div className="text-xs md:text-sm">Join as a cook</div>
                      </button>
                    </div>
                  </div>
                )}

                {isSignUp && (
                  <>
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          className="h-10 md:h-12 pl-12"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          className="h-10 md:h-12 pl-12"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Email */}
                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      className="h-10 md:h-12 pl-12"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      className="h-10 md:h-12 pl-12 pr-12"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {isSignUp && (
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        className="h-10 md:h-12 pl-12"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}

                {!isSignUp && (
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-[#f0803e] focus:ring-[#f0803e]" />
                      <span className="ml-2 text-sm md:text-base text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm md:text-base text-[#f0803e] hover:text-[#d96d35]">
                      Forgot password?
                    </a>
                  </div>
                )}

                <Button 
                  type="submit"
                  className="w-full h-10 md:h-12 bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg font-medium"
                >
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </Button>
              </form>

              <div className="mt-6">
                <Separator className="my-4 md:my-6" />
                
                <div className="space-y-3">
                  <Button 
                    type="button"
                    className="w-full h-10 md:h-12 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                  >
                    <img src="/hd-wallpaper-facebook-black-logo-1.png" alt="Facebook" className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                    Continue with Facebook
                  </Button>
                  
                  <Button 
                    type="button"
                    className="w-full h-10 md:h-12 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </Button>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm md:text-base">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                  <button
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-[#f0803e] hover:text-[#d96d35] font-medium"
                  >
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </button>
                </p>
              </div>

              {isSignUp && (
                <div className="mt-6 text-center">
                  <p className="text-xs md:text-sm text-gray-500">
                    By creating an account, you agree to our{' '}
                    <a href="#" className="text-[#f0803e] hover:text-[#d96d35]">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-[#f0803e] hover:text-[#d96d35]">Privacy Policy</a>
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};