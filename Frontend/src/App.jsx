import { useState, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './components/Cart'

const Login = lazy(()=> import('./components/Login'))
const Menu = lazy(()=> import('./components/Menu'))
const Order = lazy(()=> import('./components/Order'))

function App() {
  const [count, setCount] = useState(0)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <BrowserRouter>
    <Header setCartOpen={setCartOpen} />
    <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}/>
    <Routes>
      <Route path='/' element={<p>Home page</p>} />
      <Route path='/login' element={<Login />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/order' element={<Order />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
