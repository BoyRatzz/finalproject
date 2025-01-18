export default function ProductCard2(props) {
  return (
    <main className="flex flex-col">
      <div
        className="flex flex-col gap-2 border-[3px] border-black px-10 pt-10 w-fit"
        style={{
          background: "linear-gradient(to bottom, black 40%, transparent 40%)",
        }}
      >
        <img
          src={props.image}
          alt="image"
          className="h-[300px] w-[300px] border-[8px] border-[#f0dcc4]"
        />
        <h1 className="flex text-center text-2xl font-thin font-serif justify-center">
          {props.price}
        </h1>
        <h1 className="text-4xl font-semibold font-serif text-center">
          {props.name}
        </h1>
        <button className="text-center text-2xl font-serif border-t-2 border-black py-4">
          Order Now
        </button>
      </div>
    </main>
  );
}
