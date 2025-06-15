import React, { useState, useEffect } from 'react';
import { FileText, Users, Clock, CheckCircle, DollarSign, TrendingUp } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';
import SummaryCard from '../components/SummaryCard';
import FilingsList from '../components/FilingsList';
import { mockFilings, summaryStats } from '../data/mockData';

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LayoutWrapper>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-600 mt-1">Monitor your customs filings and track progress</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Export Report
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              New Filing
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard
            title="Total Filings"
            value={summaryStats.totalFilings}
            icon={FileText}
            color="blue"
            trend={{ value: 12, isPositive: true }}
            loading={loading}
          />
          <SummaryCard
            title="Pending Filings"
            value={summaryStats.pendingFilings}
            icon={Clock}
            color="yellow"
            trend={{ value: 5, isPositive: false }}
            loading={loading}
          />
          <SummaryCard
            title="Approved This Month"
            value={summaryStats.approvedFilings}
            icon={CheckCircle}
            color="green"
            trend={{ value: 18, isPositive: true }}
            loading={loading}
          />
          <SummaryCard
            title="Total Value"
            value={`$${summaryStats.totalValue.toLocaleString()}`}
            icon={DollarSign}
            color="purple"
            trend={{ value: 8, isPositive: true }}
            loading={loading}
          />
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FilingsList filings={mockFilings} loading={loading} />
          </div>
          
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">Create New Filing</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">Add Customer</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-900">View Reports</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { action: 'Filing CF-2024-001 submitted', time: '2 hours ago', type: 'success' },
                  { action: 'Customer approval pending', time: '4 hours ago', type: 'warning' },
                  { action: 'Document uploaded', time: '6 hours ago', type: 'info' },
                  { action: 'Filing CF-2024-002 approved', time: '1 day ago', type: 'success' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'warning' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default Dashboard;