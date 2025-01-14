export default function NavBar() {
  return (
    <nav className="flex max-w-[1280px] w-full justify-between bg-red-400 p-6 border-4 border-black text-lg">
      <div className="flex">Cafeena</div>
      <div className="flex gap-10">
        <button>Home</button>
        <button>Menu</button>
        <button>About Us</button>
        <button>Facilities</button>
      </div>
      <div className="flex">
        <button>Sign In</button>
      </div>
    </nav>
  );
}
