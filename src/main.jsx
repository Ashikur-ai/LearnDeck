import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './pages/context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>    
  ,
)
