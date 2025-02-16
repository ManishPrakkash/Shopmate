import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProductList = () => {

  const [url, setUrl]= useState("http://127.0.0.1:8000/products");
  
  const {data: products,loading} = useFetch(url);

  return (
    <section>
      <div className="filter">
        <button onClick={()=>setUrl("http://127.0.0.1:8000/products")}>ALL</button> 
        <button onClick={()=>setUrl("http://127.0.0.1:8000/products?stock=true")}>Available</button> 
        <button onClick={()=>setUrl("http://127.0.0.1:8000/products?stock=false")}>Unavailable</button> 
      </div>

      {loading && <p>Loading Products...</p>}
      
       {products && products.map((product)=>(
    
        <div className="card" key={product.id}>
          
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>₹{product.price}</span>
            <span className={product.stock ? "Available" : "NotAvailable"}>{product.stock ? "Available" : "Not Available"}</span>
          </p>
        </div>))
    }</section>
  )
}
