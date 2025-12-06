import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import connection from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <connection/>
  </StrictMode>,
)
