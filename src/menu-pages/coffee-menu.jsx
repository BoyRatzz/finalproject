import NavBar from "../homepage/nav-bar";
import ProductCard from "../components/productcard";
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
import DDMenu from "./dropdownmenu";

export default function CoffeeMenu() {
  return (
    <main className="flex flex-col w-screen">
      <NavBar />

      <section className="bg-orange-200">
        <DDMenu />
      </section>

      <section className="bg-orange-200 w-screen flex flex-col items-center">
        <span className="max-w-[1280px] w-full flex flex-col items-center py-3 pb-20">
          <h1 className="text-6xl font-semibold font-serif pb-20 underline-offset-8 underline">Coffee</h1>
          <div className="flex gap-14 flex-wrap">
            <ProductCard
              image="https://www.mysticmonkcoffee.com/cdn/shop/articles/americano_coffee_1024x.png?v=1706611607"
              name="Americano"
              price="₱ 69.00"
            />
            <ProductCard
              image="https://img.freepik.com/premium-photo/hot-coffee-capuccino-cup-with-latte-art-wood-table-cafe_778722-18.jpg"
              name="Capuccino"
              price="₱ 69.00"
            />
            <ProductCard
              image="https://www.mysticmonkcoffee.com/cdn/shop/articles/americano_coffee_1024x.png?v=1706611607"
              name="Americano"
              price="₱ 69.00"
            />
            <ProductCard
              image="https://www.mysticmonkcoffee.com/cdn/shop/articles/americano_coffee_1024x.png?v=1706611607"
              name="Americano"
              price="₱ 69.00"
            />
            <ProductCard
              image="https://www.mysticmonkcoffee.com/cdn/shop/articles/americano_coffee_1024x.png?v=1706611607"
              name="Americano"
              price="₱ 69.00"
            />
            <ProductCard
              image="https://www.mysticmonkcoffee.com/cdn/shop/articles/americano_coffee_1024x.png?v=1706611607"
              name="Americano"
              price="₱ 69.00"
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
