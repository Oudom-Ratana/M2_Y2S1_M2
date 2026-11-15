"use client"
import { cn } from "cn";

import { Price, PriceValue } from "@/components/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface ProductPrice {
  regular: number;
  sale?: number;
  currency: string;
}

export interface ProductResponse {
  num?: number;
  id?: number,
  images: string[],
  title: string,
  description: string,
  price: number
}

export interface ProductResponseDetail {
  id?: number,
  images: string[],
  title: string,
  description: string,
  price: number
  category: string,
  rating: number
}

// const PRODUCT_CARD: Product = {
//   name: "Vexon CoreStep '08 LX",
//   image: {
//     src: "https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/joshua-diaz-ETNoDLl8yFE-unsplash-1.jpg",
//     alt: "",
//   },
//   link: "#",
//   description:
//     "Everyday comfort meets bold tri-color style in this performance-driven design.",
//   price: {
//     regular: 499.0,
//     sale: 399.0,
//     currency: "USD",
//   },
//   badge: {
//     text: "Selling fast!",
//     backgroundColor: "oklch(50.5% 0.213 27.518)",
//   },
// };

// interface ProductCard1Props {
//   className?: string;
// }

const ProductCardComponent = ({ images,title,description,price }: ProductResponse) => {
    const placeImage = images[0]? images[0] : 'https://images.seeklogo.com/logo-png/5/1/falcon-logo-png_seeklogo-51728.png'
  return (
    <div className={cn(
        "flex flex-col h-full w-full transition-opacity hover:opacity-80"
      )}>
      <Card className="flex flex-col h-full overflow-hidden p-0">
        <CardHeader className="relative block p-0 shrink-0">
          <AspectRatio ratio={1.268115942} className="overflow-hidden">
            <Image
              src={placeImage}
              alt={title || ''}
              width={200}
              height={200}
              className="block size-full object-cover object-center"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4 p-6">
          <CardTitle className="text-xl font-semibold line-clamp-2">
            {title}
          </CardTitle>
          <CardDescription className="font-medium text-muted-foreground line-clamp-3">
            {description}
          </CardDescription>
          <div className="mt-auto pt-2">
            <Price onSale={price != null} className="text-lg font-semibold">
              <PriceValue
                price={price}
                currency="USD"
                variant="regular"
              />
              <PriceValue price={price} currency={"USD"} variant="sale" />
            </Price>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { ProductCardComponent };
