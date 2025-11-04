import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { ConfirmModal } from '../../components/ui/modal';
import { useToast } from '../../components/ui/toast';
import { Search, ChefHat, Loader, Calendar, Users } from 'lucide-react';

interface MealSession {
  id: string;
  hostName: string;
  eventTitle: string;
  date: string;
  time: string;
  attendees: number;
  maxAttendees: number;
  status: 'active' | 'completed' | 'cancelled';
}

export const AdminSessions = (): JSX.Element => {
  const [sessions, setSessions] = useState<MealSession[]>([]);
  const [filteredSessions, setFilteredSessions] = useState<MealSession[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    session: MealSession | null;
    action: 'delete' | 'deactivate';
  }>({ isOpen: false, session: null, action: 'delete' });
  const [actionLoading, setActionLoading] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        setIsLoading(true);
        // Mock API call - replace with actual API endpoint
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockSessions: MealSession[] = [
          {
            id: '1',
            hostName: 'Kevin Asante',
            eventTitle: 'Traditional Jollof Rice Feast',
            date: '2025-01-15',
            time: '6:30 PM',
            attendees: 4,
            maxAttendees: 6,
            status: 'active'
          },
          {
            id: '2',
            hostName: 'Ama Serwaa',
            eventTitle: 'Homemade Banku & Tilapia',
            date: '2025-01-16',
            time: '7:00 PM',
            attendees: 2,
            maxAttendees: 4,
            status: 'active'
          },
          {
            id: '3',
            hostName: 'James Wilson',
            eventTitle: 'Italian Pasta Night',
            date: '2025-01-12',
            time: '7:30 PM',
            attendees: 6,
            maxAttendees: 6,
            status: 'completed'
          },
          {
            id: '4',
            hostName: 'Fatima Abdul',
            eventTitle: 'Vegetarian Delight',
            date: '2025-01-18',
            time: '6:00 PM',
            attendees: 3,
            maxAttendees: 5,
            status: 'active'
          },
          {
            id: '5',
            hostName: 'Chen Wei',
            eventTitle: 'Asian Fusion Experience',
            date: '2025-01-10',
            time: '7:15 PM',
            attendees: 0,
            maxAttendees: 4,
            status: 'cancelled'
          }
        ];
        
        setSessions(mockSessions);
        setFilteredSessions(mockSessions);
      } catch (error) {
        showToast('error', 'Failed to load meal sessions');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSessions();
  }, [showToast]);

  useEffect(() => {
    let filtered = sessions;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(session =>
        session.eventTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        session.hostName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredSessions(filtered);
  }, [sessions, searchTerm]);

  const handleSessionAction = async (session: MealSession, action: 'delete' | 'deactivate') => {
    setConfirmModal({ isOpen: true, session, action });
  };

  const confirmSessionAction = async () => {
    if (!confirmModal.session) return;

    setActionLoading(true);
    try {
      // Mock API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (confirmModal.action === 'delete') {
        setSessions(prev => prev.filter(session => session.id !== confirmModal.session!.id));
        showToast('success', 'Session deleted successfully');
      } else {
        setSessions(prev => prev.map(session =>
          session.id === confirmModal.session!.id
            ? { ...session, status: 'cancelled' as const }
            : session
        ));
        showToast('success', 'Session deactivated successfully');
      }
    } catch (error) {
      showToast('error', `Failed to ${confirmModal.action} session`);
    } finally {
      setActionLoading(false);
      setConfirmModal({ isOpen: false, session: null, action: 'delete' });
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
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div className="mt-4 md:mt-6 lg:mt-8 mb-4 md:mb-6">
        <h1 className="font-['Luckiest_Guy',Helvetica] text-2xl md:text-3xl text-gray-800 mb-2">
          Meal Session Management
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Manage meal sessions and events
        </p>
      </div>

      <div className="space-y-4 md:space-y-6">
      {/* Search */}
      <Card className="rounded-xl md:rounded-2xl shadow-lg mb-6">
        <CardContent className="p-4 md:p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              className="h-10 md:h-12 pl-12"
              placeholder="Search by event title or host name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Sessions Table */}
      <Card className="rounded-xl md:rounded-2xl shadow-lg">
        <CardContent className="p-0">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader className="w-8 h-8 animate-spin text-[#f0803e]" />
              <span className="ml-3 text-gray-600 text-sm md:text-base">Loading sessions...</span>
            </div>
          ) : filteredSessions.length === 0 ? (
            <div className="text-center py-12">
              <ChefHat className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-base md:text-lg font-medium text-gray-600 mb-2">No meal sessions found</p>
              <p className="text-gray-500 text-sm md:text-base">
                {searchTerm 
                  ? 'Try adjusting your search criteria'
                  : 'No meal sessions have been created yet'
                }
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200 hidden md:table-header-group">
                  <tr>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Host Name</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Event Title</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Date & Time</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Attendees</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Status</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSessions.map((session) => (
                    <tr key={session.id} className="hover:bg-gray-50 md:table-row flex flex-col border-b md:border-b-0 py-4 md:py-0">
                      <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                        <span className="font-medium text-gray-500 md:hidden">Host:</span>
                        <div className="font-medium text-gray-900 text-sm md:text-base">{session.hostName}</div>
                      </td>
                      <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                        <span className="font-medium text-gray-500 md:hidden">Event:</span>
                        <div className="text-gray-900 text-sm md:text-base">{session.eventTitle}</div>
                      </td>
                      <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                        <span className="font-medium text-gray-500 md:hidden">Date & Time:</span>
                        <div className="flex items-center text-gray-600 text-sm md:text-base">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{formatDate(session.date)} at {session.time}</span>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                        <span className="font-medium text-gray-500 md:hidden">Attendees:</span>
                        <div className="flex items-center text-gray-600 text-sm md:text-base">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{session.attendees}/{session.maxAttendees}</span>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                        <span className="font-medium text-gray-500 md:hidden">Status:</span>
                        <span className={`inline-flex px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${getStatusColor(session.status)}`}>
                          {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                        <span className="font-medium text-gray-500 md:hidden">Actions:</span>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                          {session.status === 'active' && (
                            <Button
                              onClick={() => handleSessionAction(session, 'deactivate')}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-2 md:px-3 py-1 text-xs md:text-sm min-h-[44px]"
                            >
                              Deactivate
                            </Button>
                          )}
                          <Button
                            onClick={() => handleSessionAction(session, 'delete')}
                              className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-2 md:px-3 py-1 text-xs md:text-sm min-h-[44px]"
                          >
                            Delete
                          </Button>
                        </div>
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
        onClose={() => setConfirmModal({ isOpen: false, session: null, action: 'delete' })}
        onConfirm={confirmSessionAction}
        title={`${confirmModal.action === 'delete' ? 'Delete' : 'Deactivate'} Session`}
        message={`Are you sure you want to ${confirmModal.action} "${confirmModal.session?.eventTitle}"?`}
        confirmText={confirmModal.action === 'delete' ? 'Delete' : 'Deactivate'}
        isLoading={actionLoading}
      />
    </div>
  );
};