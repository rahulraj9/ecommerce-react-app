import React, { useState } from "react";
import './ProductCard.css'
export default function ProductCard({ product }){
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
    setIsEditing(false);
  };

  const handleDelete = () => {

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
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}