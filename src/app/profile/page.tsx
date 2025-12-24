"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "admin@saasflow.com",
    company: "SaaSFlow Inc",
    plan: "Enterprise"
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your account details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input 
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input 
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Company</label>
              <Input 
                value={profile.company}
                onChange={(e) => setProfile({...profile, company: e.target.value})}
              />
            </div>
            <Button variant="ai">Save Changes</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Subscription</CardTitle>
            <CardDescription>Manage your billing and plan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Current Plan</span>
              <Badge variant="ai">{profile.plan}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Billing Cycle</span>
              <span className="text-sm text-muted-foreground">Monthly</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Next Payment</span>
              <span className="text-sm text-muted-foreground">Dec 15, 2024</span>
            </div>
            <Button variant="outline" className="w-full">Manage Billing</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}