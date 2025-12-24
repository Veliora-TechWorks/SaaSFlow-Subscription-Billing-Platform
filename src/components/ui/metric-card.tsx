"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn, formatCurrency, formatNumber } from "@/lib/utils"
import type { Metric } from "@/types"

interface MetricCardProps {
  metric: Metric
  className?: string
  currency?: boolean
}

export function MetricCard({ metric, className, currency = false }: MetricCardProps) {
  const isPositive = metric.changeType === "increase"
  const TrendIcon = isPositive ? TrendingUp : TrendingDown
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className={cn("ai-glow hover:shadow-lg transition-all duration-300", className)}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {metric.name}
          </CardTitle>
          <div className={cn(
            "flex items-center space-x-1 text-xs",
            isPositive ? "text-green-600" : "text-red-600"
          )}>
            <TrendIcon className="h-3 w-3" />
            <span>{Math.abs(metric.change)}%</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {currency ? formatCurrency(metric.value) : formatNumber(metric.value)}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {metric.period}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}