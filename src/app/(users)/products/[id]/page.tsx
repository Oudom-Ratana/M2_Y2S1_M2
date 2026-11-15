import ProductDetailComponent from "@/components/products/ProductDetailComponent";
import RecommendationProCategory from "@/components/products/RecommendationProCategory";

const getSingleProduct = (proId: number | string) => 
  fetch(`${process.env.DUMMY_BASE_URL}/products/${proId}`)
  .then(data => data.json())
  .then(product => product)
  .catch(error => error);

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: number | string }>;
}) {
  const { id } = await params;

  const productPromise = getSingleProduct(id);
  const product = await productPromise;

  return (
    <section>
      <ProductDetailComponent product={productPromise} />
      <RecommendationProCategory
        category={product?.category}
        currentId={product?.id}
      />
    </section>
  );
}

