import React from 'react'

export default function Productcard({products}) {
    console.log(products);
    
  return (
    <>
   <div className="shadow-md p-4 bg-white rounded-lg h-full flex flex-col">
        <img
  src={products.image}
  alt={products.title}
  className="w-full h-48 object-cover rounded-md"/>
        <span>{products.rating}</span>
        <div>{products.title}</div>
        <span>{products.price}</span>
        <div className='flex justify-between'>
         <p className="text-sm h-16 overflow-hidden">{products.description}</p>
         <button className='bg-green-500 px-4 py-2 rounded-2xl'>Add</button>
        </div>
   </div>
   
    </>
  )
}