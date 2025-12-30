"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, TrendingUp, Shield, Brain, Users, DollarSign, BarChart3, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCurrencyStore } from "@/store/currency-store"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get intelligent predictions and recommendations to optimize your subscription business"
  },
  {
    icon: TrendingUp,
    title: "Revenue Analytics",
    description: "Track MRR, ARR, churn rates, and customer lifetime value with real-time dashboards"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and advanced data protection"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for performance with edge computing and optimized for global scale"
  }
]

const stats = [
  { label: "Revenue Processed", value: "$1B+", icon: DollarSign },
  { label: "Active Subscriptions", value: "500K+", icon: Users },
  { label: "Countries Supported", value: "180+", icon: BarChart3 },
  { label: "Uptime SLA", value: "99.99%", icon: CheckCircle }
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    content: "SaaSFlow transformed our billing process. Revenue increased 40% in 6 months.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "CFO, DataSync",
    content: "The AI insights helped us reduce churn by 25%. Incredible platform.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "Emily Watson",
    role: "Founder, CloudBase",
    content: "Best subscription management platform we've used. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
  }
]

const pricingPlans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for small teams",
    features: ["Up to 5 team members", "Basic analytics", "Email support"]
  },
  {
    name: "Professional",
    price: 99,
    description: "For growing businesses",
    features: ["Up to 25 team members", "Advanced analytics", "Priority support"],
    popular: true
  },
  {
    name: "Enterprise",
    price: 299,
    description: "For large organizations",
    features: ["Unlimited team members", "Enterprise analytics", "24/7 support"]
  }
]

export default function LandingPage() {
  const { formatPrice } = useCurrencyStore()
  
  const statsWithCurrency = [
    { label: "Revenue Processed", value: formatPrice(12000) + "+", icon: DollarSign },
    { label: "Active Subscriptions", value: "500K+", icon: Users },
    { label: "Countries Supported", value: "180+", icon: BarChart3 },
    { label: "Uptime SLA", value: "99.99%", icon: CheckCircle }
  ]
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 mesh-bg opacity-10" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8 inline-flex items-center rounded-full bg-ai-primary/10 px-4 py-2 text-sm font-medium text-ai-primary"
            >
              <Brain className="mr-2 h-4 w-4" />
              AI-First Subscription Platform
            </motion.div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="gradient-text">Intelligent Subscription</span>
              <br />
              Management Platform
            </h1>
            
            <p className="mb-8 text-xl text-muted-foreground">
              Harness the power of AI to optimize your subscription business. 
              Get predictive insights, automate billing, and scale globally with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="ai" className="text-lg px-8" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/dashboard">
                  View Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-6 w-6 text-ai-primary mr-2" />
                  <div className="text-3xl font-bold text-ai-primary">{stat.value}</div>
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Everything you need to scale your subscription business
            </h2>
            <p className="text-lg text-muted-foreground">
              From AI-powered insights to global payment processing, 
              we've got you covered at every stage of growth.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-ai-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-ai-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Trusted by industry leaders</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of companies using SaaSFlow to optimize their recurring revenue.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm mb-4">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-10 w-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect plan for your business. Start free, scale as you grow.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="ai">Most Popular</Badge>
                  </div>
                )}
                <Card className={`h-full ${plan.popular ? 'ring-2 ring-ai-primary' : ''}`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{formatPrice(plan.price)}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full mb-4" 
                      variant={plan.popular ? "ai" : "outline"}
                      asChild
                    >
                      <Link href="/signup">Get Started</Link>
                    </Button>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/pricing">View Full Pricing Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ai-primary to-ai-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-2xl text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to transform your subscription business?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join thousands of companies using SaaSFlow to optimize their recurring revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-ai-primary" asChild>
                <Link href="/dashboard">
                  View Live Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}