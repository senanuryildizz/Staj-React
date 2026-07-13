import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <main style={{ padding: "30px" }}>
      <h1>✈️ FlyTicket</h1>

      <p>
        Dünyanın dört bir yanına uygun fiyatlı uçak biletlerini keşfedin.
      </p>

      <h2>Popüler Uçuşlar</h2>

      <ProductCard
        productName="İstanbul → Ankara"
        airline="Türk Hava Yolları"
        price={1850}
        time="08:30"
      />

      <ProductCard
        productName="İstanbul → İzmir"
        airline="Pegasus"
        price={1250}
        time="13:45"
      />

      <ProductCard
        productName="İstanbul → Antalya"
        airline="AJet"
        price={1600}
        time="18:20"
      />
    </main>
  );
}

export default Home;