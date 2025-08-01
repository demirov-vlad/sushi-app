import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/components/shared'
import { prisma } from '@/prisma/prisma-client'
import { Suspense } from 'react'

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          variants: true,
        },
      },
    },
  })

  return (
    <>
      <Container className='mt-8'>
        <Title text='All products' size='lg' className='font-extrabold' />
      </Container>
      <TopBar
        categories={categories.filter(category => category.products.length > 0)}
      />
      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          {/*Filters*/}
          <div className='w-[250px]'>
            <Suspense fallback={<div>Loading filters...</div>}>
              <Filters />
            </Suspense>
          </div>

          {/*Products List*/}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              {categories.map(
                category =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      categoryId={category.id}
                      title={category.name}
                      items={category.products}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
