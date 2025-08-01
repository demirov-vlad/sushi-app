'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import { Link } from 'react-scroll'
import { Category } from '@prisma/client'

interface Props {
  items: Category[]
  className?: string
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  const categoryActiveId = useCategoryStore(state => state.activeId)
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {items.map(({ name, id }, index) => (
        <Link
          key={index}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id &&
              'bg-white shadow-sm shadow-gray-200 text-primary',
          )}
          to={name}
          offset={-100}
        >
          <button>{name}</button>
        </Link>
      ))}
    </div>
  )
}
