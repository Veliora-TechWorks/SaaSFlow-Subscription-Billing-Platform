import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { User, Subscription, DashboardData } from '@/types'

interface AppState {
  // User state
  user: User | null
  isAuthenticated: boolean
  
  // Dashboard state
  dashboardData: DashboardData | null
  isLoading: boolean
  
  // Theme state
  theme: 'light' | 'dark' | 'system'
  
  // Actions
  setUser: (user: User | null) => void
  setDashboardData: (data: DashboardData) => void
  setLoading: (loading: boolean) => void
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  logout: () => void
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        user: null,
        isAuthenticated: false,
        dashboardData: null,
        isLoading: false,
        theme: 'system',
        
        // Actions
        setUser: (user) => set({ 
          user, 
          isAuthenticated: !!user 
        }),
        
        setDashboardData: (data) => set({ 
          dashboardData: data,
          isLoading: false 
        }),
        
        setLoading: (loading) => set({ isLoading: loading }),
        
        setTheme: (theme) => set({ theme }),
        
        logout: () => set({ 
          user: null, 
          isAuthenticated: false,
          dashboardData: null 
        }),
      }),
      {
        name: 'saasflow-storage',
        partialize: (state) => ({ 
          user: state.user,
          isAuthenticated: state.isAuthenticated,
          theme: state.theme 
        }),
      }
    ),
    { name: 'SaaSFlow Store' }
  )
)