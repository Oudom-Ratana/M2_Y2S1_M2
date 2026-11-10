import ProductDetailComponent from "@/components/products/ProductDetailComponent";
import LiquidWaveSpinner from "@/components/shadcn-space/spinner/button-10";
import LoadingComponent from "@/components/spinner-button-1";
import { Suspense } from "react";

export default async function ProductDetailPage({params} :{params: Promise<{productId:number}>}) {

  const {productId}  = await params
    const getSingleProduct = ()=>(
        fetch(`${process.env.DUMMY_BASE_URL}/products/${productId}`)
        .then((res)=> res.json()
    

    )
        .then((data)=> data
    
    )
    )

    const product = getSingleProduct();


    return (
    <div>
      {/* My product: {productId}
       */}
       <Suspense fallback={<LiquidWaveSpinner/>}>
               <ProductDetailComponent product={product}/>
             </Suspense>
    </div>
  )
}

// export default async function ProductDetailPage({params,}:{params: Promise<{ productId: number }>}) {
//   const { productId } = await params
//   return <div>My Post: {productId}</div>
// }