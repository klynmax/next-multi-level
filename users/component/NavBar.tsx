export default function Navbar() {
  return (
    <nav style={{ padding: 20, borderBottom: "1px solid #ccc" }}>
      <a href="/">Home</a>

      {" | "}

      <a href="/users">Users Module</a>
    </nav>
  );
}
