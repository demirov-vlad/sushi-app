import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/components/shared'

export default function Home() {
  return (
    <>
      <Container className='mt-8'>
        <Title text='All sushi' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          {/*Filters*/}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/*Products List*/}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                categoryId={1}
                title='Sushi'
                items={[
                  {
                    id: 1,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 2,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 3,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 4,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 5,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 6,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 7,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 8,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 9,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                ]}
              />
              <ProductsGroupList
                categoryId={2}
                title='Combo'
                items={[
                  {
                    id: 1,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 2,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 3,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 4,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 5,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 6,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 7,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 8,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 9,
                    name: 'Philadelphia roll',
                    imageUrl:
                      'https://odessa.e-boshi.net/wp-content/uploads/2024/12/filadelfiya-mega-768x512.png.webp',
                    price: 11,
                    items: [{ price: 11 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
