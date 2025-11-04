import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Navigation } from '../../components/shared/Navigation';
import { Footer } from '../../components/shared/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  TrendingUp, 
  DollarSign, 
  ChefHat,
  Plus,
  Edit,
  Eye,
  MessageSquare,
  Settings
} from 'lucide-react';

export const CookDashboard = (): JSX.Element => {
  const { isAuthenticated, isCook } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Redirect if not authenticated or not a cook
  if (!isAuthenticated || !isCook) {
    return <Navigate to="/sign-in" replace />;
  }

  // Mock dashboard data
  const dashboardData = {
    stats: {
      totalEarnings: 2450.00,
      totalMeals: 89,
      averageRating: 4.8,
      upcomingBookings: 12
    },
    recentBookings: [
      {
        id: 1,
        guestName: 'Ama Serwaa',
        mealTitle: 'Traditional Jollof Rice Feast',
        date: '2025-01-15',
        time: '6:30 PM',
        guests: 2,
        amount: 140.00,
        status: 'confirmed'
      },
      {
        id: 2,
        guestName: 'James Wilson',
        mealTitle: 'Banku & Tilapia Special',
        date: '2025-01-16',
        time: '7:00 PM',
        guests: 1,
        amount: 85.00,
        status: 'pending'
      }
    ],
    myMeals: [
      {
        id: 1,
        title: 'Traditional Jollof Rice Feast',
        date: '2025-01-15',
        time: '6:30 PM',
        price: 70.00,
        spotsTotal: 6,
        spotsBooked: 3,
        status: 'active',
        image: '/photo-2023-08-05-20-48-48-1.png'
      },
      {
        id: 2,
        title: 'Sunday Fufu Special',
        date: '2025-01-19',
        time: '1:00 PM',
        price: 90.00,
        spotsTotal: 4,
        spotsBooked: 2,
        status: 'active',
        image: '/photo-2023-08-05-20-48-48-1.png'
      }
    ],
    messages: [
      {
        id: 1,
        from: 'Ama Serwaa',
        message: 'Hi Kevin! I have a mild allergy to peanuts. Can you accommodate this for tomorrow\'s meal?',
        time: '2 hours ago',
        unread: true
      },
      {
        id: 2,
        from: 'James Wilson',
        message: 'Thank you for the amazing meal last week! Looking forward to booking again.',
        time: '1 day ago',
        unread: false
      }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'meals', label: 'My Meals', icon: <ChefHat className="w-5 h-5" /> },
    { id: 'bookings', label: 'Bookings', icon: <Calendar className="w-5 h-5" /> },
    { id: 'messages', label: 'Messages', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Earnings</p>
                <p className="text-2xl font-bold text-[#f0803e]">GHC {dashboardData.stats.totalEarnings.toFixed(2)}</p>
              </div>
              <DollarSign className="w-8 h-8 text-[#f0803e]" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Meals Shared</p>
                <p className="text-2xl font-bold text-gray-800">{dashboardData.stats.totalMeals}</p>
              </div>
              <ChefHat className="w-8 h-8 text-[#f0803e]" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Average Rating</p>
                <p className="text-2xl font-bold text-gray-800">{dashboardData.stats.averageRating}</p>
              </div>
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Upcoming Bookings</p>
                <p className="text-2xl font-bold text-gray-800">{dashboardData.stats.upcomingBookings}</p>
              </div>
              <Users className="w-8 h-8 text-[#f0803e]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-4">
              Recent Bookings
            </h3>
            <div className="space-y-4">
              {dashboardData.recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-800">{booking.guestName}</h4>
                    <p className="text-sm text-gray-600">{booking.mealTitle}</p>
                    <p className="text-sm text-gray-500">{new Date(booking.date).toLocaleDateString()} at {booking.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#f0803e]">GHC {booking.amount.toFixed(2)}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      booking.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <Button className="w-full bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg justify-start">
                <Plus className="w-5 h-5 mr-3" />
                Create New Meal
              </Button>
              <Link to="/profile">
                <Button className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg justify-start">
                  <Eye className="w-5 h-5 mr-3" />
                  View My Profile
                </Button>
              </Link>
              <Link to="/messages">
                <Button className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg justify-start">
                  <MessageSquare className="w-5 h-5 mr-3" />
                  Check Messages
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderMeals = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-['Luckiest_Guy',Helvetica] text-2xl text-gray-800">My Meals</h3>
        <Link to="/create-meal">
          <Button className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg">
            <Plus className="w-5 h-5 mr-2" />
            Add New Meal
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardData.myMeals.map((meal) => (
          <Card key={meal.id} className="rounded-2xl shadow-lg">
            <div className="relative">
              <img
                className="w-full h-48 object-cover rounded-t-2xl"
                alt={meal.title}
                src={meal.image}
              />
              <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                meal.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {meal.status}
              </span>
            </div>
            <CardContent className="p-6">
              <h4 className="font-['Luckiest_Guy',Helvetica] text-lg text-gray-800 mb-2">
                {meal.title}
              </h4>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(meal.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{meal.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{meal.spotsBooked}/{meal.spotsTotal} spots booked</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#f0803e]">GHC {meal.price.toFixed(2)}</span>
                <div className="flex gap-2">
                  <Link to={`/meal/${meal.id}/edit`}>
                    <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg p-2">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link to={`/meal/${meal.id}`}>
                    <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg p-2">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-6">
      <h3 className="font-['Luckiest_Guy',Helvetica] text-2xl text-gray-800">Messages</h3>
      
      <div className="space-y-4">
        {dashboardData.messages.map((message) => (
          <Card key={message.id} className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium text-gray-800">{message.from}</h4>
                    {message.unread && (
                      <span className="w-2 h-2 bg-[#f0803e] rounded-full"></span>
                    )}
                  </div>
                  <p className="text-gray-700 mb-2">{message.message}</p>
                  <p className="text-sm text-gray-500">{message.time}</p>
                </div>
                <Link to="/messages">
                  <Button className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg">
                    Reply
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="mt-20 pt-8 pb-8 bg-gradient-to-r from-[#f0803e] to-[#fdaa00]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="font-['Luckiest_Guy',Helvetica] text-4xl mb-4">
              Cook Dashboard
            </h1>
            <p className="text-xl">
              Manage your meals, bookings, and earnings
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#f0803e] text-white'
                    : 'text-gray-600 hover:text-[#f0803e]'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'meals' && renderMeals()}
            {activeTab === 'bookings' && renderOverview()} {/* Reuse overview for now */}
            {activeTab === 'messages' && renderMessages()}
            {activeTab === 'settings' && (
              <div className="text-center py-12">
                <h3 className="text-xl text-gray-600 mb-4">Manage your account settings</h3>
                <Link to="/settings">
                  <Button className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg">
                    Go to Settings
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};