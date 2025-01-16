import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = ({ cartOpen, setCartOpen }) => {

    const navigate = useNavigate()

    // const cartRef = useRef(null)

    // const clicked = (e) => {
    //     console.log(cartRef.current.contains(e.current))
    //     // console.log(e)
    //     if (!cartRef.current.contains(e.current)) {
    //         setCartOpen(false)
    //     }
    // }

    return (
        <div className={`fixed top-0 right-0 h-screen z-10 ${cartOpen ? 'w-full opacity-1' : 'w-0 opacity-0'} transition-all duration-300 bg-[#0000006e] overflow-x-hidden overflow-y-auto flex justify-end`} onClick={() => setCartOpen(false)}>
            <div className="h-full w-80 bg-white flex flex-col justify-between px-4 py-3" onClick={(e) => e.preventDefault()}>
                <h2 className=' mb-4'>Cart</h2>
                <div className="h-full overflow-y-auto">
                    {
                        Array(15).fill(" ").map((_, index) => (
                            <div key={index} className="border border-black flex items-center justify-between gap-3 my-3 pr-2">
                                <img src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg" className='w-14' alt="" />
                                <div className="">
                                    <h2>Pizza</h2>
                                    <p>Price: 500/-</p>
                                </div>
                                <div className="flex">
                                    <button className='border border-gray-400 h-8 w-7 flex justify-center items-center'>-</button>
                                    <div className='border border-gray-400 h-8 w-7 flex justify-center items-center'>55</div>
                                    <button className='border border-gray-400 h-8 w-7 flex justify-center items-center'>+</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <h3 className='w-full py-2 text-center font-bold text-lg'>Total: 6969</h3>
                <button className=' w-full bg-green-400 py-2' onClick={() => navigate('/order')}>Order now</button>
            </div>
        </div>
    )
}

export default Cart