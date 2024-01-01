import axios from "axios";
import { useEffect, useState } from "react"

interface ProductsArray{
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: number;
    title:string;
}


const useApi = () => {
   const [storeProduct, setStoreProduct] = useState<ProductsArray[]>();
   const [isloading, setIsLoading] = useState(false);
   const [error, setError] = useState();
    const apiUrl = "https://fakestoreapi.com/products";
   useEffect(()=>{
    {setIsLoading(true)}
    axios.get(apiUrl)
    .then(response => {console.log(response.data);
                      setStoreProduct(response.data)
                    setIsLoading(false)})
    .catch(error => {console.error(error)
                    setError(error)
                setIsLoading(false)})
   },[])

   return {storeProduct, error, isloading, setError, setIsLoading, setStoreProduct}
}

export default useApi
