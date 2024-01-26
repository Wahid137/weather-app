import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer } from "react-leaflet";

const Location = ({ lat, lon }) => {
  const position = [lat, lon]; // Initial map center coordinates

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "200px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <FaMapMarkerAlt className="text-red-500" position={position}>
        <FaMapMarkerAlt />
      </FaMapMarkerAlt>
    </MapContainer>
  );
};

export default Location;
