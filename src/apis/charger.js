import fetcher from "./fetcher";

export const createCharger = (stationId, chargerType) => {
  const requestBody = {
    stationId: stationId,
    chargerType: chargerType,
  };
  return fetcher.post("/chargers", requestBody);
};
