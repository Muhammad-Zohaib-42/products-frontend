import axios from 'axios';
import toast from "react-hot-toast"
import { useProductsContext } from '../contexts/ProductsContext';

const BulkUpload = () => {
    const {setLoading, setProducts} = useProductsContext()

    async function fetchProducts() {
      setLoading(true)
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/products`)
        setProducts(response.data.products)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/products/bulk-upload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            toast.success('Upload successful!');
            fetchProducts()
        } catch (error) {
            toast.error("Invalid file type! Please upload only .csv or .xlsx files.");
            console.log(error)
        }
    };

    return (
        <div className="flex justify-center">
    <input 
        type="file" 
        id="fileInput" 
        onChange={handleFileChange} 
        accept=".xlsx, .csv" 
        className="hidden" 
    />
    <label 
        htmlFor="fileInput" 
        className="btn bg-blue-600 hover:bg-blue-700 text-white"
    >
        Bulk Upload Products
    </label>
</div>
    );
};

export default BulkUpload