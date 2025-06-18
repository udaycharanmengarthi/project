import React, { useState } from 'react';
import { Bell, LogOut, Settings, User, Search, Menu } from 'lucide-react';
import { mockUser } from '../data/mockData';

interface HeaderProps {
  onLogout?: () => void;
  onMenuToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout, onMenuToggle }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, message: 'Filing CF-2024-010 has been approved', time: '2h ago', unread: true },
    { id: 2, message: 'New document uploaded for CF-2024-009', time: '4h ago', unread: true },
    { id: 3, message: 'Payment processed successfully', time: '1d ago', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">Welcome back, {mockUser.name.split(' ')[0]}</p>
          </div>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search filings, customers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search button for mobile */}
          <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Search className="w-5 h-5" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${notification.unread ? 'bg-blue-50' : ''}`}>
                      <p className="text-sm text-gray-900">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>

          {/* User Menu */}
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="flex items-center space-x-3">
              {mockUser.avatar ? (
                <img
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-200"
                />
              ) : (
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-gray-900">{mockUser.name}</p>
                <p className="text-xs text-gray-500">{mockUser.role}</p>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;