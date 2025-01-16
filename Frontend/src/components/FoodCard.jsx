import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItemInCart, deleteItemFromCart } from '../store/slice/cartSlice'
import { FaShoppingCart } from 'react-icons/fa'
import { MdDelete } from "react-icons/md";

const FoodCard = ({item}) => {
  const [showCart, setShowCart] = useState(false)
  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

  const available = cartItems.find(elm => elm._id == item._id)

  return (
    <div className='justify-self-center border border-gray-400 p-2 rounded-lg relative' onMouseEnter={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)}>
      {
        showCart && <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
          {
            available ? <MdDelete className='w-5 h-5' onClick={()=> dispatch(deleteItemFromCart(item._id))} /> : <FaShoppingCart className='w-5 h-5' onClick={()=> dispatch(addItemInCart({...item, quantity: 1}))} />
          }
        </div>
      }
      <img src={item.image} alt="food image" className='w-80 h-56 object-cover' />
      <h2 className='mt-3 font-bold text-center'>{item.name}</h2>
    </div>
  )
}

export default FoodCard