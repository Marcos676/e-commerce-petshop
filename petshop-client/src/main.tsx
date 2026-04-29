import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import AppProviders from './components/AppProviders.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders />
  </StrictMode>,
)
