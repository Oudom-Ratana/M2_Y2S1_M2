import InterceptedModal from "@/components/modal/InterceptedModal";
import ProductDetailUseSWRComponent from "@/components/products/detail/ProductDetailUseSWRComponent";

export default async function ModalProduct({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const { id } = await params;

  return (
    <InterceptedModal>
      <ProductDetailUseSWRComponent proId={id} />
    </InterceptedModal>
  );
}
