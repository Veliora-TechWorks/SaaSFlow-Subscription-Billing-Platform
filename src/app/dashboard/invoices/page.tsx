"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"

const invoices = [
  { id: "INV-001", customer: "Acme Corp", amount: 299, status: "paid", date: "2024-11-15", dueDate: "2024-11-30" },
  { id: "INV-002", customer: "TechStart Inc", amount: 99, status: "paid", date: "2024-11-10", dueDate: "2024-11-25" },
  { id: "INV-003", customer: "Global Solutions", amount: 99, status: "pending", date: "2024-11-05", dueDate: "2024-11-20" },
  { id: "INV-004", customer: "Innovation Labs", amount: 29, status: "overdue", date: "2024-10-28", dueDate: "2024-11-12" },
]

export default function InvoicesPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <Button variant="ai">Create Invoice</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{invoice.id}</h3>
                  <p className="text-sm text-muted-foreground">{invoice.customer}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-medium">${invoice.amount}</span>
                  <Badge variant={
                    invoice.status === "paid" ? "success" : 
                    invoice.status === "pending" ? "secondary" : "destructive"
                  }>
                    {invoice.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">Due: {invoice.dueDate}</span>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}