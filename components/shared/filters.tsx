'use client'

import React from 'react'
import { Title, FilterCheckbox, RangeSlider } from '@/components/shared'
import { Input } from '@/components/ui'
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients()
  const items = ingredients.map(item => ({
    text: item.name,
    value: String(item.id),
  }))

  return (
    <div className={className}>
      <Title text='Filters' size='sm' className='mb-5 font-extrabold' />
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Can builb' value='21' />
        <FilterCheckbox text='New items' value='22' />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-extrabold mb-3'>Price from...to:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={500}
            defaultValue={0}
          />
          <Input type='number' placeholder='500' min={50} max={500} />
        </div>
        <RangeSlider min={0} max={500} step={10} value={[0, 500]} />
      </div>
      <CheckboxFiltersGroup
        title='Ingridients'
        name='ingredients'
        items={items}
        className='mt-5'
        limit={6}
        defaultItems={items.slice(0, 6)}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  )
}
