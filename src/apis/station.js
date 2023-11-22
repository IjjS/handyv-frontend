import fetcher from "./fetcher";

export const createStation = (name) => {
  const requestBody = {
    name: name,
  };
  return fetcher.post("/stations", requestBody);
};

export const getStations = (partialName) => {
  const path = partialName
    ? `/stations?partialName=${partialName}`
    : "/stations";
  return fetcher.get(path);
};
