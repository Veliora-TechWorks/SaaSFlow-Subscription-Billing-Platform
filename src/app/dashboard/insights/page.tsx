"use client"

import { AIInsightCard } from "@/components/ui/ai-insight-card"

const insights = [
  {
    id: "1",
    type: "prediction" as const,
    title: "Revenue Forecast",
    description: "Expected 25% growth in Q4 based on current trends and seasonal patterns.",
    confidence: 0.89,
    impact: "high" as const,
    createdAt: new Date(),
  },
  {
    id: "2",
    type: "recommendation" as const,
    title: "Pricing Optimization",
    description: "Consider introducing a $149 mid-tier plan to capture more enterprise customers.",
    confidence: 0.76,
    impact: "medium" as const,
    createdAt: new Date(),
  },
  {
    id: "3",
    type: "alert" as const,
    title: "Churn Risk",
    description: "8 customers showing decreased usage. Recommend immediate outreach.",
    confidence: 0.92,
    impact: "high" as const,
    createdAt: new Date(),
  },
]

export default function InsightsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">AI Insights</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight) => (
          <AIInsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  )
}