import React from "react";
import Image from "next/image";

function Host({ img, title, description, buttonText }) {
  return (
    <section className="relative py-10 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 text-white">{title}</h3>
        <p className="text-1xl mb-3 w-64 text-white ">{description}</p>
        <button className="text-md font-semibold text-black-900 bg-white px-4 py-2 rounded-lg mt-5 ">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default Host;
