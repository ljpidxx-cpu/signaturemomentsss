export default function Home() {
  const products = [
    {
      id: 1,
      name: "Handmade Wooden Sign",
      price: "$24.99",
      image: "https://picsum.photos/400/400?1"
    },
    {
      id: 2,
      name: "Custom Candle",
      price: "$18.99",
      image: "https://picsum.photos/400/400?2"
    },
    {
      id: 3,
      name: "Crochet Plush",
      price: "$29.99",
      image: "https://picsum.photos/400/400?3"
    }
  ];

  return (
    <main className="min-h-screen bg-pink-50">
      <nav className="bg-white shadow-md p-5 flex justify-between">
        <h1 className="text-3xl font-bold text-pink-600">
          SignatureMoments
        </h1>

        <div className="space-x-6">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Cart</a>
          <a href="#">Login</a>
        </div>
      </nav>

      <section className="text-center py-20">
        <h2 className="text-5xl font-bold">
          Handmade Crafts You'll Love
        </h2>

        <p className="mt-5 text-gray-600">
          Every item is made with care and creativity.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 p-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-semibold">
                {product.name}
              </h3>

              <p className="text-pink-600 text-xl mt-2">
                {product.price}
              </p>

              <button className="mt-5 w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
