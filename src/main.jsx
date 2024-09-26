import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
)
