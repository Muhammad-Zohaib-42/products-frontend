import { createContext, useContext, useState } from "react";

export const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    return <ProductsContext.Provider value={{products, setProducts, loading, setLoading}}>
        {children}
    </ProductsContext.Provider>
}

export const useProductsContext = () => {
    const contextValue = useContext(ProductsContext)
    return contextValue
}