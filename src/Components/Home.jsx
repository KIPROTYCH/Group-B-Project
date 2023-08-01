import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";



function Home() {


  return (
    <div>
      <Navbar />
      <Hero
        btntext="Travel Plan"
        url="/"
        btn="btn"
        text="Choose Your Favourite Destination"
        title="Embrace the Adventure"
        src="https://tinyurl.com/22xh5jm9"
      />

     

      <div className="w-full mx-auto text-center mt-10 mb-10">
        <h1 className="font-bold text-3xl tracking-wide mb-2">
          Popular Destination
        </h1>
        <p className="text-sm text-gray-600">
          Tours give you the opportunity to see a lot, within a time frame
        </p>
      </div>

      <div className="p-6 flex gap-14 flex-wrap justify-center items-center">
        <div className="w-[500px] text-center flex flex-col gap-8">
          <h2 className="font-semibold text-xl">A pool in a yard.</h2>
          <p className="text-gray-800 ">
            This villa is situated off and not far from the main road in the quickly developing area of Canggu, a short walk to, Deus, all the other trendy cafes and shops and the renowned Echo Beach with its stunning ocean sunsets and surf spots. Built well, this large 3-bedroom holiday villa offers tranquility and comfort.


          </p>
        </div>

        <div className=" w-[400px] h-[300px]">
          <img
            className="rounded-2xl shadow-2xl  cursor-pointer hover:brightness-105 hover:scale-105 transition-all duration-300"
            src="https://tinyurl.com/25h4dgh2"
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div className=" hidden  p-6 lg:flex gap-14 flex-wrap justify-center items-center">
        <div className=" w-[400px] h-[300px] ">
          <img
            className="rounded-2xl shadow-2xl mt-6 cursor-pointer hover:brightness-105 hover:scale-105 transition-all duration-300"
            src="https://tinyurl.com/237dsfx8"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="w-[500px] text-center flex flex-col gap-8 ">
          <h2 className="font-semibold text-xl">Introducing Enchanted Oasis.</h2>
          <p className="text-gray-800 ">
            Nestled in the heart of an idyllic landscape, "Enchanted Oasis" beckons you with its irresistible allure. This exquisite 3-bedroom haven boasts an aura of enchantment that will whisk you away from the mundane and immerse you in a world of pure bliss. Surrounded by lush foliage and vibrant blooms, the villa exudes an air of tranquility that invites you to escape the bustle of everyday life and embrace the magic of this extraordinary retreat.
          </p>
        </div>
      </div>

      <div className="lg:hidden p-6 flex gap-14 flex-wrap justify-center items-center">
        <div className="w-[500px] text-center flex flex-col gap-8 ">
          <h2 className="font-semibold text-xl">Mt.Daguldul, Bantangas</h2>
          <p className="text-gray-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ducimus laudantium excepturi illum illo iste ea quos eligendi iusto
            quis. Beatae voluptatum incidunt repudiandae animi mollitia, quam
            eveniet maiores magnam?
          </p>
        </div>
        <div className=" w-[400px] h-[300px] ">
          <img
            className="rounded-2xl shadow-2xl  cursor-pointer hover:brightness-105 hover:scale-105 transition-all duration-300"
            src="https://images.unsplash.com/photo-1447727214830-cbcbf097b52c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1896&q=80"
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div className="p-6 flex gap-14 flex-wrap justify-center items-center">
        <div className="w-[500px] text-center flex flex-col gap-8">
          <h2 className="font-semibold text-xl">brown wooden dock on blue lake during daytime</h2>
          <p className="text-gray-800 ">
            Serenity Haven is a luxurious and private villa nestled amidst breathtaking natural surroundings. Situated on a secluded hilltop, this exquisite retreat offers unparalleled panoramic views of lush green valleys, sparkling rivers, and majestic mountains. The villa's architecture seamlessly blends modern elegance with traditional charm, creating a perfect harmony with its surroundings.
          </p>
        </div>

        <div className=" w-[400px] h-[300px]">
          <img
            className="rounded-2xl shadow-2xl  cursor-pointer hover:brightness-105 hover:scale-105 transition-all duration-300"
            src="https://tinyurl.com/2y7fswym"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      

      <Footer />
    </div>
  );
}

export default Home;
