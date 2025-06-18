import { Filing, SummaryStats, User } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@company.com',
  role: 'Senior Customs Specialist',
  avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
};

export const mockFilings: Filing[] = [
  {
    id: '1',
    filingNumber: 'CF-2024-001',
    customer: 'Global Trade Corporation',
    type: 'Import Declaration',
    status: 'pending',
    submittedDate: '2024-01-15T10:30:00Z',
    value: 145000,
    description: 'High-tech electronics shipment from Shenzhen, China - includes smartphones, tablets, and accessories'
  },
  {
    id: '2',
    filingNumber: 'CF-2024-002',
    customer: 'International Logistics Ltd',
    type: 'Export Declaration',
    status: 'approved',
    submittedDate: '2024-01-14T14:20:00Z',
    value: 89000,
    description: 'Industrial machinery export to Hamburg, Germany - CNC machines and precision tools'
  },
  {
    id: '3',
    filingNumber: 'CF-2024-003',
    customer: 'Pacific Shipping Co',
    type: 'Transit Declaration',
    status: 'in-review',
    submittedDate: '2024-01-13T09:15:00Z',
    value: 234000,
    description: 'Automotive parts transit through Rotterdam - engine components and transmission systems'
  },
  {
    id: '4',
    filingNumber: 'CF-2024-004',
    customer: 'Euro Imports Inc',
    type: 'Import Declaration',
    status: 'pending',
    submittedDate: '2024-01-12T16:45:00Z',
    value: 67000,
    description: 'Premium food products from Tuscany, Italy - olive oil, wine, and artisanal cheeses'
  },
  {
    id: '5',
    filingNumber: 'CF-2024-005',
    customer: 'Asia Trade Solutions',
    type: 'Export Declaration',
    status: 'approved',
    submittedDate: '2024-01-11T11:30:00Z',
    value: 156000,
    description: 'High-quality textile export to Tokyo, Japan - organic cotton fabrics and designer clothing'
  },
  {
    id: '6',
    filingNumber: 'CF-2024-006',
    customer: 'North American Freight',
    type: 'Import Declaration',
    status: 'rejected',
    submittedDate: '2024-01-10T13:20:00Z',
    value: 43000,
    description: 'Chemical products shipment - rejected due to incomplete hazmat documentation'
  },
  {
    id: '7',
    filingNumber: 'CF-2024-007',
    customer: 'Mediterranean Trading Co',
    type: 'Export Declaration',
    status: 'approved',
    submittedDate: '2024-01-09T08:45:00Z',
    value: 78000,
    description: 'Agricultural equipment export to Morocco - irrigation systems and farming tools'
  },
  {
    id: '8',
    filingNumber: 'CF-2024-008',
    customer: 'Nordic Imports AS',
    type: 'Import Declaration',
    status: 'in-review',
    submittedDate: '2024-01-08T15:10:00Z',
    value: 112000,
    description: 'Renewable energy components from Denmark - wind turbine parts and solar panels'
  },
  {
    id: '9',
    filingNumber: 'CF-2024-009',
    customer: 'South American Logistics',
    type: 'Transit Declaration',
    status: 'pending',
    submittedDate: '2024-01-07T12:30:00Z',
    value: 189000,
    description: 'Coffee and cocoa beans transit from Brazil - premium grade organic products'
  },
  {
    id: '10',
    filingNumber: 'CF-2024-010',
    customer: 'Tech Innovations Ltd',
    type: 'Import Declaration',
    status: 'approved',
    submittedDate: '2024-01-06T10:15:00Z',
    value: 298000,
    description: 'Advanced semiconductor components from Taiwan - microprocessors and memory chips'
  }
];

export const summaryStats: SummaryStats = {
  totalFilings: mockFilings.length,
  pendingFilings: mockFilings.filter(f => f.status === 'pending').length,
  approvedFilings: mockFilings.filter(f => f.status === 'approved').length,
  awaitingApproval: mockFilings.filter(f => f.status === 'in-review').length,
  totalValue: mockFilings.reduce((sum, filing) => sum + filing.value, 0)
};

// Recent activity data
export const recentActivity = [
  {
    id: '1',
    action: 'Filing CF-2024-010 approved by customs authority',
    time: '2 hours ago',
    type: 'success' as const,
    filingId: '10'
  },
  {
    id: '2',
    action: 'New customer registration: Tech Innovations Ltd',
    time: '4 hours ago',
    type: 'info' as const
  },
  {
    id: '3',
    action: 'Document uploaded for CF-2024-009',
    time: '6 hours ago',
    type: 'info' as const,
    filingId: '9'
  },
  {
    id: '4',
    action: 'Filing CF-2024-006 rejected - documentation required',
    time: '1 day ago',
    type: 'warning' as const,
    filingId: '6'
  },
  {
    id: '5',
    action: 'Payment processed for CF-2024-008',
    time: '1 day ago',
    type: 'success' as const,
    filingId: '8'
  }
];