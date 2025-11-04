import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Navigation } from '../../components/shared/Navigation';
import { Footer } from '../../components/shared/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Moon, 
  Eye,
  Lock,
  Smartphone,
  Mail
} from 'lucide-react';

export const Settings = (): JSX.Element => {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('account');
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false,
      bookingUpdates: true,
      newMessages: true,
      promotions: false
    },
    privacy: {
      profileVisibility: 'public',
      showLocation: true,
      showPhone: false,
      allowMessages: true
    },
    security: {
      twoFactor: false,
      loginAlerts: true
    }
  });

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  const tabs = [
    { id: 'account', label: 'Account', icon: <SettingsIcon className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'privacy', label: 'Privacy', icon: <Eye className="w-5 h-5" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'payment', label: 'Payment', icon: <CreditCard className="w-5 h-5" /> }
  ];

  const handleToggle = (section: string, setting: string) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [setting]: !(prev[section as keyof typeof prev] as any)[setting]
      }
    }));
  };

  const renderAccount = () => (
    <div className="space-y-6">
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
            Account Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input className="h-12" value="user@example.com" disabled />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <Input className="h-12" value="+233 24 123 4567" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select className="w-full h-12 px-4 border border-gray-300 rounded-lg">
                <option>English</option>
                <option>Twi</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Currency
              </label>
              <select className="w-full h-12 px-4 border border-gray-300 rounded-lg">
                <option>GHC (Ghanaian Cedi)</option>
                <option>USD (US Dollar)</option>
                <option>EUR (Euro)</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <Button className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
            Danger Zone
          </h3>
          <div className="space-y-4">
            <div className="p-4 border border-red-200 rounded-lg">
              <h4 className="font-medium text-red-800 mb-2">Deactivate Account</h4>
              <p className="text-sm text-red-600 mb-3">
                Temporarily disable your account. You can reactivate it anytime.
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white rounded-lg">
                Deactivate Account
              </Button>
            </div>
            <div className="p-4 border border-red-200 rounded-lg">
              <h4 className="font-medium text-red-800 mb-2">Delete Account</h4>
              <p className="text-sm text-red-600 mb-3">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white rounded-lg">
                Delete Account
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
            Notification Preferences
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-4">Delivery Methods</h4>
              <div className="space-y-3">
                {[
                  { key: 'email', label: 'Email Notifications', icon: <Mail className="w-5 h-5" /> },
                  { key: 'push', label: 'Push Notifications', icon: <Smartphone className="w-5 h-5" /> },
                  { key: 'sms', label: 'SMS Notifications', icon: <Smartphone className="w-5 h-5" /> }
                ].map((method) => (
                  <div key={method.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      {method.icon}
                      <span className="font-medium text-gray-800">{method.label}</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications[method.key as keyof typeof settings.notifications]}
                        onChange={() => handleToggle('notifications', method.key)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#f0803e]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f0803e]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 mb-4">What to notify me about</h4>
              <div className="space-y-3">
                {[
                  { key: 'bookingUpdates', label: 'Booking Updates', description: 'New bookings, cancellations, and changes' },
                  { key: 'newMessages', label: 'New Messages', description: 'Messages from hosts and guests' },
                  { key: 'promotions', label: 'Promotions & Tips', description: 'Special offers and cooking tips' }
                ].map((notification) => (
                  <div key={notification.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-800">{notification.label}</div>
                      <div className="text-sm text-gray-600">{notification.description}</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications[notification.key as keyof typeof settings.notifications]}
                        onChange={() => handleToggle('notifications', notification.key)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#f0803e]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f0803e]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPrivacy = () => (
    <div className="space-y-6">
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
            Privacy Settings
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Visibility
              </label>
              <select 
                className="w-full h-12 px-4 border border-gray-300 rounded-lg"
                value={settings.privacy.profileVisibility}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  privacy: { ...prev.privacy, profileVisibility: e.target.value }
                }))}
              >
                <option value="public">Public - Anyone can see my profile</option>
                <option value="members">Members Only - Only MealJoin members</option>
                <option value="private">Private - Only people I've interacted with</option>
              </select>
            </div>

            <div className="space-y-3">
              {[
                { key: 'showLocation', label: 'Show My Location', description: 'Display your general area to other users' },
                { key: 'showPhone', label: 'Show Phone Number', description: 'Allow hosts to see your phone number' },
                { key: 'allowMessages', label: 'Allow Messages', description: 'Let other users send you messages' }
              ].map((setting) => (
                <div key={setting.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-800">{setting.label}</div>
                    <div className="text-sm text-gray-600">{setting.description}</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.privacy[setting.key as keyof typeof settings.privacy]}
                      onChange={() => handleToggle('privacy', setting.key)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#f0803e]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f0803e]"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
            Security Settings
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-4">Password</h4>
              <div className="space-y-3">
                <Input className="h-12" type="password" placeholder="Current Password" />
                <Input className="h-12" type="password" placeholder="New Password" />
                <Input className="h-12" type="password" placeholder="Confirm New Password" />
                <Button className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg">
                  Update Password
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { key: 'twoFactor', label: 'Two-Factor Authentication', description: 'Add an extra layer of security to your account' },
                { key: 'loginAlerts', label: 'Login Alerts', description: 'Get notified when someone logs into your account' }
              ].map((setting) => (
                <div key={setting.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-800">{setting.label}</div>
                    <div className="text-sm text-gray-600">{setting.description}</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.security[setting.key as keyof typeof settings.security]}
                      onChange={() => handleToggle('security', setting.key)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#f0803e]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f0803e]"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPayment = () => (
    <div className="space-y-6">
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
            Payment Methods
          </h3>
          <div className="space-y-4 mb-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                    VISA
                  </div>
                  <div>
                    <div className="font-medium">**** **** **** 1234</div>
                    <div className="text-sm text-gray-600">Expires 12/26</div>
                  </div>
                </div>
                <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg">
                  Remove
                </Button>
              </div>
            </div>
          </div>
          <Button className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg">
            Add Payment Method
          </Button>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
            Payout Settings (For Cooks)
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank Account
              </label>
              <Input className="h-12" placeholder="Account Number" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank Name
              </label>
              <Input className="h-12" placeholder="e.g., GCB Bank" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Holder Name
              </label>
              <Input className="h-12" placeholder="Full name as on bank account" />
            </div>
            <Button className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg">
              Save Payout Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      <section className="mt-20 pt-8 pb-8 bg-gradient-to-r from-[#f0803e] to-[#fdaa00]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="font-['Luckiest_Guy',Helvetica] text-4xl mb-4">
              Settings
            </h1>
            <p className="text-xl">
              Manage your account preferences and security
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
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

          <div>
            {activeTab === 'account' && renderAccount()}
            {activeTab === 'notifications' && renderNotifications()}
            {activeTab === 'privacy' && renderPrivacy()}
            {activeTab === 'security' && renderSecurity()}
            {activeTab === 'payment' && renderPayment()}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};