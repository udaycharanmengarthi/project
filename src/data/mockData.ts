import { Filing, SummaryStats, User } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@company.com',
  role: 'Customs Specialist',
  avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
};

export const mockFilings: Filing[] = [
  {
    id: '1',
    filingNumber: 'CF-2024-001',
    customer: 'Global Trade Corp',
    type: 'Import Declaration',
    status: 'pending',
    submittedDate: '2024-01-15',
    value: 45000,
    description: 'Electronics shipment from China'
  },
  {
    id: '2',
    filingNumber: 'CF-2024-002',
    customer: 'International Logistics Ltd',
    type: 'Export Declaration',
    status: 'approved',
    submittedDate: '2024-01-14',
    value: 32000,
    description: 'Machinery export to Germany'
  },
  {
    id: '3',
    filingNumber: 'CF-2024-003',
    customer: 'Pacific Shipping Co',
    type: 'Transit Declaration',
    status: 'in-review',
    submittedDate: '2024-01-13',
    value: 78000,
    description: 'Automotive parts transit'
  },
  {
    id: '4',
    filingNumber: 'CF-2024-004',
    customer: 'Euro Imports Inc',
    type: 'Import Declaration',
    status: 'pending',
    submittedDate: '2024-01-12',
    value: 25000,
    description: 'Food products from Italy'
  },
  {
    id: '5',
    filingNumber: 'CF-2024-005',
    customer: 'Asia Trade Solutions',
    type: 'Export Declaration',
    status: 'approved',
    submittedDate: '2024-01-11',
    value: 56000,
    description: 'Textile export to Japan'
  },
  {
    id: '6',
    filingNumber: 'CF-2024-006',
    customer: 'North American Freight',
    type: 'Import Declaration',
    status: 'rejected',
    submittedDate: '2024-01-10',
    value: 18000,
    description: 'Chemical products - documentation error'
  }
];

export const summaryStats: SummaryStats = {
  totalFilings: mockFilings.length,
  pendingFilings: mockFilings.filter(f => f.status === 'pending').length,
  approvedFilings: mockFilings.filter(f => f.status === 'approved').length,
  awaitingApproval: mockFilings.filter(f => f.status === 'in-review').length,
  totalValue: mockFilings.reduce((sum, filing) => sum + filing.value, 0)
};