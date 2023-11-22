import { useMutation } from "react-query";
import { createCharger } from "../../../apis/charger";

const useCreateCharger = (stationId, chargerType, options) => {
  return useMutation(
    "create-charger",
    () => createCharger(stationId, chargerType),
    {
      ...options,
    },
  );
};

export default useCreateCharger;
