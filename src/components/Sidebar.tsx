import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  HelpCircle, 
  Menu, 
  X,
  Ship
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', active: true },
  { icon: FileText, label: 'Filings', href: '/filings', active: false },
  { icon: Users, label: 'Customers', href: '/customers', active: false },
  { icon: HelpCircle, label: 'Help', href: '/help', active: false },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Ship className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CustomsPortal</span>
          </div>
          <button
            onClick={onToggle}
            className="lg:hidden p-1 text-gray-600 hover:text-gray-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                    ${item.active 
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-blue-900 mb-1">Need Help?</h4>
            <p className="text-xs text-blue-700 mb-3">Contact our support team for assistance</p>
            <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors">
              Get Support
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white border border-gray-200 rounded-lg shadow-sm"
      >
        <Menu className="w-5 h-5 text-gray-600" />
      </button>
    </>
  );
};

export default Sidebar;