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
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Star, 
  Heart,
  Settings,
  CreditCard,
  Bell,
  Shield,
  Edit
} from 'lucide-react';

export const UserProfile = (): JSX.Element => {
  const { isAuthenticated, user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.name.split(' ')[0] || '',
    lastName: user?.name.split(' ')[1] || '',
    email: user?.email || '',
    phone: '+233 24 123 4567',
    location: 'East Legon, Accra',
    bio: 'Food lover and community enthusiast. I enjoy discovering new flavors and meeting amazing cooks in my neighborhood.',
    dateOfBirth: '1995-08-15'
  });

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  // Mock user data
  const userData = {
    profileImage: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
    joinedDate: '2023-08-15',
    totalBookings: 24,
    favoriteHosts: 8,
    averageRating: 4.9,
    recentBookings: [
      {
        id: 1,
        hostName: 'Kevin Asante',
        mealTitle: 'Traditional Jollof Rice Feast',
        date: '2025-01-10',
        amount: 140.00,
        rating: 5,
        status: 'completed',
        image: '/photo-2023-08-05-20-48-48-1.png'
      },
      {
        id: 2,
        hostName: 'James Wilson',
        mealTitle: 'Italian Pasta Night',
        date: '2025-01-08',
        amount: 95.00,
        rating: 5,
        status: 'completed',
        image: '/photo-2023-08-05-20-48-48-1.png'
      }
    ],
    favoriteHosts: [
      {
        id: 1,
        name: 'Kevin Asante',
        image: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
        rating: 4.8,
        specialties: ['Ghanaian', 'Traditional']
      },
      {
        id: 2,
        name: 'Fatima Abdul',
        image: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
        rating: 4.6,
        specialties: ['Vegetarian', 'Healthy']
      }
    ]
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
    { id: 'bookings', label: 'My Bookings', icon: <Calendar className="w-5 h-5" /> },
    { id: 'favorites', label: 'Favorite Hosts', icon: <Heart className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const renderProfile = () => (
    <div className="space-y-8">
      {/* Profile Header */}
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <img
                className="w-32 h-32 rounded-full object-cover"
                alt="Profile"
                src={userData.profileImage}
              />
              <Button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-[#f0803e] hover:bg-[#d96d35] text-white p-0">
                <Edit className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-['Luckiest_Guy',Helvetica] text-3xl text-gray-800 mb-2">
                {formData.firstName} {formData.lastName}
              </h2>
              <p className="text-gray-600 mb-4">{formData.bio}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{formData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {new Date(userData.joinedDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{userData.averageRating} rating</span>
                </div>
              </div>
            </div>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-[#f0803e] mb-2">{userData.totalBookings}</div>
            <div className="text-gray-600">Total Bookings</div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-[#f0803e] mb-2">{userData.favoriteHosts.length}</div>
            <div className="text-gray-600">Favorite Hosts</div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-[#f0803e] mb-2">{userData.averageRating}</div>
            <div className="text-gray-600">Average Rating</div>
          </CardContent>
        </Card>
      </div>

      {/* Profile Form */}
      {isEditing && (
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-8">
            <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
              Edit Profile Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <Input
                  className="h-12"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <Input
                  className="h-12"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  className="h-12"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <Input
                  className="h-12"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Input
                  className="h-12"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f0803e] focus:border-transparent resize-none"
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <Button
                onClick={handleSave}
                className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg"
              >
                Save Changes
              </Button>
              <Button
                onClick={() => setIsEditing(false)}
                className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderBookings = () => (
    <div className="space-y-6">
      <h3 className="font-['Luckiest_Guy',Helvetica] text-2xl text-gray-800">My Bookings</h3>
      
      <div className="space-y-4">
        {userData.recentBookings.map((booking) => (
          <Card key={booking.id} className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-6">
                <img
                  className="w-20 h-20 object-cover rounded-lg"
                  alt={booking.mealTitle}
                  src={booking.image}
                />
                <div className="flex-1">
                  <h4 className="font-['Luckiest_Guy',Helvetica] text-lg text-gray-800 mb-1">
                    {booking.mealTitle}
                  </h4>
                  <p className="text-gray-600 mb-2">Hosted by {booking.hostName}</p>
                  <p className="text-sm text-gray-500">{new Date(booking.date).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#f0803e] mb-2">GHC {booking.amount.toFixed(2)}</p>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: booking.rating }, (_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full">
                    {booking.status}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderFavorites = () => (
    <div className="space-y-6">
      <h3 className="font-['Luckiest_Guy',Helvetica] text-2xl text-gray-800">Favorite Hosts</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {userData.favoriteHosts.map((host) => (
          <Card key={host.id} className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  alt={host.name}
                  src={host.image}
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800 mb-1">{host.name}</h4>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{host.rating}</span>
                  </div>
                  <div className="flex gap-2">
                    {host.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-[#f0803e] text-white rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to={`/cook/${host.id}`}>
                  <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg p-2">
                    <Heart className="w-5 h-5 fill-current text-red-500" />
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
              My Profile
            </h1>
            <p className="text-xl">
              Manage your account and preferences
            </p>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
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
            {activeTab === 'profile' && renderProfile()}
            {activeTab === 'bookings' && renderBookings()}
            {activeTab === 'favorites' && renderFavorites()}
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