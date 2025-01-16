import React, { useEffect, useState } from 'react'

const Pagination = ({ itemsPerPage, allItems, showItems, setShowItems }) => {

    const [currentPage, setCurrentPage] = useState(1)

    // useEffect(() => {

    //     console.log(numberOfPages)
    // }, [])

    useEffect(()=> {
        console.log('pag', allItems)
    },[allItems])

    useEffect(() => {
        if (!Array.isArray(allItems)) {
            return
        }

        const defaultShowItems = allItems.slice((itemsPerPage * (currentPage - 1)), itemsPerPage * currentPage)

        setShowItems(defaultShowItems)
    }, [currentPage, allItems])

    const numberOfPages = Math.ceil((allItems.length) / itemsPerPage)

    return (
        <div className='border border-blue-300 flex gap-3 '>
            <button onClick={() => setCurrentPage(prev => (prev > 1) ? prev - 1 : prev)} disabled={(currentPage === 1) ? true : false}>Prev</button>
            {
                Array.isArray(allItems) && new Array(numberOfPages).fill(' ').map((_, index) => (
                    <button key={index} onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                ))
            }
            <button onClick={() => setCurrentPage(prev => (prev < numberOfPages) ? prev + 1 : prev)} disabled={(currentPage === numberOfPages) ? true : false}>Next</button>
        </div>
    )
}

export default Pagination