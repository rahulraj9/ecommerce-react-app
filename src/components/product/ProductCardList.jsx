import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import mockProducts from "./mockPorduct";


export default function ProductList(){
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/products')
    .then((res)=>res.json())
    .then((data)=>setProducts(data))
    .catch(error => console.error('Error fetching products:', error));
  },[])

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}