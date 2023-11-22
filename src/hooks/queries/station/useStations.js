import { useQuery } from "react-query";
import { getStations } from "../../../apis/station";

const useStations = (partialName, options) => {
  return useQuery(["stations", partialName], () => getStations(partialName), {
    ...options,
  });
};

export default useStations;
