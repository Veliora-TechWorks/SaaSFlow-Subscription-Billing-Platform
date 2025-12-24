"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const customers = [
  { id: 1, name: "Acme Corp", email: "admin@acme.com", plan: "Enterprise", status: "active", mrr: 299 },
  { id: 2, name: "TechStart Inc", email: "hello@techstart.com", plan: "Professional", status: "active", mrr: 99 },
  { id: 3, name: "Global Solutions", email: "contact@global.com", plan: "Professional", status: "trial", mrr: 0 },
]

export default function CustomersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Customers</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customers.map((customer) => (
              <div key={customer.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{customer.name}</h3>
                  <p className="text-sm text-muted-foreground">{customer.email}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant={customer.status === "active" ? "success" : "secondary"}>
                    {customer.status}
                  </Badge>
                  <span className="font-medium">${customer.mrr}/mo</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}