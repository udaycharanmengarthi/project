import React, { useState } from 'react';
import { FileText, Calendar, DollarSign, Eye, MoreHorizontal } from 'lucide-react';
import { Filing } from '../types';

interface FilingsListProps {
  filings: Filing[];
  loading?: boolean;
}

const statusConfig = {
  pending: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    label: 'Pending'
  },
  approved: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-800',
    label: 'Approved'
  },
  rejected: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    label: 'Rejected'
  },
  'in-review': {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    label: 'In Review'
  }
};

const FilingsList: React.FC<FilingsListProps> = ({ filings, loading = false }) => {
  const [selectedFiling, setSelectedFiling] = useState<string | null>(null);

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="divide-y divide-gray-200">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="p-4 animate-pulse">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
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
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Recent Filings</h3>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            View All
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Filing
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filings.map((filing) => (
              <tr key={filing.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{filing.filingNumber}</div>
                      <div className="text-sm text-gray-500">{filing.type}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{filing.customer}</div>
                  <div className="text-sm text-gray-500 truncate max-w-xs">{filing.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusConfig[filing.status].bg} ${statusConfig[filing.status].text}`}>
                    {statusConfig[filing.status].label}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${filing.value.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(filing.submittedDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 p-1">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      className="text-gray-400 hover:text-gray-600 p-1"
                      onClick={() => setSelectedFiling(selectedFiling === filing.id ? null : filing.id)}
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden divide-y divide-gray-200">
        {filings.map((filing) => (
          <div key={filing.id} className="p-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {filing.filingNumber}
                  </p>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusConfig[filing.status].bg} ${statusConfig[filing.status].text}`}>
                    {statusConfig[filing.status].label}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{filing.customer}</p>
                <p className="text-xs text-gray-500 mb-2 line-clamp-2">{filing.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <DollarSign className="w-3 h-3 mr-1" />
                    {filing.value.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(filing.submittedDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 p-1">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilingsList;