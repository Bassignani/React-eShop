import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
	
	useEffect(async () => {
		const response = await axios(API);   //axios se instala desde la terminal->   npm i axios
		setProducts(response.data);
	}, []);
    return products;
};

export default useGetProducts