import { useEffect, useState } from "react"
export const gerServerSideProps = async (params) => {
  const response = await fetch('/api/avo')
  const data = await response.json()
  console.log(data)
  
  // return {
  //   props: {
  //     productList: allEntries,
  //   }
  // }
}

export default  function Home({ productList }: { productList: TProduct[] }) {

  // return (
  
  //     productList.map((product) => (
  //       <h1>{product.id}</h1>
  //     ))
  
  // )
}

