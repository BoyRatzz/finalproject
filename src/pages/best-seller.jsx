export default function BestSeller() {
  return (
    <div className="flex pb-10 gap-10 justify-center">
      <div
        className="flex flex-col gap-5 border-[3px] border-black px-10 pt-10"
        style={{
          background: "linear-gradient(to bottom, black 40%, transparent 60%)",
        }}
      >
        <img
          src="https://www.mysticmonkcoffee.com/cdn/shop/articles/americano_coffee_1024x.png?v=1706611607"
          alt=""
          className="h-[300px] w-[300px] border-[8px] border-orange-200"
        />
        <h1 className="text-4xl font-semibold font-serif text-center">
          Americano
        </h1>
        <button className="text-center text-2xl font-serif border-t-2 border-black py-4">
          Order Now
        </button>
      </div>
      <div
        className="flex flex-col gap-5 border-[3px] border-black px-10 pt-10"
        style={{
          background: "linear-gradient(to bottom, black 40%, transparent 60%)",
        }}
      >
        <img
          src="https://img.freepik.com/premium-photo/hot-coffee-capuccino-cup-with-latte-art-wood-table-cafe_778722-18.jpg"
          alt=""
          className="h-[300px] w-[300px] border-[8px] border-orange-200"
        />
        <h1 className="text-4xl font-semibold font-serif text-center">
          Capuccino
        </h1>
        <button className="text-center text-2xl font-serif border-t-2 border-black py-4">
          Order Now
        </button>
      </div>
      <div
        className="flex flex-col gap-5 border-[3px] border-black px-10 pt-10 bg-gradient-to-b"
        style={{
          background: "linear-gradient(to bottom, black 40%, transparent 60%)",
        }}
      >
        <img
          src="https://img.pikbest.com/origin/10/21/52/44IpIkbEsTd8a.jpg!w700wp"
          alt=""
          className="h-[300px] w-[300px] border-[8px] border-orange-200"
        />
        <h1 className="text-4xl font-semibold font-serif text-center">
          Espresso
        </h1>
        <button className="text-center text-2xl font-serif border-t-2 border-black py-4">
          Order Now
        </button>
      </div>
    </div>
  );
}
