import { useEffect, useState } from "react";
export const ProductList = () => {

  const [product, setProducts] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  console.log(product);
  
  return (
    <>
    </>
  )
}
