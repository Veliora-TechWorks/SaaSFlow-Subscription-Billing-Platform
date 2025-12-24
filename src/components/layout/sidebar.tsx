"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  Users,
  CreditCard,
  BarChart3,
  Settings,
  FileText,
  Zap,
  Brain
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Customers', href: '/dashboard/customers', icon: Users },
  { name: 'Subscriptions', href: '/dashboard/subscriptions', icon: CreditCard },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'AI Insights', href: '/dashboard/insights', icon: Brain },
  { name: 'Invoices', href: '/dashboard/invoices', icon: FileText },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-card border-r">
      <div className="flex h-16 items-center px-6 border-b">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-ai-primary to-ai-secondary">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">SaaSFlow</span>
        </Link>
      </div>
      
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={cn(
                  "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-ai-primary/10 text-ai-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </motion.div>
            </Link>
          )
        })}
      </nav>
      
      <div className="p-4 border-t">
        <div className="rounded-lg bg-gradient-to-r from-ai-primary/10 to-ai-secondary/10 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Brain className="h-4 w-4 text-ai-primary" />
            <span className="text-sm font-medium">AI Assistant</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Get intelligent insights about your business performance
          </p>
          <button className="w-full text-xs bg-ai-primary text-white rounded-md py-2 hover:bg-ai-primary/90 transition-colors">
            Ask AI
          </button>
        </div>
      </div>
    </div>
  )
}