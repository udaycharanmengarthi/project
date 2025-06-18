import React, { useState, useEffect } from 'react';
import { FileText, Users, Clock, CheckCircle, DollarSign, TrendingUp, Plus, Download } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';
import SummaryCard from '../components/SummaryCard';
import FilingsList from '../components/FilingsList';
import { mockFilings, summaryStats, recentActivity } from '../data/mockData';

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-emerald-500';
      case 'warning':
        return 'bg-amber-500';
      case 'info':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <LayoutWrapper>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-600 mt-1">Monitor your customs filings and track progress in real-time</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>New Filing</span>
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard
            title="Total Filings"
            value={summaryStats.totalFilings}
            icon={FileText}
            color="blue"
            trend={{ value: 12, isPositive: true }}
            loading={loading}
          />
          <SummaryCard
            title="Pending Review"
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
            value={`$${(summaryStats.totalValue / 1000000).toFixed(1)}M`}
            icon={DollarSign}
            color="purple"
            trend={{ value: 8, isPositive: true }}
            loading={loading}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <FilingsList filings={mockFilings} loading={loading} />
          </div>
          
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-900">Create New Filing</span>
                      <p className="text-xs text-gray-500">Start a new customs declaration</p>
                    </div>
                  </div>
                </button>
                <button className="w-full text-left p-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-900">Add Customer</span>
                      <p className="text-xs text-gray-500">Register new trading partner</p>
                    </div>
                  </div>
                </button>
                <button className="w-full text-left p-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-900">View Analytics</span>
                      <p className="text-xs text-gray-500">Detailed performance reports</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${getActivityIcon(activity.type)}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 leading-relaxed">{activity.action}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">This Month's Performance</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Processing Time</span>
                  <span className="text-sm font-semibold text-gray-900">2.3 days avg</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Approval Rate</span>
                  <span className="text-sm font-semibold text-green-600">94.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default Dashboard;