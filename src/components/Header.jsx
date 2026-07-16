import {Link} from "react-router-dom"
import BulkUpload from "./BulkUpload"
import productImage from "../assets/product.png"

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-2">
          <img className="h-8" src={productImage} alt="product image" />
          <h1 className="text-transparent bg-linear-120 from-slate-600 to-slate-900 bg-clip-text text-2xl font-semibold">Products Store</h1>
        </div>
        <div className="flex items-center gap-2">
          <BulkUpload />
          <Link to="/create" className="btn bg-blue-600 hover:bg-blue-700 text-white">Create</Link>
        </div>
    </header>
  )
}

export default Header