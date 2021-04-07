/**
 * Function to refresh token
 */
let refreshCountdown;

/**
 * Starts a countdown until we need to refresh the token
 * @param {number} expiry time when we need to refresh the token
 * @param {function} callback function that will refresh the token
 */
export const createCountdown = (expiry, callback) => {
  const BUFFER = 5000; // 5 seconds
  const date = new Date();
  const currentTimestamp = date.getTime();
  const countdownTime = expiry - currentTimestamp - BUFFER;

  refreshCountdown = window.setTimeout(callback, countdownTime);
};

/**
 * Clears countdown timer so there aren't any errors
 */
export const clearCountdown = () => {
  if (refreshCountdown) clearTimeout(refreshCountdown);
};
