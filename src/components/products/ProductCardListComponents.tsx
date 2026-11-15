"use client"

import { useEffect, useState } from "react";
import { ProductCardComponent } from "./ProductCardComponent";
import Link from "next/link";


export default function ProductCardListComponents() {
  // create state 
  const [products, setProducts] = useState([]);

  // create effect for side-effect (api, web socket)
  useEffect(() => {
    // write logic of fetching api 
    async function fetchData() {
      const respones = await fetch(`/api/products`); //call api route 
      const data = await respones.json(); //convert from json to js object
      setProducts(data.products);
    }
    fetchData(); //calling fetchData function
  },[])



  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 gap-8 mx-auto">
      {
        products?.map(({id, images, title, description, price,category}) => (
         <Link href={`/products/${id}?category=${category}`} key={id} className="flex h-full">
           <ProductCardComponent
            images={images}
            title={title}
            description={description}
            price={price} />
         </Link>
        ))
      }
    </section>
  )
}
