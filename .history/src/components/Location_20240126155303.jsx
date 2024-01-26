import "leaflet/dist/leaflet.css";
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
      <img src="../assets/icon/sun.svg" alt="" />
      {/*  <Marker position={position}></Marker> */}
    </MapContainer>
  );
};

export default Location;
