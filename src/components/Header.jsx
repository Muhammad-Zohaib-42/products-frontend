import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-3">
        <h1 className="text-2xl font-bold">Products Store</h1>
        <Link to="/create" className="btn bg-blue-600 text-white">Create</Link>
    </header>
  )
}

export default Header