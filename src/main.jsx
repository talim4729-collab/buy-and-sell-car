import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter basename="/talim4729-collab/buy-and-sell-car">
    <StrictMode>
      <App />
   </StrictMode>,
   </BrowserRouter>
  
)
