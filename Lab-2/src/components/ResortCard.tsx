type ResortProps = {
  resort: {
    id: number;
    pic: string;
    country: string;
    location: string;
    rating: number;
    price: number;
  };
};

export default function ResortCard({ resort }: ResortProps) {
  return (
    <div className="resort-card">
      <img src={resort.pic} alt={resort.location} />

      <h2>{resort.location}</h2>
      <p>{resort.country}</p>

      <p
        style={{
          color: resort.rating > 4.0 ? "green" : "red",
          fontWeight: "bold",
        }}
      >
        ★ {resort.rating}
      </p>

      <p>${resort.price}</p>
    </div>
  );
}
