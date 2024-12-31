export default function ProductPage({
  params: { id },
}: {
  params: { id: string }
}) {
  return <h3>Product {id}</h3>
}
