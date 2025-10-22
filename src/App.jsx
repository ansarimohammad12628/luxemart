import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Router/Navbar'
import SimplePage from './Pages/SimplePage'
import { HomePage } from './Pages/HomePage'
import { AboutPage } from './Pages/AboutPage'
import ProductPage from './Pages/ProductPage'
import { CartPage } from './Pages/CartPage'
import { ContactPage } from './Pages/ContactPage'
import { LoginPage } from './Router/LoginPage'
import { Provider } from 'react-redux'
import { store } from './App/store'
import { CookiesProvider } from 'react-cookie'
import ProtectedRoute from './Router/ProtectedRoute'
import Footer from './Pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CookiesProvider>

    <Provider store={store}>

  <BrowserRouter>
  <Navbar/>
  <Routes>

    <Route path='/' element={<SimplePage/>}/>
    <Route path='/home' element={
      <ProtectedRoute>
        <HomePage/>
      </ProtectedRoute>
    }/>
    <Route path='/about' element={
      <ProtectedRoute>
        <AboutPage/>
      </ProtectedRoute>
    }/>
    <Route path='/product' element={
      <ProtectedRoute>
        <ProductPage/>
      </ProtectedRoute>
    }/>
    <Route path='/cart' element={
      <ProtectedRoute>
        <CartPage/>
      </ProtectedRoute>
    }/>
    <Route path='/contact' element={
      <ProtectedRoute>
        <ContactPage/>
      </ProtectedRoute>
    }/>
    <Route path='/login' element={<LoginPage/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
    </Provider>
    </CookiesProvider>
    </>
  )
}

export default App
