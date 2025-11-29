import React from "react";
import { useParams, Link } from "react-router-dom";

export default function MovieDescription({ movies }) {
  const { id } = useParams();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h2>Film introuvable</h2>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{movie.title}</h2>

      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <p style={{ marginTop: "20px", fontSize: "18px" }}>{movie.description}</p>

      <h3>Bande-annonce :</h3>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title="YouTube video player"
        allowFullScreen
        style={{ marginTop: "20px" }}
      ></iframe>

      <br /><br />

      <Link to="/">
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        >
          ⬅ Retour à l'accueil
        </button>
      </Link>
    </div>
  );
}
