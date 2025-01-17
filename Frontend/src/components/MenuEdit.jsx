import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const MenuEdit = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const user = useSelector(state => state.user.isLoggedIn)

    const [formData, setFormData] = useState({
        image: '',
        name: '',
        catagory: '',
        price: '',
        availability: ''
    })
    const [loading, setLoading] = useState(false)

    const postMenuItem = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.post(`http://localhost:5000/menu`, { ...formData }, { withCredentials: true }).then(e => {
            if (e.status == 200) {
                console.log(e.data)
                toast("Menu post Successful.")
                navigate('/menu')
            } else {
                console.log('error', e)
                toast(e.response.data.msg)
            }
        }).catch((e) => {
            console.log(e.response.data.msg)
            toast("Error occured.")
        })
            .finally(e => setLoading(false))
    }

    const updateMenuItem = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.put(`http://localhost:5000/menu/${id}`, { ...formData }, { withCredentials: true }).then(e => {
            if (e.status == 200) {
                console.log(e.data)
                toast("Update Successful.")
                navigate('/menu')
            } else {
                console.log('error', e)
                toast(e.response.data.msg)
            }
        }).catch((e) => {
            console.log(e.response.data.msg)
            toast('Error occured.')

        })
            .finally(e => setLoading(false))
    }

    const deleteMenuItem = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.delete(`http://localhost:5000/menu/${id}`, { ...formData }, { withCredentials: true }).then(e => {
            if (e.status == 200) {
                console.log(e.data)
                toast('Delete Successful.')
                navigate('/menu')
            } else {
                console.log('error', e)
                toast(e.response.data.msg)
            }
        }).catch((e) => {
            console.log(e.response.data.msg)
            toast("Error ")
        })
            .finally(e => setLoading(false))
    }

    useEffect(() => {
        if (id) {
            setLoading(true)
            axios.get(`http://localhost:5000/menu/${id}`).then(e => {
                if (e.status == 200) {
                    console.log(e.data)
                    setFormData({
                        catagory: e.data.category,
                        image: e.data.image,
                        name: e.data.name,
                        availability: e.data.availability,
                        price: e.data.price,
                    })
                } else {
                    console.log('error', e)
                    toast(e.response.data.msg)
                }
            }).catch((e) => {
                console.log(e.response.data.msg)

                toast("Error.")
            })
                .finally(e => setLoading(false))
        }
    }, [])
    return (
        <div className='min-h-[calc(100vh-48px)] flex justify-evenly items-center'>
            {
                user ? (
                    <form action="" className='flex flex-col border border-gray-300 rounded-lg p-4'>
                        <h1>Update</h1>
                        <label htmlFor="">Name</label>
                        <input type="text" className='border border-gray-300 roundex-md my-1' onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} value={formData.name} />
                        <label htmlFor="">Image</label>
                        <input type="text" className='border border-gray-300 roundex-md my-1' onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))} value={formData.image} />
                        <label htmlFor="">Price</label>
                        <input type="text" className='border border-gray-300 roundex-md my-1' onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))} value={formData.price} />
                        <label htmlFor="">Catagory</label>
                        <input type="text" className='border border-gray-300 roundex-md my-1' onChange={(e) => setFormData(prev => ({ ...prev, catagory: e.target.value }))} value={formData.catagory} />
                        <label htmlFor="">Availability</label>
                        <input type="text" className='border border-gray-300 roundex-md my-1' onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.value }))} value={formData.availability} />
                        <div className="flex justify-between items-center">
                            <button className='px-2 border border-gray-300 mt-2' onClick={deleteMenuItem}>Delete</button>
                            <button className='px-2 border border-gray-300 mt-2' onClick={id ? updateMenuItem : postMenuItem}>Submit</button>
                        </div>
                    </form>
                ) : (
                    <p>Login is required.</p>
                )
            }
        </div>
    )
}

export default MenuEdit