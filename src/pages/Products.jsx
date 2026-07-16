import { useEffect } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard"
import Header from "../components/Header"
import { useProductsContext } from "../contexts/ProductsContext"

const Products = () => {
  const {products, setProducts, loading, setLoading, error, setError} = useProductsContext()

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      setError("")
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/products`)
        setProducts(response.data.products)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setError("failed to Load Products! Please try again.")
      }
    }
    
    fetchProducts()
  }, [])

  return (
    <>
      <Header />
      <main className="p-10 pt-5">
        {
          error ?
          <h3 className="text-xl">{error}</h3>
          :
          loading ?
          <h3 className="text-xl">Loading Products! wait...</h3>
          :
          products.length >= 1 ?
          <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            {
              products.map(product => <ProductCard key={product._id} {...product} />)
            }
          </section>
          :
          <h3 className="text-xl">Store is Empty.</h3>
        }
      </main>
    </>
  )
}

export default Products