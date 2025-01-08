import { useQuery } from "@tanstack/react-query";
import { FilterProductsForm } from "./filter-products-form";
import { getSellerProducts } from "../../../api/get-seller-products";
import { ProductCard } from "./product-card";

export function Products() {
  const { data } = useQuery({
    queryKey: ['products', 'me'],
    queryFn: getSellerProducts
  })

  return (
    <div className="flex flex-col gap-10 mt-16">
      <div className="flex flex-col gap-2">
        <h1 className="font-sans text-title-lg text-grayscale-500">Seus produtos</h1>
        <p className="font-poppins text-body-sm text-grayscale-300">Acesse gerencie a sua lista de produtos à venda</p>
      </div>

      <div className="flex gap-6">
        <FilterProductsForm />

        <div className="grid w-full grid-cols-3 gap-4">
          {data?.products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}