import ReactDOM from 'react-dom/client'
import { Provider } from './providers'
import React from 'react'
import '@/shared/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>
)
