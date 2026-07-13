import "./ProductCard.css";

function ProductCard({ productName, airline, price, time }) {
  return (
    <div className="flight-card">
      <h3>{productName}</h3>

      <p>✈️ {airline}</p>

      <p>🕒 Kalkış: {time}</p>

      <p>💰 {price} ₺</p>

      <button>Bilet Al</button>
    </div>
  );
}

export default ProductCard;