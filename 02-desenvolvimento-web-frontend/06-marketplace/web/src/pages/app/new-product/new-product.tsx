import { NewProductForm } from "./new-product-form";

export function NewProduct() {
  return (
    <div className="flex flex-col gap-10 mt-16">
      <div className="flex flex-col gap-2">
        <h1 className="font-sans text-title-lg text-grayscale-500">Novo produto</h1>
        <p className="font-poppins text-body-sm text-grayscale-300">Cadastre um produto para venda no marketplace</p>
      </div>

      <NewProductForm />
    </div>
  )
}