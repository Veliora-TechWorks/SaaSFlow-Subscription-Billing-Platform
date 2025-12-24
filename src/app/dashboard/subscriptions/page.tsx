"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const subscriptions = [
  { id: 1, customer: "Acme Corp", plan: "Enterprise", status: "active", amount: 299, nextBilling: "2024-12-15" },
  { id: 2, customer: "TechStart Inc", plan: "Professional", status: "active", amount: 99, nextBilling: "2024-12-10" },
  { id: 3, customer: "Global Solutions", plan: "Professional", status: "trial", amount: 0, nextBilling: "2024-12-05" },
  { id: 4, customer: "Innovation Labs", plan: "Starter", status: "past_due", amount: 29, nextBilling: "2024-11-28" },
]

export default function SubscriptionsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Subscriptions</h1>
        <Button variant="ai">Create Subscription</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Active Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subscriptions.map((sub) => (
              <div key={sub.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{sub.customer}</h3>
                  <p className="text-sm text-muted-foreground">{sub.plan} Plan</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant={
                    sub.status === "active" ? "success" : 
                    sub.status === "trial" ? "secondary" : "destructive"
                  }>
                    {sub.status}
                  </Badge>
                  <span className="font-medium">${sub.amount}/mo</span>
                  <span className="text-sm text-muted-foreground">{sub.nextBilling}</span>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}