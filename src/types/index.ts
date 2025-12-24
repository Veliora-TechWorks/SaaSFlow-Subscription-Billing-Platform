export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: "admin" | "finance" | "user"
  createdAt: Date
  lastLogin?: Date
}

export interface Subscription {
  id: string
  userId: string
  planId: string
  status: "active" | "canceled" | "past_due" | "trialing"
  currentPeriodStart: Date
  currentPeriodEnd: Date
  cancelAtPeriodEnd: boolean
  trialEnd?: Date
  metadata?: Record<string, any>
}

export interface Plan {
  id: string
  name: string
  description: string
  price: number
  currency: string
  interval: "month" | "year"
  features: string[]
  popular?: boolean
  enterprise?: boolean
}

export interface Invoice {
  id: string
  subscriptionId: string
  amount: number
  currency: string
  status: "paid" | "pending" | "failed"
  dueDate: Date
  paidAt?: Date
  items: InvoiceItem[]
}

export interface InvoiceItem {
  id: string
  description: string
  quantity: number
  unitPrice: number
  amount: number
}

export interface Metric {
  id: string
  name: string
  value: number
  change: number
  changeType: "increase" | "decrease"
  period: string
}

export interface AIInsight {
  id: string
  type: "prediction" | "recommendation" | "alert"
  title: string
  description: string
  confidence: number
  impact: "low" | "medium" | "high"
  createdAt: Date
  metadata?: Record<string, any>
}

export interface DashboardData {
  metrics: Metric[]
  insights: AIInsight[]
  recentInvoices: Invoice[]
  subscriptionGrowth: Array<{
    date: string
    value: number
  }>
}