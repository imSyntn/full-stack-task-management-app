import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FoodCard from './FoodCard'
import Pagination from './Pagination'
import axios from 'axios'


const Menu = () => {

    const navigate = useNavigate()

    const [allItems, setAllItems] = useState([])
    const [showItems, setShowItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const itemsPerPage = 10;

    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:5000/menu').then(e => {
                if (e.status >= 200 && e.status <= 299) {
                    // console.log(e)
                    setAllItems(e.data.data)
                } else {
                    console.log(e.response.data.msg)
                }
            })
            .catch(e => console.log(e))
            .finally(e => setLoading(false))
    }, [])

    const filterItems = () => {
        return allItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    // useEffect(() => {
    //     console.log('filter items', filterItems())
    // })

    return (
        <div className=''>
            <img src='https://res.cloudinary.com/dqn1hcl8c/image/upload/v1737086759/Menu_sa1qrk.jpg' alt='menu' className='w-full h-80 object-cover' />
            <div className="">
                <div className="flex w-full items-center justify-center flex-wrap py-3 gap-3 relative">
                    <input type="text" name="searchBar" placeholder='Search menu...' className='border border-gray-400 px-6' id="" onChange={(e)=> setSearch(e.target.value)} value={search} />

                    <select name="sort" id="" className='border border-gray-400 px-3' onClick={()=> alert('Functionality is not available.')}>
                        <option defaultValue={true} value="">Sort</option>
                        <option value="a">a</option>
                        <option value="b">b</option>
                    </select>
                    <button className='border border-gray-300 px-2' onClick={()=> navigate('/menu/post')}>Post menu</button>
                </div>
                <div className="min-h-80 w-full grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-3 justify-items-stretch">
                    {
                        !loading ? (
                            !search ? (
                                (showItems.length > 0) && showItems.map(item => <FoodCard key={item._id} item={item} />)
                            ) : (
                                (Array.isArray(filterItems()) && filterItems().length > 0) ? (
                                    filterItems().map(item => <FoodCard key={item._id} item={item} />)
                                ) : (
                                    <p className='text-center my-5 text-xl'>No items.</p>
                                )
                            )
                        ) : (
                            <p className='text-center my-5 text-xl justify-self-center'>Loading...</p>
                        )
                    }
                </div>
                <div className="w-full flex justify-center">
                    {
                        !search && <Pagination itemsPerPage={itemsPerPage} allItems={allItems} showItems={showItems} setShowItems={setShowItems} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu