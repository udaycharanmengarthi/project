export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export interface Filing {
  id: string;
  filingNumber: string;
  customer: string;
  type: string;
  status: 'pending' | 'approved' | 'rejected' | 'in-review';
  submittedDate: string;
  value: number;
  description: string;
}

export interface SummaryStats {
  totalFilings: number;
  pendingFilings: number;
  approvedFilings: number;
  awaitingApproval: number;
  totalValue: number;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface FormErrors {
  email?: string;
  password?: string;
}