import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeoresApp } from './HeoresApp'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeoresApp />
    </BrowserRouter>
  </StrictMode>,
)
