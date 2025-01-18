import ProductCard from "../components/productcard";
import ProductCard2 from "../components/productcard2";
import ProductCard3 from "../components/productcard3";
import { Link } from "react-router-dom";
import Footer from "../homepage/footer";
import NavBar from "../homepage/nav-bar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DDMenu from "../menu-pages/dropdownmenu";

export default function Menu() {
  return (
    <main className="flex flex-col w-screen items-center  ">
      <NavBar />

      <div className="bg-orange-200">
        <DDMenu />
      </div>

      <section className="bg-orange-200 w-screen flex flex-col items-center">
        <span className="max-w-[1280px] w-full flex flex-col items-center py-3 pb-20">
          <h1 className="text-6xl font-semibold font-serif pb-20 underline-offset-8 underline">Coffee </h1>
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

      <section className="bg-[#f0dcc4] w-screen flex flex-col items-center py-20">
        <span className="max-w-[1280px] w-full flex flex-col items-center">
          <h1 className="font-serif font-semibold text-6xl pb-20 pt-20 underline-offset-8 underline">
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

      <section className="bg-[#f7e0d2] w-screen flex flex-col items-center pb-10 pt-5">
        <span className="max-w-[1280px] w-full flex flex-col items-center py-20">
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
