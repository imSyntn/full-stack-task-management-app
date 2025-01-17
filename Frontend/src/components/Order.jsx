import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import OrderCard from './OrderCard'
import axios from 'axios'

const Order = () => {

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    const user = useSelector(state => state.user.isLoggedIn)

    useEffect(() => {
        if (user) {
            setLoading(true)
            axios
                .get(`${import.meta.env.VITE_BACKEND_URI}/orders`, { withCredentials: true }).then(e => {
                    if (e.status >= 200 && e.status <= 299) {
                        console.log(e.data)
                        setOrders(e.data)
                    } else {
                        console.log(e.response.data.msg)
                    }
                })
                .catch(e => console.log(e.response.data.msg))
                .finally(() => setLoading(false))
        } else {
            setOrders([])
            toast('Login is required.')
        }
    }, [user])

    // useEffect(() => {
    //     console.log(user)
    //     if (!user) {
    //         console.log(user)
    //     }
    // }, [user])

    const validateDate = (today) => {
        const date = new Date().setHours(0, 0, 0, 0)
        return today ? orders.filter(elm => new Date(elm.createdAt).setHours(0, 0, 0, 0) == date) : orders.filter(elm => new Date(elm.createdAt).setHours(0, 0, 0, 0) != date)
    }

    return (
        <div className=''>
            <img src="https://res.cloudinary.com/dqn1hcl8c/image/upload/v1737086758/Orders_tbwntl.jpg" className='h-80 w-full object-cover' alt="orders" />
            {
                !loading ? (
                    (Array.isArray(orders) && orders.length > 0) ? (
                        <>
                            <h2 className='text-3xl font-bold my-3'>Orders</h2>
                            <div className="border border-gray-300 rounded-lg">
                                {
                                    (Array.isArray(validateDate(true)) && validateDate(true).length > 0) ? validateDate(true).map((elm) => (
                                        <React.Fragment key={elm._id}>
                                            {
                                                elm.items.map(item => <OrderCard key={item._id} item={item} />)
                                            }
                                        </React.Fragment>
                                    )) : (
                                        <p className='text-center my-5 text-xl'>No orders today.</p>
                                    )
                                }
                            </div>
                            <h2 className='text-3xl font-bold my-3'>Previous Orders</h2>
                            <div className="border border-gray-300 rounded-lg">
                                {
                                    (Array.isArray(validateDate(false)) && validateDate(false).length > 0) ? validateDate(false).map((elm) => (
                                        <React.Fragment key={elm._id}>
                                            {
                                                elm.items.map(item => <OrderCard key={item._id} item={item} />)
                                            }
                                        </React.Fragment>
                                    )) : (
                                        <p className='text-center my-5 text-xl'>No orders in past.</p>
                                    )
                                }
                            </div>
                        </>
                    ) : (
                        <p className='text-center my-5 text-xl'>No orders</p>
                    )
                ) : (
                    <p className='text-center my-5 text-xl'>Loading...</p>
                )
            }
        </div>
    )
}

export default Order