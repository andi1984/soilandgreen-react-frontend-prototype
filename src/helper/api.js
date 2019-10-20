import { GARDEN_TYPES } from "./type";
// TODO: Move to env
const ENDPOINT = "https://soilandgreen.org";

export const cropJson = () => {
  return fetch(`${ENDPOINT}/api/crop`, {
    headers: {
      Accept: "application/json"
    }
  });
};

export const gardenTypes = () => {
  return new Promise((resolve, reject) => {
    window.setTimeout(function() {
      // We fulfill the promise !
      resolve(GARDEN_TYPES);
    }, Math.random() * 2000 + 1000);
  });
};
