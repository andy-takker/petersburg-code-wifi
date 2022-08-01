import api from ".";

export const getNearestWifi = ({
  limit = 100,
  offset = 0,
  latitude = 59.939099,
  longitude = 30.315877,
  radius = 2,
}) => {
  return api
    .get("/wifi-zones/nearest", {
      params: {
        limit,
        offset,
        latitude,
        longitude,
        radius,
      },
    })
    .then((v) => v.data);
};
