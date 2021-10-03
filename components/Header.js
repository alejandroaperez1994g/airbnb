import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="stiky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left Side */}
      <div className="relative flex items-center h-10  cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle Side-Search*/}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm ">
        <input
          className="flex-grow pl-5 bg-trasparent outline-none text-gray-500 placeholder-gray-400"
          type="text"
          placeholder="Empieza tu búsqueda"
        />
        <SearchIcon className="h-8 bg-red-400 hidden md:inline-flex  text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* Right Side */}
      <div className="flex items-center space-x-4 justify-end text-gray-400">
        <p className="hidden md:inline cursor-pointer">
          Conviértete en anfitrión
        </p>
        <GlobeAltIcon className="h-6" />

        <div className="flex items-center space-x-4 border-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
