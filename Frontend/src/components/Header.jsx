import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Header = ({setCartOpen}) => {
    const navigate = useNavigate()

  return (
    <div className='h-12 w-full flex items-center justify-between border border-black'>
        <h1 className='cursor-pointer' onClick={()=> navigate('/')}>Food</h1>
        <div className="flex items-center gap-9">
            <button className='border border-gray-400 px-2' onClick={()=> navigate('/login')}>Login</button>
            <FaShoppingCart className='h-6 w-6' onClick={()=> setCartOpen(true)} />
        </div>
    </div>
  )
}

export default Header