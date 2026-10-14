import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import Story from './context/Story.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <Story>
    <App />
    </Story>
    </UserContext>
  </StrictMode>,
)
