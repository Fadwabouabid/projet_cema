import React from "react";

export default function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      width: "250px",
      boxShadow: "0 0 10px #ccc",
      margin: "10px"
    }}>
      <img 
        src={posterURL} 
        alt={title} 
        style={{ width: "100%", borderRadius: "10px" }} 
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <p> {rating}/10</p>
    </div>
  );
}
