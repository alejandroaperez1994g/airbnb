import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

import { StarIcon } from "@heroicons/react/outline";

function Map({ searchResults }) {
  const [selectedLocation, setSelectionLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  {
    console.log(selectedLocation);
  }
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/alejandroaperez1994g/ckviisjr52hkb14rylr045x0k/draft"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectionLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              🏠
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectionLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              <div className="flex">
                <div className="h-13 w-12  flex-shrink-0 mr-2">
                  <img src={result.img} />
                </div>

                <div className="flex-row">
                  {result.title}

                  <p className="flex items-center">
                    <StarIcon className="h-5 text-red-400" />
                    {result.star}
                  </p>
                </div>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
