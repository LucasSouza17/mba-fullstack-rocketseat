import { useSearchParams } from "react-router-dom";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { Select } from "../../../components/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

const PRODUCT_STATUS = [
  {
    value: 'available',
    label: 'Anunciado'
  },
  {
    value: 'sold',
    label: 'Vendido'
  },
  {
    value: 'cancelled',
    label: 'Cancelado'
  }
]

const filterProductsForm = z.object({
  search: z.string().optional(),
  status: z.enum(['available', 'sold', 'cancelled']).nullable()
})

type FilterProductsForm = z.infer<typeof filterProductsForm>


export function FilterProductsForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FilterProductsForm>({
    defaultValues: {
      search: searchParams.get('search') ?? '',
      status: searchParams.get('status') as 'available' | 'sold' | 'cancelled' | null ?? null
    },
    resolver: zodResolver(filterProductsForm)
  })

  function handleSearch(data: FilterProductsForm) {
    setSearchParams(params => {
      params.delete('search')
      params.delete('status')

      if (data.search) {
        params.set('search', data.search)
      }

      if (data.status) {
        params.set('status', data.status)
      }

      return params
    })
  }

  return (
    <form onSubmit={handleSubmit(handleSearch)} className="bg-shape-white rounded-[20px] p-6 max-w-[327px] h-min w-full">
      <p className="text-title-sm font-sans text-grayscale-300">Filtrar</p>

      <div className="flex flex-col mt-6 gap-5">
        <Input id="search" placeholder="Pesquisar" icon="Search" error={errors.search?.message} {...register('search')} />
        <Controller
          name="status"
          control={control}
          render={
            ({ field }) => (
              <Select options={PRODUCT_STATUS} icon="Filter" value={field.value} onChange={field.onChange} error={errors.status?.message} />
            )
          }
        />
        <Button type="submit" size="lg" className="mt-4 justify-center" disabled={isSubmitting}>Aplicar filtro</Button>
      </div>
    </form>
  )
}