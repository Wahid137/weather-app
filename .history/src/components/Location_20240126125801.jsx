import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const Location = ({ lat, lon }) => {
  const position = [lat, lon]; // Initial map center coordinates

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "200px", width: "100%" }}
    >
      <TileLayer />
      <Marker position={position}>
        {/* Additional Marker content goes here */}
      </Marker>
    </MapContainer>
  );
};

export default Location;
