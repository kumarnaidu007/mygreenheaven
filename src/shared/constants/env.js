export const APP_NAME = import.meta.env.VITE_APP_NAME || 'mygreenheaven.in'
export const APP_ENV = import.meta.env.VITE_APP_ENV || 'development'
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'
export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''

export const isProduction = APP_ENV === 'production'
export const isDevelopment = APP_ENV === 'development'
