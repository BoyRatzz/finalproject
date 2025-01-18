import Footer from "../homepage/footer";
import NavBar from "../homepage/nav-bar";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main className="flex flex-col w-screen h-screen items-center bg-[#201404]">
      <NavBar />
      <div className="flex w-full max-w-[1280px] h-screen">
        <section className="flex flex-col w-[500px] justify-center items-center text-white">
          <div className="text-center p-5 font-serif drop-shadow-2xl">
            <h1 className="text-4xl py-5 drop-shadow-2xl">Welcome!</h1>
            <h1 className="text-3xl pb-3 drop-shadow-2xl">Please Login to Your Account</h1>
          </div>
          <div className="flex flex-col gap-5 px-10 pt-8 pb-6 rounded-2xl bg-black bg-opacity-25 mb-40 drop-shadow-2xl">
            <input
              type="email"
              placeholder="Email Address"
              className="px-8 py-1 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="px-8 py-1 rounded-lg"
            />
            <button className="px-8 py-1 bg-black rounded-lg text-white">
              Sign In
            </button>
            <div className="justify-center flex border-t border-white"></div>
            <div className="flex justify-center px-8 py-1 bg-white rounded-lg text-black">
              <img
                src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
                alt="img"
                className="w-[40px]"
              />
              <h1>Sign In with Google</h1>
            </div>
            <div className="flex justify-center px-8 py-1 bg-black rounded-lg gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/862px-Apple_logo_grey.svg.png"
                alt="img"
                className="w-[20px]"
              />
              <h1>Sign In with Apple</h1>
            </div>
            <div className="flex justify-center px-8 py-1 bg-blue-500 rounded-lg text-black gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                alt="img"
                className="w-[26px]"
              />
              <h1>Sign In with Facebook</h1>
            </div>
          </div>
        </section>

        <div className="flex flex-1 bg-[#201404] justify-center items-center">
          <img
            src="/src/assets/images/Kape bg 3.png"
            alt="img"
            className="translate-y-16 drop-shadow-2xl translate-x-12"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
