import { useMutation } from "react-query";
import { createStation } from "../../../apis/station";

const useCreateStation = (name, options) => {
  return useMutation("create-station", () => createStation(name), {
    ...options,
  });
};

export default useCreateStation;
