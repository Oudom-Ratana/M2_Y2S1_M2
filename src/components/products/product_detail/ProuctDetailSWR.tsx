'use client'

import useSWR from 'swr'
import Image from "next/image"
import { Price, PriceValue } from "@/components/products/price"

const fetcher = (url: string) => fetch(url).then(res => res.json())

type ProductIdType = {
  proId: number | string
}

export default function ProductDetailUseSWRComponent({ proId }: ProductIdType) {
  const { data, error, isLoading } = useSWR(`/api/products/${proId}`, fetcher)

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center animate-pulse pt-1">
        <div className="flex items-center justify-center p-6 bg-neutral-100 dark:bg-neutral-800/60 rounded-xl aspect-square">
          <div className="size-36 bg-neutral-200 dark:bg-neutral-700 rounded-lg" />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="h-8 bg-neutral-200 dark:bg-neutral-700 rounded-md w-3/4" />
          <div className="space-y-2 pt-1">
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-11/12" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-4/5" />
          </div>
          <div className="h-7 bg-neutral-200 dark:bg-neutral-700 rounded w-2/5 pt-2" />
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="py-12 text-center text-muted-foreground">
        <p className="text-base font-medium">Failed to load product details.</p>
      </div>
    )
  }

  const PLACEHOLDER = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSHQ2QS9U-YKh9fPiHsVWMcXMFKbZXlPQ_BpGCWYDTbjkaaakSgu-PZIJU&s=10"
  const imageSrc = data.images && data.images.length > 0 && data.images[0] ? data.images[0] : (data.thumbnail || PLACEHOLDER);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center pt-1">
      {/* Product Image */}
      <div className="relative flex items-center justify-center p-4 rounded-xl">
        <Image
          src={imageSrc}
          alt={data.title || "Product image"}
          width={400}
          height={400}
          className="w-full max-h-64 sm:max-h-72 object-contain transition-transform duration-300 hover:scale-105"
          priority
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-center space-y-4 sm:pr-2">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 dark:text-neutral-100 tracking-tight leading-snug">
          {data.title}
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {data.description}
        </p>

        <div className="pt-2">
          <Price onSale={data.price != null} className="text-xl sm:text-2xl font-semibold">
            <PriceValue price={data.price} currency="USD" variant="regular" />
            <PriceValue price={data.price} currency="USD" variant="sale" />
          </Price>
        </div>
      </div>
    </div>
  )
}
