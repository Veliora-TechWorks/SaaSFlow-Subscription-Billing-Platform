import type { User, Subscription, Plan, Invoice, Metric, AIInsight, DashboardData } from '@/types'

// Mock data
const mockUser: User = {
  id: '1',
  email: 'admin@saasflow.com',
  name: 'Alex Johnson',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
  role: 'admin',
  createdAt: new Date('2024-01-01'),
  lastLogin: new Date(),
}

const mockPlans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small teams getting started',
    price: 29,
    currency: 'USD',
    interval: 'month',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      'Email support',
      'API access'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Advanced features for growing businesses',
    price: 99,
    currency: 'USD',
    interval: 'month',
    popular: true,
    features: [
      'Up to 25 team members',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom integrations',
      'Advanced reporting'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Full-scale solution for large organizations',
    price: 299,
    currency: 'USD',
    interval: 'month',
    enterprise: true,
    features: [
      'Unlimited team members',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Full API access',
      'Custom integrations',
      'Advanced reporting',
      'SSO & SAML',
      'Custom contracts'
    ]
  }
]

const mockMetrics: Metric[] = [
  {
    id: '1',
    name: 'Monthly Recurring Revenue',
    value: 124500,
    change: 12.5,
    changeType: 'increase',
    period: 'vs last month'
  },
  {
    id: '2',
    name: 'Annual Recurring Revenue',
    value: 1494000,
    change: 8.3,
    changeType: 'increase',
    period: 'vs last year'
  },
  {
    id: '3',
    name: 'Customer Churn Rate',
    value: 2.1,
    change: 0.5,
    changeType: 'decrease',
    period: 'vs last month'
  },
  {
    id: '4',
    name: 'Customer Lifetime Value',
    value: 4250,
    change: 15.2,
    changeType: 'increase',
    period: 'vs last quarter'
  }
]

const mockInsights: AIInsight[] = [
  {
    id: '1',
    type: 'prediction',
    title: 'Revenue Growth Forecast',
    description: 'Based on current trends, expect 18% MRR growth next quarter with high confidence in enterprise segment expansion.',
    confidence: 0.87,
    impact: 'high',
    createdAt: new Date(),
  },
  {
    id: '2',
    type: 'recommendation',
    title: 'Optimize Pricing Strategy',
    description: 'Consider introducing a mid-tier plan at $149/month to capture customers between Professional and Enterprise tiers.',
    confidence: 0.73,
    impact: 'medium',
    createdAt: new Date(),
  },
  {
    id: '3',
    type: 'alert',
    title: 'Churn Risk Detected',
    description: '12 enterprise customers showing decreased usage patterns. Recommend proactive outreach within 48 hours.',
    confidence: 0.91,
    impact: 'high',
    createdAt: new Date(),
  }
]

// API functions
export const api = {
  auth: {
    login: async (email: string, password: string): Promise<User> => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      if (email === 'admin@saasflow.com' && password === 'password') {
        return mockUser
      }
      throw new Error('Invalid credentials')
    },
    
    logout: async (): Promise<void> => {
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  },
  
  dashboard: {
    getData: async (): Promise<DashboardData> => {
      await new Promise(resolve => setTimeout(resolve, 800))
      return {
        metrics: mockMetrics,
        insights: mockInsights,
        recentInvoices: [],
        subscriptionGrowth: Array.from({ length: 12 }, (_, i) => ({
          date: new Date(2024, i, 1).toISOString().split('T')[0],
          value: Math.floor(Math.random() * 50000) + 80000
        }))
      }
    }
  },
  
  plans: {
    getAll: async (): Promise<Plan[]> => {
      await new Promise(resolve => setTimeout(resolve, 500))
      return mockPlans
    }
  }
}