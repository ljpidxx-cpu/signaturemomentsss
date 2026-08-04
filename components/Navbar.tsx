export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,.1)"
      }}
    >
      <h1
        style={{
          color: "#d63384",
          fontSize: "32px",
          fontWeight: "bold"
        }}
      >
        SignatureMoments
      </h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          fontWeight: "bold"
        }}
      >
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}
