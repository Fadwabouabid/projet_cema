export default function Filter({ setSearchTitle, setSearchRating }) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        placeholder="Rechercher par titre..."
        onChange={(e) => setSearchTitle(e.target.value)}
        style={{ padding: "10px", width: "200px", marginRight: "10px" }}
      />

      <input
        type="number"
        placeholder="Note minimale"
        onChange={(e) => setSearchRating(e.target.value)}
        style={{ padding: "10px", width: "150px" }}
      />
    </div>
  );
}
