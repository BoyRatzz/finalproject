import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export default function DDMenu() {
  return (
    <section className="w-screen flex justify-center p-5">
      <div className="max-w-[1280px] w-full flex justify-end">
        <div className="border border-white p-2 rounded-2xl font-semibold bg-white drop-shadow-2xl">
          <DropdownMenu>
            <DropdownMenuTrigger>Select Category :</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to={"/menu"}>All</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={"/menu/coffee"}>Coffee</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={"/menu/breakfast"}>All-Day Breakfast</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={"/menu/bread-dessert"}>Breads & Desserts</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
}
