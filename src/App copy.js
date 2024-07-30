import { GoogleMap, AdvancedMarkerElement,  useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const App = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '500px'
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey:"AIzaSyAuHnwnyAwPe4AjNkWs0KJs49umDZuyhjo",
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        />
      )}
         <AdvancedMarkerElement position={{ lat: 18.52043, lng: 73.856743 }} />
    </div>
  );
};

export default App;
