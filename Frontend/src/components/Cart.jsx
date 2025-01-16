import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { deleteItemFromCart, incrementQuantity, decrementQuantity } from '../store/slice/cartSlice';
import axios from 'axios';

const Cart = ({ cartOpen, setCartOpen }) => {

    const navigate = useNavigate()
    const cartItems = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)

    // const cartRef = useRef(null)

    // const clicked = (e) => {
    //     console.log(cartRef.current.contains(e.current))
    //     // console.log(e)
    //     if (!cartRef.current.contains(e.current)) {
    //         setCartOpen(false)
    //     }
    // }

    const createOrder = () => {
        axios.post('http://localhost:5000/order', { reqItems: [...cartItems] }, { withCredentials: true }).then(e => {
            navigate('/order')
            console.log(e)
        }).catch(e => console.log(e))
    }

    return (
        <div className={`fixed top-0 right-0 h-screen z-10 ${cartOpen ? 'w-full opacity-1' : 'w-0 opacity-0'} transition-all duration-300 bg-[#0000006e] overflow-x-hidden overflow-y-auto flex justify-end`}
        //  onClick={() => setCartOpen(false)}
        >
            <div className="relative h-full w-[360px] bg-white flex flex-col justify-between px-4 py-3"
            //  onClick={(e) => e.preventDefault()}
            >
                <h2 className=' mb-4'>Cart</h2>
                <div className="absolute right-3 top-3 cursor-pointer" onClick={() => setCartOpen(false)}>
                    <RxCross2 className='w-6 h-6' />
                </div>
                <div className="h-full overflow-y-auto">
                    {
                        (cartItems.length > 0) ? (
                            cartItems.map((item) => (
                                <div key={item._id} className="border border-black flex items-center justify-between gap-3 my-3 pr-2">
                                    <img src={item.image} className='w-14' alt="" />
                                    <div className="">
                                        <h2>{item.name}</h2>
                                        <p>{(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <div className="flex">
                                        <button className='border border-gray-400 h-8 w-7 flex justify-center items-center' onClick={() => dispatch(decrementQuantity(item._id))}>-</button>
                                        <div className='border border-gray-400 h-8 w-7 flex justify-center items-center'>{item.quantity}</div>
                                        <button className='border border-gray-400 h-8 w-7 flex justify-center items-center' onClick={() => dispatch(incrementQuantity(item._id))}>+</button>
                                    </div>
                                    <div className="cursor-pointer" onClick={() => dispatch(deleteItemFromCart(item._id))}>
                                        <MdDelete className='w-5 h-5' />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Add items</p>
                        )
                    }
                </div>
                <h3 className='w-full py-2 text-center font-bold text-lg'>Total: {totalAmount}</h3>
                <button className=' w-full bg-green-400 py-2' onClick={createOrder}>Order now</button>
            </div>
        </div>
    )
}

export default Cart