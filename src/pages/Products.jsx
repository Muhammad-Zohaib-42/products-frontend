import { useEffect } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard"
import Header from "../components/Header"
import { useProductsContext } from "../contexts/ProductsContext"

const Products = () => {
  const {products, setProducts} = useProductsContext()

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL)
        setProducts(response.data.products)
      } catch (error) {
        console.log(error)
      }
    }
    
    fetchProducts()
  }, [])

  return (
    <>
      <Header />
      <main className="p-10">
        {
          products.length >= 1 ?
          <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            {
              products.map(product => <ProductCard key={product._id} {...product} />)
            }
          </section>
          :
          <h3>Loading Products...</h3>
        }
      </main>
    </>
  )
}

export default Products