import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import SmoothScroll from './components/SmoothScroll.jsx'
import store from './config/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </Provider>
    </BrowserRouter>
  </StrictMode >,
)
