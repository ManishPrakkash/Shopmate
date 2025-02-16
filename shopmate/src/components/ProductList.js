import { useEffect, useState } from "react";
export const ProductList = () => {

  const [products, setProducts] = useState([])
  const [url, setUrl]= useState("http://127.0.0.1:8000/products")
  const [counter, setCounter]=useState(0);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [url]);

 
  useEffect(()=>{
    console.log(counter);
  },[counter])

  return (
    <section>
      <div className="filter">
        <button onClick={()=>setUrl("http://127.0.0.1:8000/products")}>ALL</button> 
        <button onClick={()=>setUrl("http://127.0.0.1:8000/products?stock=true")}>Available</button> 
        <button onClick={()=>setUrl("http://127.0.0.1:8000/products?stock=false")}>Unavailable</button> 
        <button onClick={()=>setCounter(counter + 1)}>{counter}</button>
      </div>
       {products.map((product)=>(
    
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
