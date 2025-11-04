import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Users, ChefHat, UserCheck, TrendingUp } from 'lucide-react';

interface DashboardStats {
  totalUsers: number;
  totalSessions: number;
  activeUsers: number;
  totalRevenue: number;
}

export const AdminDashboard = (): JSX.Element => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        // Mock API call - replace with actual API endpoint
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockStats: DashboardStats = {
          totalUsers: 1247,
          totalSessions: 89,
          activeUsers: 342,
          totalRevenue: 15420.50
        };
        
        setStats(mockStats);
      } catch (err) {
        setError('Failed to load dashboard statistics');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Total Users',
      value: stats?.totalUsers || 0,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Meal Sessions',
      value: stats?.totalSessions || 0,
      icon: ChefHat,
      color: 'text-[#f0803e]',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Active Users',
      value: stats?.activeUsers || 0,
      icon: UserCheck,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Total Revenue',
      value: `GHC ${stats?.totalRevenue?.toFixed(2) || '0.00'}`,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">
          <TrendingUp className="w-12 h-12 mx-auto mb-2" />
          <p className="text-lg font-medium">Error Loading Dashboard</p>
        </div>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div className="mt-4 md:mt-6 lg:mt-8 mb-4 md:mb-6">
        <h1 className="font-['Luckiest_Guy',Helvetica] text-2xl md:text-3xl text-gray-800 mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Welcome to the MealJoin admin dashboard
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8 lg:mb-12">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="rounded-xl md:rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <div className="animate-pulse">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-16 h-8 bg-gray-200 rounded mb-2"></div>
                  <div className="w-24 h-4 bg-gray-200 rounded"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8 lg:mb-12">
          {statCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} className="rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 ${card.bgColor} rounded-full flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${card.color}`} />
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                    {typeof card.value === 'number' ? card.value.toLocaleString() : card.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    {card.title}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Recent Activity Section */}
      <div className="space-y-4 md:space-y-6">
        <h2 className="font-['Luckiest_Guy',Helvetica] text-xl md:text-2xl text-gray-800 mb-4 md:mb-6">
          Recent Activity
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card className="rounded-xl md:rounded-2xl shadow-lg">
            <CardContent className="p-4 md:p-6">
              <h3 className="font-medium text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Recent User Registrations</h3>
              <div className="space-y-3">
                {[
                  { name: 'Ama Serwaa', email: 'ama@example.com', time: '2 hours ago' },
                  { name: 'Kwame Asante', email: 'kwame@example.com', time: '4 hours ago' },
                  { name: 'James Wilson', email: 'james@example.com', time: '6 hours ago' }
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">{user.name}</p>
                      <p className="text-xs md:text-sm text-gray-500">{user.email}</p>
                    </div>
                    <span className="text-xs md:text-sm text-gray-400">{user.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl md:rounded-2xl shadow-lg">
            <CardContent className="p-4 md:p-6">
              <h3 className="font-medium text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Recent Meal Sessions</h3>
              <div className="space-y-3">
                {[
                  { title: 'Jollof Rice Feast', host: 'Kevin Asante', time: '1 hour ago' },
                  { title: 'Italian Pasta Night', host: 'Maria Giuseppe', time: '3 hours ago' },
                  { title: 'Vegetarian Delight', host: 'Fatima Abdul', time: '5 hours ago' }
                ].map((session, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">{session.title}</p>
                      <p className="text-xs md:text-sm text-gray-500">by {session.host}</p>
                    </div>
                    <span className="text-xs md:text-sm text-gray-400">{session.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};