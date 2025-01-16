import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard'
import axios from 'axios'

const Order = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/orders', { withCredentials: true }).then(e => {
            console.log(e.data)
            setOrders(e.data)
        }).catch(e => console.log(e))
    }, [])

    // const validateDate = () => {
    //     const date = new Date()
    //     const DDMMYYYY = date.getDay() + date.getMonth() + date.getFullYear()
    // }

    return (
        <div className=''>
            <div className="border border-black h-80 w-full">
                sjd
            </div>
            <h2>Orders</h2>
            <div className="border border-black">
                {
                    (Array.isArray(orders) && orders.length > 0) && orders.map((elm) => (
                        <React.Fragment key={elm._id}>
                            {
                                elm.items.map(item => <OrderCard key={item._id} item={item} />)
                            }
                        </React.Fragment>
                    ))
                }
            </div>
            <h2>Previous Orders</h2>
            <div className="border border-black">
                {/* {
                    (Array.isArray(orders) && orders.length > 0) && orders.items.map((item) => <OrderCard key={item._id} item={item} />)
                } */}
            </div>
        </div>
    )
}

export default Order