import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slice/userSlice';

const Header = ({ setCartOpen }) => {
  const navigate = useNavigate()
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const dispatch = useDispatch()

  return (
    <div className='h-12 w-full flex items-center justify-between border border-black'>
      <h1 className='cursor-pointer' onClick={() => navigate('/')}>Food</h1>
      <div className="flex items-center gap-9">
        <button className='border border-gray-400 px-2' onClick={() => {
          if (isLoggedIn) {
            dispatch(logout())
          }
          navigate('/login')
        }}>{isLoggedIn ? 'Logout' : 'Login'}</button>
        <FaShoppingCart className='h-6 w-6 cursor-pointer' onClick={() => setCartOpen(true)} />
      </div>
    </div>
  )
}

export default Header