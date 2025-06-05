import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import Slick Carousel styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Import custom styles
import './styles/base.css'
import './styles/slick-overrides.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)