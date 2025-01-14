import BestSeller from "./pages/best-seller";
import NavBar from "./pages/nav-bar";

function App() {
  return (
    <main className="flex flex-col bg-amber-800 items-center">
      <div className="w-full flex justify-center py-4">
        <NavBar />
      </div>

      <div className="flex h-[800px] bg-orange-400 max-w-[1280px] w-full">
        <div className="flex flex-col flex-1 bg-red-400">
          <div className="text-6xl font-semibold font-serif flex flex-col gap-6 pt-5">
            <h1>Discover The</h1>
            <h1>Art of Perfect</h1>
            <h1>Coffee</h1>
            <p className="font-thin text-lg w-[400px] py-2">
              Experience The Rich And Bold Flavors Of Our Exquisite Coffee
              Blends, Crafted To Awaken Your Senses And Start Your Day Right
            </p>
          </div>
          <div className="flex gap-6 py-10 text-xl font-serif">
            <button className="bg-white py-3 px-6 border-[2px] border-black">
              Order Now →
            </button>
            <button className="px-6 py-3 border-[2px] border-white text-white">
              Explore More
            </button>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col items-center">
              <h1 className="font-semibold font-serif text-4xl">50+</h1>
              <h1 className="font-thin font-serif text-lg">Item of Coffee</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold font-serif text-4xl">20+</h1>
              <h1 className="font-thin font-serif text-lg">Order Running</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold font-serif text-4xl">2k+</h1>
              <h1 className="font-thin font-serif text-lg">Happy Customer</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-1 bg-red-200"></div>
      </div>

      <div className="bg-yellow-100 flex max-w-[1280px] w-full">
        <div className="flex flex-1 bg-yellow-100"></div>
        <div className="flex flex-col flex-1 bg-yellow-50 py-[200px]">
          <h1 className="text-6xl font-semibold font-serif py-10">
            Coffee Heaven
          </h1>
          <p className="font-thin text-lg w-[600px] font-serif">
            A strong, concentrated coffee made by forcing hot water through
            finely-ground coffee beans under high pressure. Known for its rich
            flavor and creamy "crema" on top. Perfect for a quick, bold caffeine
            boost!
          </p>
          <div className="flex justify-start py-10">
            <button className=" text-lg font-serif px-6 py-3 bg-black text-white">
              View All →
            </button>
          </div>
        </div>
      </div>

      <div className="bg-yellow-100 h-[800px] flex max-w-[1280px] w-full">
        <div className="flex flex-col flex-1 bg-yellow-50 py-[200px]">
          <h1 className="text-6xl font-semibold font-serif py-10">
            Coffee Heaven
          </h1>
          <p className="font-thin text-lg w-[600px] font-serif">
            A strong, concentrated coffee made by forcing hot water through
            finely-ground coffee beans under high pressure. Known for its rich
            flavor and creamy "crema" on top. Perfect for a quick, bold caffeine
            boost!
          </p>
          <div className="flex justify-start py-10">
            <button className=" text-lg font-serif px-6 py-3 bg-black text-white">
              View All →
            </button>
          </div>
        </div>
        <div className="flex flex-1 bg-yellow-100"></div>
      </div>

      <div className="flex flex-col bg-orange-200 max-w-[1280px] w-full">
        <div className="flex flex-col items-center pt-10">
          <h1 className="flex text-6xl font-semibold font-serif py-6">
            Best Selling Item
          </h1>
          <p className="flex font-thin text-lg w-[800px] font-serif text-center pb-8">
            Coffee, a symphony of warmth and aroma, cradles the soul in its rich
            embrace. Each sip, a whispered poem, ignites the mind and stirs the
            heart anew.
          </p>
        </div>
        <div className="flex justify-center gap-10 text-2xl font-serif py-8">
          <button>All</button>
          <button>Black</button>
          <button>Espresso</button>
          <button>Doppio</button>
        </div>
        <BestSeller />
      </div>

      <div className="flex flex-col bg-orange-100 max-w-[1280px] w-full items-center">
        <h1 className="text-center text-6xl font-semibold font-serif px-10 pt-10 mt-20">
          What Our Customer Says
        </h1>
        <div className="flex flex-col items-center w-[1000px] pb-20">
          <img
            src="User.png"
            alt=""
            className="rounded-full w-[200px] border-8 border-orange-400 translate-y-16"
          />
          <div className="bg-black px-20 pt-20 text-white text-center w-[1000px]">
            <p className="font-extralight text-2xl">
              "I tried the Ethiopian Yirgacheffe roast, and it was incredible!
              The flavor profile was bright and vibrant, with distinct floral
              notes and a hint of citrus. The aroma was equally
              delightful—fruity and fresh. It had a smooth finish, no
              bitterness, and a perfect balance of acidity."
            </p>
            <h1 className="font-bold font-serif text-3xl mt-10 pb-3">
              ENGR. ALEJ POGI
            </h1>
          </div>
        </div>
      </div>

      <div className="flex max-w-[1280px] w-full h-[200px] bg-orange-300">
        <div className="flex flex-1 flex-col text-center text-5xl font-semibold font-serif justify-center items-center">
          <h1>Stay Up To Date On</h1>
          <h1>All News and Offers.</h1>
        </div>
        <div className="flex flex-1 justify-center flex-col gap-6 text-gray-800 text-opacity-60 font-extralight font-serif">
          <h2 className="text-xl w-[500px] text-start">
            Be The First To Know About New Collections, Special Events, And
            What's Going On at Kitchen
          </h2>
          <div className="flex">
            <input
              type="email"
              placeholder="   Enter Your Email Address"
              className="w-[400px] text-xl bg-gray-200 bg-opacity-80 px-2 py-4"
            />
            <button className="px-3 bg-gray-200 bg-opacity-80 border-2 border-black">
              <img
                src="https://www.shareicon.net/data/512x512/2015/12/06/683324_arrows_512x512.png"
                alt=""
                className="h-[50px]"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex max-w-[1280px] w-full h-[500px] bg-gray-950 text-white border-b border-b-orange-200">
        <div className="flex flex-col flex-1 border-l-orange-200 border-l">
          <img
            src="https://img.pikbest.com/origin/09/30/60/32ppIkbEsTjQx.png!sw800"
            alt=""
          />
          <h1 className="font-serif text-3xl text-center">
            Enjoy Better and Better
          </h1>
          <h1 className="font-serif text-3xl text-center">
            Coffee With Caffeine.
          </h1>
        </div>
        <div className="flex flex-1 flex-col gap-10 justify-center pl-5 border-x-orange-200 border-x">
          <h1 className="font-serif text-4xl font-semibold">Contact Us</h1>
          <h1 className="font-serif text-3xl">Cafeena@gmail.com</h1>
          <h1 className="font-serif text-3xl">Call Us: (969) 456-6969</h1>
          <h1 className="font-serif text-3xl">Text Us: (696) 456-6969</h1>
          <h1 className="font-serif text-3xl">
            460 Bagong Silang, Sitio Bagbaguiing, Nueva Vizcaya
          </h1>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center gap-10 border-r border-r-orange-200">
          <img
            src="https://lingvistov.com/upload/wp-content/uploads/shop/2016/04/coffee-004.png"
            alt=""
            className="w-[400px]"
          />
          <h1 className="font-serif text-4xl font-semibold -mb-5">Follow Us</h1>
          <div className="flex gap-10">
            <button>
              <img
                src="facebook logo final.png"
                alt=""
                className="w-[50px] h-[50px]"
              />
            </button>
            <button>
              <img
                src="instagram logo.png"
                alt=""
                className="w-[50px] h-[50px]"
              />
            </button>
            <button>
              <img
                src="twitter X logo.png"
                alt=""
                className="w-[50px] h-[50px]"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex bg-black max-w-[1280px] w-full p-5 justify-center items-center text-white">
        <h1 className="font-serif text-xl">Copyright: 2025 Ruiz Things 101</h1>
      </div>
    </main>
  );
}

export default App;
