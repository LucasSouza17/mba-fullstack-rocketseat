import { useNavigate } from "react-router-dom";
import { SellerProduct } from "../../../api/get-seller-products";
import { formatCentsInReal } from "../../../utils/format-cents-in-real";
import { ProductTag } from "../../../components/product-tag";
import { transformProductStatusInPortuguese } from "../../../utils/transform-product-status-portuguese";

export function ProductCard({ ...product }: SellerProduct) {
  const navigate = useNavigate();

  function handleNavigateToProductDetails() {
    navigate(`/products/${product.id}`)
  }

  return (
    <div onClick={handleNavigateToProductDetails} className="flex flex-col bg-shape-white rounded-2xl p-1 gap-1 border-2 border-transparent transition-colors hover:border-blue-base hover:cursor-pointer">
      <div className="relative">
        <img src={product.attachments[0].url} alt="" className="h-36 object-cover w-full rounded-2xl" />
        <div className="flex items-center gap-1 absolute top-2 right-2">
          <ProductTag type={product.status}>{transformProductStatusInPortuguese(product.status)}</ProductTag>
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