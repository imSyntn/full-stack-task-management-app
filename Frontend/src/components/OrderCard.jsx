import React from 'react'

const OrderCard = () => {
  return (
    <div className='bg-gray-400 w-full flex justify-between items-center my-2 px-5'>
        <img src="https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg" alt="" className='w-20 h-20' />
        <h2>Kebab</h2>
        <h2>Price: 5252</h2>
        <h2>5 pieces</h2>
    </div>
  )
}

export default OrderCard