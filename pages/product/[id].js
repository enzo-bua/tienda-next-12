import React from 'react'
import { useRouter } from 'next/router'
export default function Product() {
  const { query: {id} } = useRouter()
  return (
    <div>Product {id}</div>
  )
}
