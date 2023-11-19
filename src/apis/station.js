import fetcher from "./fetcher";

export const createStation = (name) => {
  const requestBody = {
    name: name,
  };
  return fetcher.post("/stations", requestBody);
};
