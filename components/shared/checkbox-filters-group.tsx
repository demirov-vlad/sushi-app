'use client'
import React, { useState } from 'react'
import {
  FilterCheckbox,
  FilterCheckboxProps,
} from '@/components/shared/filter-checkbox'
import { Input, Skeleton } from '@/components/ui'

type Item = FilterCheckboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems: Item[]
  limit?: number
  loading?: boolean
  searchInputPlaceholder?: string
  onClickCheckbox?: (id: string) => void
  defaultValue?: string[]
  selectedIds?: Set<string>
  className?: string
  name?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  loading,
  searchInputPlaceholder = 'Search...',
  className,
  onClickCheckbox,
  selectedIds,
  name,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const onChangeSearchInput = (value: string) => {
    setSearchValue(value)
  }

  if (loading) {
    return (
      <div className={className}>
        <p className='font-bold mb-3'>{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className='h-6 mb-4 rounded-[8px]' />
          ))}
        <Skeleton className='w-28 h-6 mb-4 rounded-[8px]' />
      </div>
    )
  }

  const list = showAll
    ? items.filter(item =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()),
      )
    : defaultItems.slice(0, limit)

  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>
      {showAll && (
        <div className='mb-5'>
          <Input
            onChange={e => onChangeSearchInput(e.target.value)}
            placeholder={searchInputPlaceholder}
            className='bg-gray-50 border-none'
          />
        </div>
      )}
      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {list.map(item => (
          <FilterCheckbox
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            checked={selectedIds?.has(item.value)}
            key={String(item.value)}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            name={name}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button
            onClick={() => setShowAll(!showAll)}
            className='text-primary mt-3'
          >
            {showAll ? 'Hide' : '+ Show all'}
          </button>
        </div>
      )}
    </div>
  )
}
