import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/button";
import Icon from "../../../components/icon";
import { UpdateProductForm } from "./update-product-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { updateProductStatus } from "../../../api/update-product-status";
import { toast } from "sonner";
import { queryClient } from "../../../lib/react-query";
import { getProductById } from "../../../api/get-product-by-id";

export function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate()

  const { data } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById({ id: id ?? '' }),
  })

  const { mutateAsync: updateProductStatusFn } = useMutation({
    mutationFn: updateProductStatus
  })

  async function handleSellProduct() {
    try {
      if (!id) return

      await updateProductStatusFn({ id, status: 'sold' })

      await queryClient.invalidateQueries({ queryKey: ['product', id] })

      toast.success("Produto marcado como vendido com sucesso.")
    } catch {
      toast.error("Houve um erro ao marcar o produto como vendido.")
    }
  }

  async function handleDisableProduct() {
    try {
      if (!id) return

      await updateProductStatusFn({ id, status: 'cancelled' })

      await queryClient.invalidateQueries({ queryKey: ['product', id] })

      toast.success("Produto desativado com sucesso.")
    } catch {
      toast.error("Houve um erro ao desativar o produto.")
    }
  }

  async function handleEnableProduct() {
    try {
      if (!id) return

      await updateProductStatusFn({ id, status: 'available' })

      await queryClient.invalidateQueries({ queryKey: ['product', id] })

      toast.success("Produto reativado com sucesso.")
    } catch {
      toast.error("Houve um erro ao reativar o produto.")
    }
  }

  return (
    <div className="flex flex-col gap-10 mt-16">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 items-start">
          <Button variant="text" size="sm" onClick={() => navigate(-1)}>
            <Icon name="ArrowLeft" size={20} />
            Voltar
          </Button>
          <h1 className="font-sans text-title-lg text-grayscale-500">Editar produto</h1>
          <p className="font-poppins text-body-sm text-grayscale-300">Gerencie as informações do produto cadastrado</p>
        </div>

        <div className="flex items-end gap-4">
          {data?.product.status !== 'sold' && (
            <Button variant="text" size="sm" onClick={handleSellProduct}>
              <Icon name="Check" size={20} />
              Marcar como vendido
            </Button>
          )}
          <Button variant="text" size="sm" onClick={data?.product.status === 'cancelled' ? handleEnableProduct : handleDisableProduct}>
            <Icon name="Ban" size={20} />
            {data?.product.status === 'cancelled' ? 'Reativar anúncio' : 'Desativar anúncio'}
          </Button>
        </div>
      </div>

      <UpdateProductForm />
    </div>
  )
}