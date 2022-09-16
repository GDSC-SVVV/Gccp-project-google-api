import { Marker } from "@react-google-maps/api";
import { useAppSelector } from "../../store/hooks";
import { v4 as uuidV4 } from "uuid";
import { MarkerHelper } from "./Helper";

const Markers = () => {
  //LOAD ADDRESSESS
  const addresses = useAppSelector((state) => state.address.addresses);

  return (
    <>
      {addresses.map((address, index) => {
        return (
          <Marker
            key={uuidV4()}
            title={address.address}
            position={{ lat: address.lat, lng: address.lng }}
            icon={{
              url: MarkerHelper.getIcon(index),
              scaledSize: MarkerHelper.getSize(),
              origin: MarkerHelper.getOrigin(),
              anchor: MarkerHelper.getAnchor(),
            }}
          />
        );
      })}
    </>
  );
};

export default Markers;
