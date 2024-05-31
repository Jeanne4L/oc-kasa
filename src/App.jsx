import Header from './components/Header'
import Home from './pages/Home/index'
import About from './pages/About'
import Error from './pages/Error/index'
import Rental from './pages/Rental'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/rental/:id" element={<Rental />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
