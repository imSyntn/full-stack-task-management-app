import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [wantLogin, setWantLogin] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/menu')
    }

    return (
        <div className='min-h-[calc(100vh-48px)] flex items-center justify-center'>
            <Helmet>
                <title>{ wantLogin ? "Login" : 'Register'}</title>
            </Helmet>
            <form className='w-56 h-60 border border-gray-400 rounded-lg p-5 flex flex-col justify-between' onSubmit={handleSubmit}>
                <h2>{wantLogin ? 'Login' : 'Register'}</h2>
                <div className="inp">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="" className='border border-gray-300' />
                </div>
                <div className="inp">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="" className='border border-gray-300' />
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