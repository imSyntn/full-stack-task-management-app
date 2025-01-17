import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-center'>
            <img src='https://res.cloudinary.com/dqn1hcl8c/image/upload/v1737086759/Menu_sa1qrk.jpg' className='w-full h-80 object-cover' alt="" />
            <button className='mt-7 border-2 border-gray-300 px-3 rounded-lg' onClick={()=> navigate('/menu')}>Menu</button>
        </div>
    )
}

export default Home