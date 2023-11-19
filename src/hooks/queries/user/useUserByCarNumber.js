import { useQuery } from "react-query";
import { getUserByCarNumber } from "../../../apis/user";

const useUserByCarNumber = (carNumber, options) =>
  useQuery(["user", carNumber], () => getUserByCarNumber(carNumber), {
    ...options,
  });

export default useUserByCarNumber;
