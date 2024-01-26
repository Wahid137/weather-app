import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const Location = () => {
  const position = [51.505, -0.09]; // Initial map center coordinates

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        {/* Additional Marker content goes here */}
      </Marker>
    </MapContainer>
  );
};

export default Location;
