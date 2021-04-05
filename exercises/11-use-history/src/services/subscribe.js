/**
 * Mocking an AJAX request
 * @param {string} email
 */
export const subscribe = (email) => {
  return Promise.resolve({
    data: {
      message: "Success!",
    },
  });
};
