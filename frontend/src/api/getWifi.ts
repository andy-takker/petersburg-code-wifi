import api from ".";

export const getWifi = ({ limit = 100, offset = 0 }) => {
  return api
    .get("/wifi-zones/", {
      params: {
        limit,
        offset,
      },
    })
    .then((v) => v.data);
};
