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
import ProductCard3 from "../components/productcard3";
import DDMenu from "./dropdownmenu";

export default function BreadDessertMenu() {
  return (
    <main className="flex flex-col w-screen">
      <NavBar />

      <div className="bg-[#f7e0d2]">
        <DDMenu />
      </div>

      <section className="bg-[#f7e0d2] w-screen flex flex-col items-center pb-10 pt-5">
        <span className="max-w-[1280px] w-full flex flex-col items-center">
          <h1 className="text-6xl font-semibold font-serif pb-20 underline-offset-8 underline">
            Breads & Desserts
          </h1>
          <div className="flex gap-14 flex-wrap">
            <ProductCard3
              image="/src/assets/images/Croissant.png"
              name="Croissant"
              price="₱ 69.00"
            />
            <ProductCard3
              image="/src/assets/images/Baguette.png"
              name="Baguette"
              price="₱ 169.00"
            />
            <ProductCard3
              image="/src/assets/images/Pandesal.png"
              name="Pandesal"
              price="₱ 20.00"
            />
            <ProductCard3
              image="/src/assets/images/Meringue Pie.png"
              name="Meringue Pie"
              price="₱ 369.00"
            />
            <ProductCard3
              image="/src/assets/images/Short Cake.png"
              name="Short Cake"
              price="₱ 269.00"
            />
            <ProductCard3
              image="/src/assets/images/Cookie.png"
              name="Cookie"
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
