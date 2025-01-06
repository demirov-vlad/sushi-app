'use client'

import React from 'react'
import { Title, RangeSlider } from '@/components/shared'
import { Input } from '@/components/ui'
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group'
import { useFilters, useIngredients, useQueryFilters } from '@/hooks'

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients()
  const filters = useFilters()

  useQueryFilters(filters)

  const items = ingredients.map(item => ({
    text: item.name,
    value: String(item.id),
  }))

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0])
    filters.setPrices('priceTo', prices[1])
  }

  return (
    <div className={className}>
      <Title text='Filters' size='sm' className='mb-5 font-extrabold' />
      <CheckboxFiltersGroup
        name='sushiTypes'
        className='mb-5'
        title='Type of sushi'
        onClickCheckbox={filters.setSushiTypes}
        selectedValues={filters.sushiTypes}
        items={[
          { text: 'Classic', value: '1' },
          { text: 'Fusion', value: '2' },
        ]}
      />
      <CheckboxFiltersGroup
        title='Sizes'
        name='sizes'
        className='mb-5'
        onClickCheckbox={filters.setSizes}
        selectedValues={filters.sizes}
        items={[
          { text: '6pcs', value: '6' },
          { text: '8pcs', value: '8' },
        ]}
      />
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-extrabold mb-3'>Price from...to:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={500}
            value={String(filters.prices.priceFrom || '0')}
            onChange={e =>
              filters.setPrices('priceFrom', Number(e.target.value))
            }
          />
          <Input
            type='number'
            placeholder='500'
            min={50}
            max={500}
            value={String(filters.prices.priceTo || '500')}
            onChange={e => filters.setPrices('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={500}
          step={10}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 500]}
          onValueChange={updatePrices}
        />
      </div>
      <CheckboxFiltersGroup
        title='Ingridients'
        name='ingredients'
        items={items}
        className='mt-5'
        limit={6}
        defaultItems={items.slice(0, 6)}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selectedValues={filters.selectedIngredients}
      />
    </div>
  )
}
