import React, { useState } from 'react';
import { FileText, Calendar, DollarSign, Eye, MoreHorizontal, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Filing } from '../types';

interface FilingsListProps {
  filings: Filing[];
  loading?: boolean;
}

const statusConfig = {
  pending: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    label: 'Pending',
    icon: Clock
  },
  approved: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    label: 'Approved',
    icon: CheckCircle
  },
  rejected: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    border: 'border-red-200',
    label: 'Rejected',
    icon: XCircle
  },
  'in-review': {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
    label: 'In Review',
    icon: AlertCircle
  }
};

const FilingsList: React.FC<FilingsListProps> = ({ filings, loading = false }) => {
  const [selectedFiling, setSelectedFiling] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="divide-y divide-gray-200">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="p-6 animate-pulse">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                <div className="flex-1 space-y-2">
                  <div className="w-40 h-4 bg-gray-200 rounded"></div>
                  <div className="w-24 h-3 bg-gray-200 rounded"></div>
                </div>
                <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Recent Filings</h3>
          <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            View All
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Filing Details
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Value
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filings.slice(0, 6).map((filing) => {
              const StatusIcon = statusConfig[filing.status].icon;
              return (
                <tr key={filing.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{filing.filingNumber}</div>
                        <div className="text-sm text-gray-500">{filing.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{filing.customer}</div>
                    <div className="text-sm text-gray-500 max-w-xs truncate">{filing.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${statusConfig[filing.status].bg} ${statusConfig[filing.status].text} ${statusConfig[filing.status].border}`}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {statusConfig[filing.status].label}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    ${filing.value.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{formatDate(filing.submittedDate)}</div>
                    <div className="text-xs text-gray-500">{formatTime(filing.submittedDate)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setSelectedFiling(selectedFiling === filing.id ? null : filing.id)}
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden divide-y divide-gray-200">
        {filings.slice(0, 6).map((filing) => {
          const StatusIcon = statusConfig[filing.status].icon;
          return (
            <div key={filing.id} className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {filing.filingNumber}
                    </p>
                    <div className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full border ${statusConfig[filing.status].bg} ${statusConfig[filing.status].text} ${statusConfig[filing.status].border}`}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {statusConfig[filing.status].label}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700 mb-1">{filing.customer}</p>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">{filing.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center font-semibold">
                      <DollarSign className="w-3 h-3 mr-1" />
                      ${filing.value.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(filing.submittedDate)}
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilingsList;