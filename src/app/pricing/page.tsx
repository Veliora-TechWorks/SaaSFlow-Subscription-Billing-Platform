"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Zap, Crown, Building } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCurrencyStore } from "@/store/currency-store"
import { api } from "@/lib/api"
import { formatCurrency } from "@/lib/utils"

const intervals = [
  { label: "Monthly", value: "month" },
  { label: "Yearly", value: "year", discount: 20 }
]

const planIcons = {
  starter: Zap,
  professional: Crown,
  enterprise: Building
}

export default function PricingPage() {
  const [selectedInterval, setSelectedInterval] = useState("month")
  const { formatPrice } = useCurrencyStore()
  
  const { data: plans, isLoading } = useQuery({
    queryKey: ['plans'],
    queryFn: api.plans.getAll,
  })

  const calculatePrice = (basePrice: number) => {
    if (selectedInterval === "year") {
      return basePrice * 12 * 0.8
    }
    return basePrice
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-ai-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the perfect plan for your business. Upgrade or downgrade at any time.
          </p>
          
          {/* Interval Toggle */}
          <div className="inline-flex items-center rounded-lg bg-muted p-1">
            {intervals.map((interval) => (
              <button
                key={interval.value}
                onClick={() => setSelectedInterval(interval.value)}
                className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  selectedInterval === interval.value
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {interval.label}
                {interval.discount && (
                  <Badge variant="success" className="ml-2 text-xs">
                    Save {interval.discount}%
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans?.map((plan, index) => {
            const Icon = planIcons[plan.id as keyof typeof planIcons]
            const price = calculatePrice(plan.price)
            const isPopular = plan.popular
            const isEnterprise = plan.enterprise
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="ai" className="px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full ${isPopular ? 'ring-2 ring-ai-primary shadow-lg' : ''} ${isEnterprise ? 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20' : ''}`}>
                  <CardHeader className="text-center pb-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-ai-primary to-ai-secondary">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold">
                          {formatPrice(price)}
                        </span>
                        <span className="text-muted-foreground ml-1">
                          /{selectedInterval === "year" ? "year" : "month"}
                        </span>
                      </div>
                      {selectedInterval === "year" && (
                        <p className="text-sm text-green-600 mt-1">
                          Save {formatPrice(plan.price * 12 * 0.2)} annually
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <Button 
                      className="w-full" 
                      variant={isPopular ? "ai" : isEnterprise ? "premium" : "outline"}
                      size="lg"
                    >
                      {isEnterprise ? "Contact Sales" : "Get Started"}
                    </Button>
                    
                    <div className="space-y-3">
                      <p className="font-medium">Everything in {plan.name}:</p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, all plans come with a 14-day free trial. No credit card required to start."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all annual subscriptions."
              }
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-medium">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}