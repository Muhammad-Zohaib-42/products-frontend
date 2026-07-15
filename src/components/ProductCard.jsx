import axios from "axios"
import toast from "react-hot-toast"
import {Link, useNavigate} from "react-router-dom"
import { useProductsContext } from "../contexts/ProductsContext"

const ProductCard = ({_id, title, description, price}) => {
  const {setProducts} = useProductsContext()

  const navigate = useNavigate()

  async function deleteProduct() {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/v1/products/delete/${_id}`)
      setProducts(prev => prev.filter(product => product._id !== _id))
      navigate("/")
      toast.success("Product deleted successfully")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="px-6 py-4 rounded-lg shadow border border-slate-400">
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="leading-6 text-lg">{description}</p>
        <p className="text-md text-slate-700">$<span>{price}</span></p>
        <div className="flex items-center justify-end gap-2 mt-3">
            <Link to={`/update/${_id}`} className="btn bg-blue-600 text-white">Update</Link>
            <button onClick={deleteProduct} className="btn bg-red-600 text-white">Delete</button>
        </div>
    </div>
  )
}

export default ProductCard