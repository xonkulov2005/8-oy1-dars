import Link from "next/link";

function Navbar() {
  return (
    <div className="flex gap-5">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
