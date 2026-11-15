"use client"
import { Suspense, use } from 'react';
import { ProductCardComponent, ProductResponse} from './ProductCardComponent'
import Link from 'next/link';

export default function ProductCardListUseHook({product}: {product: Promise<ProductResponse[]>}) {
    const products = use(product)
    return (
      
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-5 p-4'>
      {
        products?.map(({id,images, title, description, price})=>(
            <Link href={`/products/${id}`} key={id} className="flex h-full">
            <ProductCardComponent   images={images} title={title} description={description} price={price}/>
            </Link>
        ))
      }
      
    </div>
  )
}
