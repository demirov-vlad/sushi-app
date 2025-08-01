import { Container, Title } from '@/components/shared'
import { notFound } from 'next/navigation'
import { prisma } from '@/prisma/prisma-client'
import { ProductImage } from '@/components/shared/product-image'
import { GroupVariants } from '@/components/shared/group-variants'

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } })

  if (!product) {
    return notFound()
  }

  return (
    <Container className='flex flex-col my-10'>
      <div className='flex flex-1'>
        <ProductImage imageUrl={product.imageUrl} size={6} />

        <div className='w-[490px] bg-[#f7f6f5] p-7'>
          <Title
            text={product.name}
            size='md'
            className='font-extrabold mb-1'
          />
          <p className='text-gray-400'>
            Lorem ipsum dolor sit amet consectetur
          </p>

          <GroupVariants
            selectedValue='6'
            items={[
              {
                name: '6pcs',
                value: '6',
              },
              {
                name: '8pcs',
                value: '8',
              },
            ]}
          />
        </div>
      </div>
    </Container>
  )
}
