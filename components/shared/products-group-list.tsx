'use client'
import React, { useEffect } from 'react'
import { Title } from '@/components/shared/title'
import { cn } from '@/lib/utils'
import { useIntersection } from 'react-use'
import { ProductCard } from '@/components/shared/product-card'
import { useCategoryStore } from '@/store/category'

interface Props {
  title: string
  items: any[]
  listClassName?: string
  className?: string
  categoryId: number
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  listClassName,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [intersection?.isIntersecting, categoryId, title, setActiveCategoryId])

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map(item => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.variants[0].price}
          />
        ))}
      </div>
    </div>
  )
}
