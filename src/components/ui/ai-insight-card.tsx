"use client"

import { motion } from "framer-motion"
import { Brain, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { AIInsight } from "@/types"

interface AIInsightCardProps {
  insight: AIInsight
  className?: string
}

const iconMap = {
  prediction: TrendingUp,
  recommendation: Lightbulb,
  alert: AlertTriangle,
}

const impactColors = {
  low: "text-green-500",
  medium: "text-yellow-500",
  high: "text-red-500",
}

export function AIInsightCard({ insight, className }: AIInsightCardProps) {
  const Icon = iconMap[insight.type]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={cn("glass-effect border-l-4 border-l-ai-primary", className)}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-ai-primary/10">
                <Icon className="h-4 w-4 text-ai-primary" />
              </div>
              <CardTitle className="text-sm font-medium">{insight.title}</CardTitle>
            </div>
            <Badge variant="ai" className="text-xs">
              {Math.round(insight.confidence * 100)}% confident
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            {insight.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-3 w-3 text-ai-primary" />
              <span className="text-xs text-muted-foreground">AI Generated</span>
            </div>
            <span className={cn("text-xs font-medium", impactColors[insight.impact])}>
              {insight.impact.toUpperCase()} IMPACT
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}