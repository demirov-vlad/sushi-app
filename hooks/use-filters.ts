import { useSearchParams } from 'next/navigation'
import { useSet } from 'react-use'
import { useState } from 'react'

interface PriceProps {
  priceFrom?: number
  priceTo?: number
}

interface FiltersQuery extends PriceProps {
  sushiTypes: string
  sizes: string
  ingredients: string
}

export interface Filters {
  sizes: Set<string>
  sushiTypes: Set<string>
  selectedIngredients: Set<string>
  prices: PriceProps
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void
  setSushiTypes: (value: string) => void
  setSizes: (value: string) => void
  setSelectedIngredients: (value: string) => void
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof FiltersQuery,
    string
  > //types are shown only for easy chose of keys

  //Ingredients Filter
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get('ingredients')?.split(',') || []),
  )

  //Sizes Filter
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(searchParams.get('sizes')?.split(',') || []),
  )

  //SushiTypes Filter
  const [sushiTypes, { toggle: toggleSushiTypes }] = useSet(
    new Set<string>(searchParams.get('sushiTypes')?.split(',') || []),
  )

  //Prices Filter
  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  })

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return {
    sizes,
    sushiTypes,
    selectedIngredients,
    prices,
    setPrices: updatePrice,
    setSushiTypes: toggleSushiTypes,
    setSizes: toggleSizes,
    setSelectedIngredients: toggleIngredients,
  }
}
