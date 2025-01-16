import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const FoodCard = ({ name, url }) => {
  const [showCart, setShowCart] = useState(false)

  return (
    <div className='justify-self-center border border-gray-400 p-2 rounded-lg relative' onMouseEnter={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)}>
      {
        showCart && <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
          <FaShoppingCart className='w-5 h-5' />
        </div>
      }
      <img src={url} alt="food image" className='w-80 h-56 object-cover' />
      <h2 className='mt-3 font-bold text-center'>{name}</h2>
    </div>
  )
}

export default FoodCard