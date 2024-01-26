import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Location = ({ lat, lon, refetch }) => {
  const position = [lat=23.7104, lon=]; // Initial map center coordinates
  refetch();
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

      {/* <Marker position={position}></Marker> */}
    </MapContainer>
  );
};

export default Location;
