import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Modal } from '../../components/ui/modal';
import { useToast } from '../../components/ui/toast';
import { Search, TriangleAlert as AlertTriangle, Loader, Calendar, User, Eye } from 'lucide-react';

interface Report {
  id: string;
  reporterName: string;
  reportedUser: string;
  reportedEvent?: string;
  reason: string;
  description: string;
  dateReported: string;
  status: 'pending' | 'resolved';
}

export const AdminReports = (): JSX.Element => {
  const [reports, setReports] = useState<Report[]>([]);
  const [filteredReports, setFilteredReports] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'resolved'>('all');
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setIsLoading(true);
        // Mock API call - replace with actual API endpoint
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockReports: Report[] = [
          {
            id: '1',
            reporterName: 'Sarah Johnson',
            reportedUser: 'Kevin Asante',
            reportedEvent: 'Traditional Jollof Rice Feast',
            reason: 'Inappropriate behavior',
            description: 'The host was rude to guests and made inappropriate comments during the meal.',
            dateReported: '2025-01-14',
            status: 'pending'
          },
          {
            id: '2',
            reporterName: 'Michael Chen',
            reportedUser: 'Ama Serwaa',
            reason: 'Food safety concerns',
            description: 'The food was not properly cooked and several guests got sick after the meal.',
            dateReported: '2025-01-13',
            status: 'pending'
          },
          {
            id: '3',
            reporterName: 'Lisa Williams',
            reportedUser: 'James Wilson',
            reportedEvent: 'Italian Pasta Night',
            reason: 'No-show host',
            description: 'The host never showed up and left guests waiting for over an hour.',
            dateReported: '2025-01-12',
            status: 'resolved'
          },
          {
            id: '4',
            reporterName: 'David Brown',
            reportedUser: 'Fatima Abdul',
            reason: 'Misleading description',
            description: 'The meal description was completely different from what was served.',
            dateReported: '2025-01-11',
            status: 'resolved'
          }
        ];
        
        setReports(mockReports);
        setFilteredReports(mockReports);
      } catch (error) {
        showToast('error', 'Failed to load reports');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, [showToast]);

  useEffect(() => {
    let filtered = reports;

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(report => report.status === statusFilter);
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(report =>
        report.reporterName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.reportedUser.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.reason.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredReports(filtered);
  }, [reports, searchTerm, statusFilter]);

  const handleViewReport = (report: Report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  const handleResolveReport = async (reportId: string) => {
    setActionLoading(true);
    try {
      // Mock API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setReports(prev => prev.map(report =>
        report.id === reportId
          ? { ...report, status: 'resolved' as const }
          : report
      ));
      
      showToast('success', 'Report marked as resolved');
      setIsModalOpen(false);
    } catch (error) {
      showToast('error', 'Failed to resolve report');
    } finally {
      setActionLoading(false);
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
    return status === 'pending' 
      ? 'bg-yellow-100 text-yellow-800' 
      : 'bg-green-100 text-green-800';
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div className="mt-4 md:mt-6 lg:mt-8 mb-4 md:mb-6">
        <h1 className="font-['Luckiest_Guy',Helvetica] text-2xl md:text-3xl text-gray-800 mb-2">
          Reports & Complaints
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Manage user reports and complaints
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
                  placeholder="Search by reporter, reported user, or reason..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="h-10 md:h-12 px-3 md:px-4 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-[#f0803e] focus:border-transparent text-sm md:text-base"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as 'all' | 'pending' | 'resolved')}
              >
                <option value="all">All Reports</option>
                <option value="pending">Pending</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Reports Table */}
        <Card className="rounded-xl md:rounded-2xl shadow-lg">
          <CardContent className="p-0">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader className="w-8 h-8 animate-spin text-[#f0803e]" />
                <span className="ml-3 text-gray-600 text-sm md:text-base">Loading reports...</span>
              </div>
            ) : filteredReports.length === 0 ? (
              <div className="text-center py-12">
                <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-base md:text-lg font-medium text-gray-600 mb-2">No reports found</p>
                <p className="text-gray-500 text-sm md:text-base">
                  {searchTerm || statusFilter !== 'all'
                    ? 'Try adjusting your search or filter criteria'
                    : 'No reports have been submitted yet'
                  }
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200 hidden md:table-header-group">
                    <tr>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Reporter</th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Reported User/Event</th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Reason</th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Date</th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Status</th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReports.map((report) => (
                      <tr key={report.id} className="hover:bg-gray-50 md:table-row flex flex-col border-b md:border-b-0 py-4 md:py-0">
                        <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                          <span className="font-medium text-gray-500 md:hidden">Reporter:</span>
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-gray-400" />
                            <span className="font-medium text-gray-900 text-sm md:text-base">{report.reporterName}</span>
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                          <span className="font-medium text-gray-500 md:hidden">Reported:</span>
                          <div className="text-gray-900 font-medium text-sm md:text-base">{report.reportedUser}</div>
                          {report.reportedEvent && (
                            <div className="text-xs md:text-sm text-gray-500">{report.reportedEvent}</div>
                          )}
                        </td>
                        <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                          <span className="font-medium text-gray-500 md:hidden">Reason:</span>
                          <div className="text-gray-600 text-sm md:text-base" title={report.reason}>
                            {truncateText(report.reason, 30)}
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                          <span className="font-medium text-gray-500 md:hidden">Date:</span>
                          <div className="flex items-center text-gray-600 text-sm md:text-base">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{formatDate(report.dateReported)}</span>
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                          <span className="font-medium text-gray-500 md:hidden">Status:</span>
                          <span className={`inline-flex px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${getStatusColor(report.status)}`}>
                            {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-2 md:py-4 md:table-cell flex justify-between md:block">
                          <span className="font-medium text-gray-500 md:hidden">Actions:</span>
                          <Button
                            onClick={() => handleViewReport(report)}
                            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-2 md:px-3 py-1 text-xs md:text-sm min-h-[44px] flex items-center"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
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

      {/* Report Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Report Details"
      >
        {selectedReport && (
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Reporter Information</h3>
              <p className="text-gray-600">{selectedReport.reporterName}</p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Reported User/Event</h3>
              <p className="text-gray-600">{selectedReport.reportedUser}</p>
              {selectedReport.reportedEvent && (
                <p className="text-sm text-gray-500">Event: {selectedReport.reportedEvent}</p>
              )}
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Reason</h3>
              <p className="text-gray-600">{selectedReport.reason}</p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">{selectedReport.description}</p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Date Reported</h3>
              <p className="text-gray-600">{formatDate(selectedReport.dateReported)}</p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Status</h3>
              <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedReport.status)}`}>
                {selectedReport.status === 'pending' ? 'Pending' : 'Resolved'}
              </span>
            </div>

            {selectedReport.status === 'pending' && (
              <div className="pt-4 border-t">
                <Button
                  onClick={() => handleResolveReport(selectedReport.id)}
                  disabled={actionLoading}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 min-h-[44px]"
                >
                  {actionLoading ? 'Resolving...' : 'Mark as Resolved'}
                </Button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};