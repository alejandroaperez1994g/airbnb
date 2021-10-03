import React from "react";
import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:[500] xl:[600px] 2xl:[800px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="txt-sm sm:text-lg ">
          ¿No estás seguro de a dónde ir? Perfecto.
        </p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          Soy flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
