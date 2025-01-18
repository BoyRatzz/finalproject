import NavBar from "../homepage/nav-bar";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Footer from "../homepage/footer";
import ProductCard2 from "../components/productcard2";
import DDMenu from "./dropdownmenu";

export default function BreakfastMenu() {
  return (
    <main className="flex flex-col w-screen">
      <NavBar />

      <section className="bg-[#f0dcc4]">
        <DDMenu />
      </section>

      <section className="bg-[#f0dcc4] w-screen flex flex-col items-center">
        <span className="max-w-[1280px] w-full flex flex-col items-center">
          <h1 className="font-serif font-semibold text-6xl pb-20 pt-10 underline-offset-8 underline">
            All-Day Breakfast
          </h1>
          <div className="flex gap-14 flex-wrap pb-20">
            <ProductCard2
              image="/src/assets/images/Complete American.png"
              name="American B."
              price="₱ 169.00"
            />
            <ProductCard2
              image="/src/assets/images/Egg Sandwich.png"
              name="Egg Sandwich"
              price="₱ 169.00"
            />
            <ProductCard2
              image="/src/assets/images/Tapsilog.png"
              name="Tapsilog"
              price="₱ 169.00"
            />
          </div>
        </span>
      </section>

      <div className="bg-[#201404]">
        <Footer />
      </div>
    </main>
  );
}
