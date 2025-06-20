import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const position = [40.7128, -74.006];

// Fix leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapLocation = () => {
  return (
    <div className="w-full h-[500px] bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>E-Shop Headquarter</strong>
            <br />
            123 Main Street, Anytown
            <br />
            New York, USA
          </Popup>
        </Marker>
      </MapContainer>

      <div className="absolute top-4 left-4 bg-white shadow-md p-4 rounded-md max-w-xs z-10">
        <h3 className="font-semibold text-gray-800">E-Shop Headquarter</h3>
        <p className="text-sm text-gray-600">
          123 Main Street, Anytown
          <br />
          New York, USA
        </p>
        <a
          href="https://www.google.com/maps?q=40.7128,-74.006"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 text-sm underline mt-2 inline-block"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
};

export default MapLocation;
