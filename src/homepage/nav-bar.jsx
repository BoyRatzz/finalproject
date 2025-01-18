import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <section className="flex justify-center w-screen bg-[#201404] py-4">
      <nav className="flex max-w-[1280px] w-full justify-between py-4 px-6 border-2 border-white font-serif text-white">
        <div className="flex font-semibold text-3xl">Cafeena</div>
        <div className="flex gap-10 text-lg">
          <h1>
            <Link
              to="/"
              className={`relative group ${
                location.pathname === "/"
                  ? "underline-offset-[7px] underline decoration-[2px]"
                  : ""
              }`}
            >
              Home
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full -mb-1"></span>
            </Link>
          </h1>
          <h1>
            <Link
              to="/menu"
              className={`relative group ${
                location.pathname === "/menu"
                  ? "underline-offset-[7px] underline decoration-[2px]"
                  : ""
              }`}
            >
              Menu
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full -mb-1"></span>
            </Link>
          </h1>
          <h1>
            <Link
              to="/about"
              className={`relative group ${
                location.pathname === "/aboutus"
                  ? "underline-offset-[7px] underline decoration-[2px]"
                  : ""
              }`}
            >
              About Us
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full -mb-1"></span>
            </Link>
          </h1>
          <h1>
            <Link
              to="/facilities"
              className={`relative group ${
                location.pathname === "/facilities"
                  ? "underline-offset-[7px] underline decoration-[2px]"
                  : ""
              }`}
            >
              Facilities
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full -mb-1"></span>
            </Link>
          </h1>
        </div>
        <div className="flex">
          <button
            className={`relative group ${
              location.pathname === "/login"
                ? "underline-offset-[7px] underline decoration-[2px]"
                : ""
            }`}
          >
            <Link to="/login">
              Sign In
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full mb-1"></span>
            </Link>
          </button>
        </div>
      </nav>
    </section>
  );
}
