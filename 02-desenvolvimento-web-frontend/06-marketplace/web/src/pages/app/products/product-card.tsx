import { SellerProduct } from "../../../api/get-seller-products";
import { formatCentsInReal } from "../../../utils/format-cents-in-real";
import { ProductTag } from "./product-tag";

export function ProductCard({ ...product }: SellerProduct) {
  function transformTypeInPortuguese() {
    switch (product.status) {
      case "available":
        return "Anunciado"
      case "sold":
        return "Vendido"
      case "cancelled":
        return "Desativado"
    }
  }


  return (
    <div className="flex flex-col bg-shape-white rounded-2xl p-1 gap-1">
      <div className="relative">
        <img src={product.attachments[0].url} alt="" className="h-36 object-cover w-full rounded-2xl" />
        <div className="flex items-center gap-1 absolute top-2 right-2">
          <ProductTag type={product.status}>{transformTypeInPortuguese()}</ProductTag>
          <ProductTag type="default">{product.category.title}</ProductTag>
        </div>
      </div>

      <div className="flex flex-col p-3 gap-2">
        <div className="flex items-center justify-between gap-3">
          <p className="truncate text-subtitle text-grayscale-400 font-semibold font-poppins">{product.title}</p>
          <p className="text-title-sm font-sans font-bold">
            <span className="text-label-md mr-1 font-poppins text-grayscale-500 font-medium">R$</span>
            {formatCentsInReal(product.priceInCents)}
          </p>
        </div>
        <span className="text-grayscale-300 text-body-sm font-poppins line-clamp-2">{product.description}</span>
      </div>
    </div>
  )
}