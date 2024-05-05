import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './ProductCard.css'
export default function ProductCard({ product,onUpdate, onDelete }){
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleEdit = () => {
    setIsEditing(true); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = () => {
    console.log("Edited Product:", editedProduct);
    fetch(`http://localhost:3001/products/${editedProduct.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(editedProduct)
      
    })
    .then(response=>{
      onUpdate(editedProduct);
      setIsEditing(false);
    }).catch(err=>{
      console.log(err)
    })
  };

  const handleDelete = () => {
    fetch(`http://localhost:3001/products/${product.id}`,{
      method:'DELETE'
    })
    .then(resp=>{
      onDelete(product.id)
    })
    .catch(err=>{
      console.log(err)
    })

    console.log("Deleted Product ID:", product.id);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      {isEditing ? (
        <div className="product-details">
          <input type="text" name="name" value={editedProduct.name} onChange={handleChange} />
          <input type="number" name="rating" value={editedProduct.rating} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="product-details">
          <h3>{product.name}</h3>
          <p>Rating: {product.rating}</p>
        </div>
      )}
      <div className="product-actions">
        <button onClick={handleEdit}><EditIcon/></button>
        <button onClick={handleDelete}><DeleteIcon/></button>
      </div>
    </div>
  )
}