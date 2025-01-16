import React, { useEffect, useState } from 'react'
import FoodCard from './FoodCard'
import Pagination from './Pagination'
import axios from 'axios'


const Menu = () => {

    const [allItems, setAllItems] = useState([])
    const [showItems, setShowItems] = useState([])
    const itemsPerPage = 10;

    useEffect(() => {
        axios.get('http://localhost:5000/menu').then(e => {
            setAllItems(e.data.data)
            console.log(e.data)
        }).catch(e => console.log(e))
    }, [])

    useEffect(() => {
        console.log('show items', showItems)
    }, [showItems])

    return (
        <div className=''>
            <div className="border border-black h-80 w-full">
                sjd
            </div>
            <div className="border border-black">
                <div className="flex w-full items-center justify-center border border-red-500 py-3 gap-3 relative">
                    <input type="text" name="searchBar" placeholder='Search menu...' className='border border-gray-400 px-6' id="" />
                    <select name="sort" id="" className='border border-gray-400 px-3'>
                        <option defaultValue={true} value="">Sort</option>
                        <option value="a">a</option>
                        <option value="b">b</option>
                    </select>
                </div>
                <div className="border border-green-500 min-h-80 w-full grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-3 justify-items-stretch">
                    {
                        (showItems.length > 0) && showItems.map(item => <FoodCard key={item._id} item={item} />)
                    }
                </div>
                <div className="w-full flex justify-center">
                    <Pagination itemsPerPage={itemsPerPage} allItems={allItems} showItems={showItems} setShowItems={setShowItems} />
                </div>
            </div>
        </div>
    )
}

export default Menu