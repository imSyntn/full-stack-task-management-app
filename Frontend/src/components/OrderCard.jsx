import React from 'react'

const OrderCard = ({ item }) => {
  return (
    <div className='w-full flex justify-between items-center my-2 px-5 '>
      <img src={item.image} alt="" className='w-20 h-20' />
      <div className="text-center">
        <h2>{item.name}</h2>
        <h2>{item.quantity} {(item.quantity > 1) ? 'pieces' : 'piece'}</h2>
      </div>
      <h2>Price: {(item.price * item.quantity).toFixed(2)}</h2>
    </div>
  )
}

export default OrderCard