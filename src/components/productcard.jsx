export default function ProductCard(props) {
  return (
    <main className="flex flex-col">

        <div
          className="flex flex-col gap-2 border-[3px] border-black px-10 pt-10 w-fit"
          style={{
            background:
              "linear-gradient(to bottom, black 40%, transparent 60%)",
          }}
        >
          <img
            src={props.image}
            alt="image"
            className="h-[300px] w-[300px] border-[8px] border-orange-200"
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
