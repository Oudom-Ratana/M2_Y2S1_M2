import ProductDetailComponent from "@/components/products/ProductDetailComponent";

const getSingleProduct = (proId: number) => 
  fetch(`${process.env.DUMMY_BASE_URL}/products/${proId}`)
  .then(data => data.json())
  .then(product => product)
  .catch(error => error);

export default async function ProductDetailPage({
  params,
  searchParams
}: {
  params: Promise<{ id: number  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { id } = await params;

  const {category =''} = await searchParams;
  const singleProduct = getSingleProduct(id);

  return (
    <section>
      <h1>Category : {category}</h1>
      <ProductDetailComponent product={singleProduct} />
      
    </section>
  );
}
