import { Price, PriceValue } from "@/components/products/price";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ProductResponse } from "../ProductCardComponent";

const ProductCardDetailComponent = ({
  images,
  title,
  description,
  price,
}: ProductResponse) => {
  const PLACEHOLDER =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSHQ2QS9U-YKh9fPiHsVWMcXMFKbZXlPQ_BpGCWYDTbjkaaakSgu-PZIJU&s=10";
  const imageSrc =
    images && images.length > 0 && images[0] ? images[0] : PLACEHOLDER;

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <Card className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 sm:p-10 items-center rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        {/* images */}
        <div className="relative flex items-center justify-center p-4">
          <Image
            src={imageSrc}
            alt={title || "Product image"}
            width={500}
            height={500}
            className="w-full max-h-80 object-contain transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>

        {/* title, description, price */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight leading-snug">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="pt-2">
            <Price onSale={price != null} className="text-xl sm:text-2xl font-semibold">
              <PriceValue price={price} currency="USD" variant="regular" />
              <PriceValue price={price} currency="USD" variant="sale" />
            </Price>
          </div>
        </div>
      </Card>
    </div>
  );
};

export { ProductCardDetailComponent };
