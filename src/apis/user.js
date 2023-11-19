import fetcher from "./fetcher";

export const getUserByCarNumber = (carNumber) => {
  return fetcher.get(`/users/car-number/${carNumber}`);
};
