import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeoresApp } from './HeoresApp'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeoresApp />
  </StrictMode>,
)
