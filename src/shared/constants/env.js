export const APP_NAME = import.meta.env.VITE_APP_NAME || 'My Green Heaven'
export const APP_ENV = import.meta.env.VITE_APP_ENV || 'development'
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

export const isProduction = APP_ENV === 'production'
export const isDevelopment = APP_ENV === 'development'
