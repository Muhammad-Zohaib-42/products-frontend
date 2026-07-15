import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"

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
        <Link to="/" className="btn bg-indigo-700 text-white fixed top-10 left-10">Back</Link>
        <section className="shadow-lg p-10 rounded-lg w-full max-w-96 mx-auto border border-slate-400">
            <h1 className="text-2xl text-center font-bold">Create Product</h1>
            <form onSubmit={submitHandler} className="mt-3 flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="title">Title</label>
                    <input value={productData.title} onChange={changeHandler} className="border border-slate-200 outline-none shadow px-3 py-1.5 rounded-lg" type="text" id="title" name="title" required />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="description">description</label>
                    <textarea value={productData.description} onChange={changeHandler} className="border border-slate-200 outline-none shadow px-3 py-1.5 rounded-lg resize-x-none" name="description" id="description" rows={3} required></textarea>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="price">price</label>
                    <input value={productData.price} onChange={changeHandler} className="border border-slate-200 outline-none shadow px-3 py-1.5 rounded-lg" type="number" id="price" name="price" required />
                </div>
                <button className="btn bg-emerald-700 text-white mt-5">Create</button>
            </form>
        </section>
    </main>
  )
}

export default Create