import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { ConfirmModal } from '../../components/ui/modal';
import { useToast } from '../../components/ui/toast';
import { Search, Users, Loader, Calendar, Shield, ShieldOff } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  status: 'active' | 'suspended';
}

export const AdminUsers = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'suspended'>('all');
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    user: User | null;
    action: 'suspend' | 'activate';
  }>({ isOpen: false, user: null, action: 'suspend' });
  const [actionLoading, setActionLoading] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        // Mock API call - replace with actual API endpoint
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockUsers: User[] = [
          {
            id: '1',
            name: 'Kevin Asante',
            email: 'kevin@example.com',
            joinDate: '2024-12-01',
            status: 'active'
          },
          {
            id: '2',
            name: 'Ama Serwaa',
            email: 'ama@example.com',
            joinDate: '2024-11-15',
            status: 'active'
          },
          {
            id: '3',
            name: 'James Wilson',
            email: 'james@example.com',
            joinDate: '2024-10-20',
            status: 'suspended'
          },
          {
            id: '4',
            name: 'Fatima Abdul',
            email: 'fatima@example.com',
            joinDate: '2024-12-10',
            status: 'active'
          },
          {
            id: '5',
            name: 'Chen Wei',
            email: 'chen@example.com',
            joinDate: '2024-09-05',
            status: 'active'
          }
        ];
        
        setUsers(mockUsers);
        setFilteredUsers(mockUsers);
      } catch (error) {
        showToast('error', 'Failed to load users');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [showToast]);

  useEffect(() => {
    let filtered = users;

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(user => user.status === statusFilter);
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
  }, [users, searchTerm, statusFilter]);

  const handleUserAction = async (user: User, action: 'suspend' | 'activate') => {
    setConfirmModal({ isOpen: true, user, action });
  };

  const confirmUserAction = async () => {
    if (!confirmModal.user) return;

    setActionLoading(true);
    try {
      // Mock API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newStatus = confirmModal.action === 'suspend' ? 'suspended' : 'active';
      setUsers(prev => prev.map(user =>
        user.id === confirmModal.user!.id
          ? { ...user, status: newStatus }
          : user
      ));
      
      showToast('success', `User ${confirmModal.action}d successfully`);
    } catch (error) {
      showToast('error', `Failed to ${confirmModal.action} user`);
    } finally {
      setActionLoading(false);
      setConfirmModal({ isOpen: false, user: null, action: 'suspend' });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  };

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div className="mt-4 md:mt-6 lg:mt-8 mb-4 md:mb-6">
        <h1 className="font-['Luckiest_Guy',Helvetica] text-2xl md:text-3xl text-gray-800 mb-2">
          User Management
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Manage user accounts and permissions
        </p>
      </div>

      <div className="space-y-4 md:space-y-6">
        {/* Search and Filter */}
        <Card className="rounded-xl md:rounded-2xl shadow-lg">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  className="h-10 md:h-12 pl-12"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="h-10 md:h-12 px-3 md:px-4 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-[#f0803e] focus:border-transparent text-sm md:text-base"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as 'all' | 'active' | 'suspended')}
              >
                <option value="all">All Users</option>
                <option value="active">Active Only</option>
                <option value="suspended">Suspended Only</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card className="rounded-xl md:rounded-2xl shadow-lg">
          <CardContent className="p-0">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader className="w-8 h-8 animate-spin text-[#f0803e]" />
                <span className="ml-3 text-gray-600 text-sm md:text-base">Loading users...</span>
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-base md:text-lg font-medium text-gray-600 mb-2">No users found</p>
                <p className="text-gray-500 text-sm md:text-base">
                  {searchTerm || statusFilter !== 'all'
                    ? 'Try adjusting your search or filter criteria'
                    : 'No users have registered yet'
                  }
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200 hidden md:table-header-group">
                    <tr>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Name</th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Email</th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Join Date</th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Status</th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50 md:table-row flex flex-col border-b md:border-b-0 py-4 md:py-0">
                        <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                          <span className="font-medium text-gray-500 md:hidden">Name:</span>
                          <div className="font-medium text-gray-900 text-sm md:text-base">{user.name}</div>
                        </td>
                        <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                          <span className="font-medium text-gray-500 md:hidden">Email:</span>
                          <div className="text-gray-600 text-sm md:text-base">{user.email}</div>
                        </td>
                        <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                          <span className="font-medium text-gray-500 md:hidden">Join Date:</span>
                          <div className="flex items-center text-gray-600 text-sm md:text-base">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{formatDate(user.joinDate)}</span>
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                          <span className="font-medium text-gray-500 md:hidden">Status:</span>
                          <span className={`inline-flex px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${getStatusColor(user.status)}`}>
                            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                          <span className="font-medium text-gray-500 md:hidden">Actions:</span>
                          {user.status === 'active' ? (
                            <Button
                              onClick={() => handleUserAction(user, 'suspend')}
                              className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-2 md:px-3 py-1 text-xs md:text-sm min-h-[44px] flex items-center"
                            >
                              <ShieldOff className="w-4 h-4 mr-2" />
                              Suspend
                            </Button>
                          ) : (
                            <Button
                              onClick={() => handleUserAction(user, 'activate')}
                              className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-2 md:px-3 py-1 text-xs md:text-sm min-h-[44px] flex items-center"
                            >
                              <Shield className="w-4 h-4 mr-2" />
                              Activate
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal({ isOpen: false, user: null, action: 'suspend' })}
        onConfirm={confirmUserAction}
        title={`${confirmModal.action === 'suspend' ? 'Suspend' : 'Activate'} User`}
        message={`Are you sure you want to ${confirmModal.action} "${confirmModal.user?.name}"?`}
        confirmText={confirmModal.action === 'suspend' ? 'Suspend' : 'Activate'}
        isLoading={actionLoading}
      />
    </div>
  );
};