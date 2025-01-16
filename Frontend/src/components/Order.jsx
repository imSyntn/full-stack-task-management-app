import React from 'react'
import OrderCard from './OrderCard'

const Order = () => {
    return (
        <div className=''>
            <div className="border border-black h-80 w-full">
                sjd
            </div>
            <h2>Orders</h2>
            <div className="border border-black">
               {
                new Array(5).fill(" ").map((_,index)=> <OrderCard key={index*Math.random()} />)
               }
            </div>
            <h2>Previous Orders</h2>
            <div className="border border-black">
               {
                new Array(5).fill(" ").map((_,index)=> <OrderCard key={index*Math.random()} />)
               }
            </div>
        </div>
    )
}

export default Order