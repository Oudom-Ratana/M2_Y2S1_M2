"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductCardComponent, ProductResponse } from "./ProductCardComponent";

interface RecommendationProps {
  category?: string | string[] | undefined ;
  currentId?: number | string;
}

export default function RecommendationProCategory({
  category,
  currentId,
}: RecommendationProps) {
  const [products, setProducts] = useState<ProductResponse[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
 
    // setIsLoading(true);
    async function fetchCategoryProducts() {
    
        const res = await fetch(`/api/products/category/${category}`);
        const data: ProductResponse[] = await res.json();
        // setIsLoading(false)
        setProducts(data);
       
    }

    fetchCategoryProducts();


  }, []);

  if (!category) return null;

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-6 flex flex-col gap-1 border-b pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Recommended in{" "}
          <span className="capitalize text-primary">
            {category}
          </span>
        </h2>
        <p className="text-sm text-muted-foreground">
          Customers also liked these items in the same category
        </p>
      </div>

      {
         products.length === 0 ? (
        <p className="text-muted-foreground text-sm py-4">No other products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(({ id, images, title, description, price }) => (
            <Link href={`/products/${id}`} key={id} className="flex h-full">
              <ProductCardComponent
                id={id}
                images={images}
                title={title}
                description={description}
                price={price}
              />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
