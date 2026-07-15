import { BrowserRouter, Route, Routes } from "react-router-dom"
import Products from "./pages/Products"
import Create from "./pages/Create"
import Update from "./pages/Update"
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/create" element={<Create />} /> 
        <Route path="/update/:id" element={<Update />} /> 
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
