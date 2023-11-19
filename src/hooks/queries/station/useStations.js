import { useMutation } from "react-query";
import { createStation } from "../../../apis/station";

export const useCreateStation = (name, options) => {
  return useMutation("create-station", () => createStation(name), {
    ...options,
  });
};
