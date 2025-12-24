"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    companyName: "SaaSFlow Inc",
    email: "admin@saasflow.com",
    currency: "USD",
    timezone: "UTC",
    notifications: true,
    autoInvoicing: true,
    trialPeriod: 14
  })

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Company Settings</CardTitle>
            <CardDescription>Manage your company information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Company Name</label>
              <Input 
                value={settings.companyName}
                onChange={(e) => setSettings({...settings, companyName: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input 
                value={settings.email}
                onChange={(e) => setSettings({...settings, email: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Default Currency</label>
              <Input 
                value={settings.currency}
                onChange={(e) => setSettings({...settings, currency: e.target.value})}
              />
            </div>
            <Button variant="ai">Save Changes</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Billing Settings</CardTitle>
            <CardDescription>Configure billing and subscription options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium">Email Notifications</label>
                <p className="text-xs text-muted-foreground">Send billing notifications</p>
              </div>
              <Switch 
                checked={settings.notifications}
                onCheckedChange={(checked) => setSettings({...settings, notifications: checked})}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium">Auto Invoicing</label>
                <p className="text-xs text-muted-foreground">Automatically generate invoices</p>
              </div>
              <Switch 
                checked={settings.autoInvoicing}
                onCheckedChange={(checked) => setSettings({...settings, autoInvoicing: checked})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Trial Period (days)</label>
              <Input 
                type="number"
                value={settings.trialPeriod}
                onChange={(e) => setSettings({...settings, trialPeriod: parseInt(e.target.value)})}
              />
            </div>
            <Button variant="outline">Update Billing</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>API Keys</CardTitle>
            <CardDescription>Manage your API access</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Production Key</p>
                <p className="text-sm text-muted-foreground">pk_live_••••••••••••••••</p>
              </div>
              <Badge variant="success">Active</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Test Key</p>
                <p className="text-sm text-muted-foreground">pk_test_••••••••••••••••</p>
              </div>
              <Badge variant="secondary">Test</Badge>
            </div>
            <Button variant="outline" className="w-full">Generate New Key</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>Account security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">Change Password</Button>
            <Button variant="outline" className="w-full">Enable 2FA</Button>
            <Button variant="destructive" className="w-full">Delete Account</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}