/**
 * Save selected garden type in local storage.
 * @param {Object} type
 */
export const saveType = type => {
  localStorage.setItem("type", type);
};

/**
 * Read selected garden type in local storage.
 * @return {Object}
 */
export const readType = () => {
  return JSON.parse(localStorage.getItem("type"));
};

/**
 * Save selected crops in local storage.
 * @param {array} crops
 */
export const saveCrops = crops => {
  localStorage.setItem("crops", crops);
};
/**
 * Read selected crops from local storage.
 * @return {array
 */
export const readCrops = () => {
  return JSON.parse(localStorage.getItem("crops"));
};
