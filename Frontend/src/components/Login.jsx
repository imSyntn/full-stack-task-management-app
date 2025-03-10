import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../store/slice/userSlice'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    console.log(import.meta.env.VITE_BACKEND_URI)

    const [wantLogin, setWantLogin] = useState(true)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [formError, setFormError] = useState({
        username: '',
        password: ''
    })

    const user = useSelector((state) => state.user.isLoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(user)
    }, [user])


    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.username == '') {
            return setFormError(prev => ({ ...prev, username: 'Username is required.' }))
        }
        if (formData.password == '') {
            return setFormError(prev => ({ ...prev, password: 'Password is required.' }))
        }
        const url = wantLogin ? `${import.meta.env.VITE_BACKEND_URI}/login` : `${import.meta.env.VITE_BACKEND_URI}/register`

        axios.post(url, formData, { withCredentials: true }).then(e => {
            console.log(e.data)
            if (e.status >= 200 && e.status <= 299) {
                if (e.data.loggedIn) {
                    dispatch(login(formData))
                    toast('Successful.')
                    navigate('/menu')
                }
            } else {
                console.log(e.response.data.msg)
                toast(e.response.data.msg)
            }
        }).catch(e => {
            console.log(e.response.data.msg)
            toast('Error occoured.')
        })

    }

    return (
        <div className='min-h-[calc(100vh-48px)] flex items-center justify-center'>
            <Helmet>
                <title>{wantLogin ? "Login" : 'Register'}</title>
            </Helmet>
            <form className='w-56 h-64 border border-gray-400 rounded-lg p-5 flex flex-col justify-between' onSubmit={handleSubmit}>
                <h2>{wantLogin ? 'Login' : 'Register'}</h2>
                <div className="inp">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" className='border border-gray-300' value={formData.username} onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                    <p className='text-red-500'>{formError.username}</p>
                </div>
                <div className="inp">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className='border border-gray-300' value={formData.password} onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))} />
                    <p className='text-red-500'>{formError.password}</p>
                </div>
                <button className='border border-gray-300 px-3 w-full'>
                    Submit
                </button>
                <p className='text-blue-300 cursor-pointer select-none' onClick={() => setWantLogin(prev => !prev)}>{
                    wantLogin ? "Create an account" : 'Have an account?'}</p>
            </form>
        </div>
    )
}

export default Login