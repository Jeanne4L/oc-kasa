import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Header from './components/Header'
import Home from './pages/Home/index'
import About from './pages/About'
import Error from './components/Error/index'
import Location from './pages/Location'
import Footer from './components/Footer'
import reportWebVitals from './reportWebVitals'
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
                <Route path="/location/:id" element={<Location />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
