import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MaxWidthWrapper from './components/ui/MaxWidthWrapper.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MaxWidthWrapper>
      <App />
    </MaxWidthWrapper>
  </React.StrictMode>
)
