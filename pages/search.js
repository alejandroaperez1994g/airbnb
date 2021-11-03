import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResult }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14  px-16">
          <p className="text-xs flex ">
            Más de 300 alojamientos
            <p className="bg-red-400 rounded-md mr-1 ml-1 px-1">
              {" "}
              {range}{" "}
            </p>{" "}
            para {noOfGuests} huéspedes
          </p>
          <h1 className=" text-3xl font-semibold mt-2  mb-6">
            Estancias en {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
            <p className="button">Cancelación gratuita</p>
            <p className="button">Tipo de alojamiento</p>
            <p className="button">Precio</p>
            <p className="button">Reserva inmediata</p>
            <p className="button">Más filtros</p>
          </div>
          <div className="flex-row">
            {searchResult.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex   xl:min-w-[600px]">
          <Map searchResults={searchResult} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}
