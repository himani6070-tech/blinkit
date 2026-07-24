import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Productcard from './Productcard';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function ProductCardSection({heading}) {
   
const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    title: "Nike Air Max",
    price: 129.99,
    rating: 4.8,
    description: "Comfortable running shoes with modern design."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    title: "Smart Watch Pro",
    price: 199.99,
    rating: 4.6,
    description: "Feature-rich smartwatch with fitness tracking."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    title: "Wireless Headphones",
    price: 89.99,
    rating: 4.7,
    description: "Premium sound quality with noise cancellation."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    title: "iPhone 15",
    price: 999.99,
    rating: 4.9,
    description: "Powerful smartphone with advanced camera."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    title: "Gaming Mouse",
    price: 49.99,
    rating: 4.5,
    description: "RGB gaming mouse with ergonomic design."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    title: "MacBook Air",
    price: 1199.99,
    rating: 4.8,
    description: "Lightweight laptop with powerful performance."
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    title: "Apple Watch",
    price: 299.99,
    rating: 4.7,
    description: "Advanced smartwatch with health features."
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    title: "Bluetooth Speaker",
    price: 79.99,
    rating: 4.4,
    description: "Portable speaker with powerful bass."
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    title: "Gaming Laptop",
    price: 1499.99,
    rating: 4.9,
    description: "High-end gaming laptop with RTX graphics."
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7",
    title: "Mechanical Keyboard",
    price: 99.99,
    rating: 4.6,
    description: "RGB mechanical keyboard for gamers."
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    title: "Sunglasses",
    price: 39.99,
    rating: 4.3,
    description: "UV protected stylish sunglasses."
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    title: "Casual T-Shirt",
    price: 24.99,
    rating: 4.2,
    description: "Soft cotton t-shirt for daily wear."
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    title: "Running Shoes",
    price: 89.99,
    rating: 4.5,
    description: "Breathable sports running shoes."
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    title: "Travel Backpack",
    price: 59.99,
    rating: 4.6,
    description: "Spacious backpack for travel."
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    title: "DSLR Camera",
    price: 799.99,
    rating: 4.8,
    description: "Professional DSLR camera."
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944",
    title: "Wireless Earbuds",
    price: 69.99,
    rating: 4.4,
    description: "Compact wireless earbuds."
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
    title: "Desktop Monitor",
    price: 249.99,
    rating: 4.7,
    description: "27-inch Full HD monitor."
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    title: "Fitness Tracker",
    price: 49.99,
    rating: 4.3,
    description: "Track your daily activities."
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    title: "Coffee Maker",
    price: 129.99,
    rating: 4.5,
    description: "Automatic coffee brewing machine."
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
    title: "Office Chair",
    price: 199.99,
    rating: 4.6,
    description: "Comfortable ergonomic office chair."
  },
  {
    id: 21,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    title: "Studio Headphones",
    price: 149.99,
    rating: 4.8,
    description: "Professional studio headphones."
  },
  {
    id: 22,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    title: "Sneakers",
    price: 79.99,
    rating: 4.4,
    description: "Trendy sneakers for casual wear."
  },
  {
    id: 23,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    title: "Sports Shoes",
    price: 99.99,
    rating: 4.7,
    description: "Durable sports shoes."
  },
  {
    id: 24,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    title: "Gaming Headset",
    price: 89.99,
    rating: 4.6,
    description: "Immersive gaming headset."
  },
  {
    id: 25,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    title: "Ultrabook Laptop",
    price: 1099.99,
    rating: 4.8,
    description: "Slim and powerful ultrabook."
  }
];


  return (
<div className="max-w-7xl mx-auto my-10 px-4">
    <h1 className='text-3xl'>{heading}</h1>
       <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        }}
        >
            {  
                products.map((data)=>{
                    return(
                        <>
                        <SwiperSlide key={data.id}>
                            
                            <Productcard products={data} />
                            
                         </SwiperSlide>
                         </>
                        )
                })
                }    
      </Swiper>
    
   
</div>
  )
}
