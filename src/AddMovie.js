import { useState } from "react";

export default function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const handleAdd = () => {
    if (!title || !posterURL || !description || !rating) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    addMovie({ title, posterURL, description, rating });
    setTitle("");
    setPosterURL("");
    setDescription("");
    setRating("");
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h3>Ajouter un nouveau film</h3>

      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", margin: "5px" }}
      />

      <input
        type="text"
        placeholder="URL du poster"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        style={{ padding: "8px", margin: "5px" }}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "8px", margin: "5px", width: "250px" }}
      />

      <input
        type="number"
        placeholder="Note /10"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{ padding: "8px", margin: "5px", width: "100px" }}
      />

      <br />
      <button 
        onClick={handleAdd}
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Ajouter
      </button>
    </div>
  );
}
