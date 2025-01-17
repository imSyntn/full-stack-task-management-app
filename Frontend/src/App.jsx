import { useState, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './components/Cart'
import { ToastContainer } from 'react-toastify'

const Home = lazy(() => import('./components/Home'))
const Login = lazy(() => import('./components/Login'))
const Menu = lazy(() => import('./components/Menu'))
const MenuEdit = lazy(() => import('./components/MenuEdit'))
const Order = lazy(() => import('./components/Order'))

function App() {
  const [count, setCount] = useState(0)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <BrowserRouter>
      <Header setCartOpen={setCartOpen} />
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/:id' element={<MenuEdit />} />
        <Route path='/menu/post' element={<MenuEdit />} />
        <Route path='/order' element={<Order />} />
        <Route path='*' element={<p>404</p>} />
      </Routes>
      <footer className='my-2 text-center'>Sayantan Sarkar</footer>
    </BrowserRouter>
  )
}

export default App
