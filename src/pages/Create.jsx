import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import productImage from "../assets/product.png"

const Create = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: ""
  })

  const navigate = useNavigate()

  function changeHandler(e) {
    const {name, value} = e.target
    setProductData(prev => ({...prev, [name]: value}))
  }

  async function submitHandler(e) {
    e.preventDefault()

    try {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/products/create`, productData)
        toast.success("Product create successfully")
        navigate("/")
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <main className="h-screen flex items-center justify-center">
            <Link to="/" className="btn bg-blue-600 hover:bg-blue-700 text-white fixed top-5 left-5">Back</Link>
            <section className="p-10 rounded-lg w-full max-w-112.5 mx-auto">
                <img src={productImage} className="h-16 text-center mx-auto" alt="product image" />
                <h1 className="text-2xl text-center font-semibold">Create Product</h1>
                <form onSubmit={submitHandler} className="mt-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-slate-600" htmlFor="title">Title</label>
                        <input value={productData.title} onChange={changeHandler} className="shadow border border-slate-300 outline-none px-3 py-1.5 rounded-lg bg-white" type="text" id="title" name="title" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-slate-600" htmlFor="description">Description</label>
                        <textarea value={productData.description} onChange={changeHandler} className="shadow border border-slate-300 outline-none px-3 py-1.5 rounded-lg bg-white resize-x-none" name="description" id="description" rows={3} required></textarea>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-slate-600" htmlFor="price">Price</label>
                        <input value={productData.price} onChange={changeHandler} className="shadow border border-slate-300 outline-none px-3 py-1.5 rounded-lg bg-white" type="number" id="price" name="price" required />
                    </div>
                    <button className="btn bg-emerald-600 hover:bg-green-700 text-white mt-2">Create</button>
                </form>
            </section>
        </main>
  )
}

export default Create