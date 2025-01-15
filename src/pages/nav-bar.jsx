export default function NavBar() {
  return (
    <section className="flex justify-center w-screen bg-[#201404] py-4">
      <nav className="flex max-w-[1280px] w-full justify-between py-4 px-6 border-2 border-white font-serif text-white">
        <div className="flex font-semibold text-3xl">Cafeena</div>
        <div className="flex gap-10 text-lg">
          <button>Home</button>
          <button>Menu</button>
          <button>About Us</button>
          <button>Facilities</button>
        </div>
        <div className="flex">
          <button>Sign In</button>
        </div>
      </nav>
    </section>
  );
}
