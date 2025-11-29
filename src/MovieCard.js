import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ id, title, description, posterURL, rating }) {
  return (
    <Link to={`/movie/${id}`} style={{ textDecoration: "none", color: "black" }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
          width: "250px",
          boxShadow: "0 0 10px #ccc",
          margin: "10px"
        }}
      >
        <img
          src={posterURL}
          alt={title}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <h3>{title}</h3>
        <p>{description.substring(0, 80)}...</p>
        <p>⭐ {rating}/10</p>
      </div>
    </Link>
  );
}
