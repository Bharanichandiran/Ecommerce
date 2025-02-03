import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Choose from './Choose'
import Sale from './sale.jsx'
import Furniture from './Furniture.jsx'
import TestimonialCarousel from './TestimonialCarousel.jsx'
import App from './App.jsx'
import InteriorSection from './InteriorSection.jsx'
import Footer from './Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Choose />
    <InteriorSection />
    <Sale />
    <Furniture />
    <TestimonialCarousel />
    <Footer />
  </StrictMode>,
)
