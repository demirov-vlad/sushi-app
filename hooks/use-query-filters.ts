import { useEffect } from 'react'
import qs from 'qs'
import { Filters } from '@/hooks/use-filters'
import { useRouter } from 'next/navigation'

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter()
  useEffect(() => {
    const params = {
      ...filters.prices,
      sushiTypes: Array.from(filters.sushiTypes),
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients),
    }

    const query = qs.stringify(params, {
      arrayFormat: 'comma',
    })

    router.push(`?${query}`, {
      scroll: false,
    })
  }, [filters, router])
}
