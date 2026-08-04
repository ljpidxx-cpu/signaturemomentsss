import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Wooden Welcome Sign",
      price: "$24.99",
      image: "https://picsum.photos/400?1"
    },
    {
      id: 2,
      name: "Handmade Candle",
      price: "$18.99",
      image: "https://picsum.photos/400?2"
    },
    {
      id: 3,
      name: "Crochet Plush Bear",
      price: "$34.99",
      image: "https://picsum.photos/400?3"
    }
  ];

  return (
    <>
      <Navbar />

      <main style={{ padding: 40 }}>
        <div
          style={{
            textAlign: "center",
            padding: "80px 20px"
          }}
        >
          <h1 style={{ fontSize: 60 }}>
            Handmade Crafts
          </h1>

          <p
            style={{
              marginTop: 20,
              fontSize: 22,
              color: "gray"
            }}
          >
            Beautiful handmade gifts for every occasion.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 30
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                background: "white",
                borderRadius: 15,
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0,0,0,.1)"
              }}
            >
              <img
                src={p.image}
                style={{
                  width: "100%",
                  height: 280,
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: 20 }}>
                <h2>{p.name}</h2>

                <h3
                  style={{
                    color: "#d63384",
                    marginTop: 10
                  }}
                >
                  {p.price}
                </h3>

                <button
                  style={{
                    width: "100%",
                    marginTop: 20,
                    padding: 15,
                    background: "#d63384",
                    color: "white",
                    border: "none",
                    borderRadius: 10
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
