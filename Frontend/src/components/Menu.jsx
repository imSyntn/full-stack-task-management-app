import React, { useEffect, useState } from 'react'
import FoodCard from './FoodCard'
import Pagination from './Pagination'

const items = [
    {
        "foodName": "Pizza",
        "image": "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg"
    },
    {
        "foodName": "Burger",
        "image": "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg"
    },
    {
        "foodName": "Pasta",
        "image": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
    },
    {
        "foodName": "Sushi",
        "image": "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"
    },
    {
        "foodName": "Tacos",
        "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
    },
    {
        "foodName": "Salad",
        "image": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
        "foodName": "Steak",
        "image": "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg"
    },
    {
        "foodName": "Sandwich",
        "image": "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg"
    },
    {
        "foodName": "Curry",
        "image": "https://images.pexels.com/photos/128388/pexels-photo-128388.jpeg"
    },
    {
        "foodName": "Soup",
        "image": "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg"
    },
    {
        "foodName": "Fries",
        "image": "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg"
    },
    {
        "foodName": "Dumplings",
        "image": "https://images.pexels.com/photos/1460871/pexels-photo-1460871.jpeg"
    },
    {
        "foodName": "Pizza Margherita",
        "image": "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg"
    },
    {
        "foodName": "Hot Dog",
        "image": "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg"
    },
    {
        "foodName": "Biryani",
        "image": "https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg"
    },
    {
        "foodName": "Ice Cream",
        "image": "https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg"
    },
    {
        "foodName": "Chocolate Cake",
        "image": "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg"
    },
    {
        "foodName": "Pancakes",
        "image": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
    },
    {
        "foodName": "Waffles",
        "image": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
    },
    {
        "foodName": "Falafel",
        "image": "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
    },
    {
        "foodName": "Kebab",
        "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
    },
    {
        "foodName": "Ramen",
        "image": "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg"
    },
    {
        "foodName": "Lasagna",
        "image": "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg"
    },
    {
        "foodName": "Spring Rolls",
        "image": "https://images.pexels.com/photos/1460871/pexels-photo-1460871.jpeg"
    },
    {
        "foodName": "Donuts",
        "image": "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg"
    },
    {
        "foodName": "Cheesecake",
        "image": "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg"
    },
    {
        "foodName": "Smoothie",
        "image": "https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg"
    }
]


const Menu = () => {

    const [allItems, setAllItems] = useState([...items])
    const [showItems, setShowItems] = useState([])
    const itemsPerPage = 10;

    useEffect(() => {

    }, [])

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
                        showItems.map(item => <FoodCard key={item.foodName} name={item.foodName} url={item.image} />)
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