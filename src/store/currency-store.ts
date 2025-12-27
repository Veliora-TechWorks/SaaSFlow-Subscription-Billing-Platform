import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Currency {
  code: string
  symbol: string
  name: string
  rate: number
}

const currencies: Currency[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1 },
  { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.85 },
  { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.73 },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 83.12 },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', rate: 110.0 },
]

interface CurrencyState {
  selectedCurrency: Currency
  currencies: Currency[]
  setCurrency: (currency: Currency) => void
  convertPrice: (price: number) => number
  formatPrice: (price: number) => string
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set, get) => ({
      selectedCurrency: currencies[0],
      currencies,
      
      setCurrency: (currency) => set({ selectedCurrency: currency }),
      
      convertPrice: (price) => {
        const { selectedCurrency } = get()
        return Math.round(price * selectedCurrency.rate)
      },
      
      formatPrice: (price) => {
        const { selectedCurrency, convertPrice } = get()
        const convertedPrice = convertPrice(price)
        return `${selectedCurrency.symbol}${convertedPrice.toLocaleString()}`
      },
    }),
    {
      name: 'currency-storage',
    }
  )
)