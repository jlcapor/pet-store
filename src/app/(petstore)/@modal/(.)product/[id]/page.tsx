import { notFound } from "next/navigation"

type ProductDetailsProps = {
    params: {
      id: string
    }
  }

export default function Details({ params: { id: productId } }: ProductDetailsProps) {
  if (!productId) return notFound()
  return (
    <div>
      
    </div>
  )
}
