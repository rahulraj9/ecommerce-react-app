import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


export default function ProductList(){
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://json-server-data-lbla.onrender.com/products')
    .then((res)=>res.json())
    .then((data)=>setProducts(data))
    .catch(error => console.error('Error fetching products:', error));
  },[])

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };
  const handleDelete = (deletedProductId) =>{
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== deletedProductId)
    );
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onUpdate = {handleUpdateProduct} onDelete = {handleDelete}/>
      ))}
    </div>
  );
}