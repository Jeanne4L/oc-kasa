import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Header from './components/Header'
import Home from './pages/Home/index'
import About from './pages/About'
import Error from './components/Error/index'
import Renting from './pages/Renting'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
                <Route path="/renting/:id" element={<Renting />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)
