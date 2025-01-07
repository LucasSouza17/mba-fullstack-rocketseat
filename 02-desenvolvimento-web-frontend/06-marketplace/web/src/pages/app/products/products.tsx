import { FilterProductsForm } from "./filter-products-form";

export function Products() {
  return (
    <div className="flex flex-col gap-10 mt-16">
      <div className="flex flex-col gap-2">
        <h1 className="font-sans text-title-lg text-grayscale-500">Seus produtos</h1>
        <p className="font-poppins text-body-sm text-grayscale-300">Acesse gerencie a sua lista de produtos à venda</p>
      </div>

      <div className="flex gap-6">
        <FilterProductsForm />

        <div className="grid grid-cols-2 gap-4">

        </div>
      </div>
    </div>
  )
}