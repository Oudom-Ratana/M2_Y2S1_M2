'use client'
import { useEffect, useState } from 'react'
import { ProductCardComponent} from './ProductCardComponent'
import Link from 'next/link';



export default function ProductCardListComponent() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_DUMMY_BASE_URL}/products`);
            const data = await response.json()
            setProducts(data?.products)
        }
        fetchData()
    },[])
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-5 p-4'>
  
      {
        products?.map(({images, title, description, price, id})=>(
            <Link href={`/products/${id}`} key={id} className="flex h-full">
            <ProductCardComponent key={id}  images={images} title={title} description={description} price={price}/>
            </Link>
        ))
      }
      
    </div>
  )
}
