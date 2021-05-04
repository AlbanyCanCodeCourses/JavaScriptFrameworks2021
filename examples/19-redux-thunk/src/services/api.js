import axios from "axios";

const send = (url, data = null, method = "POST") => {
  return axios(url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: data ? JSON.stringify(data) : null,
  }).then((response) => response.data);
};

export const fetchAllNomineesRequest = () => {
  return send("/api/nominees", null, "GET");
};

export const voteRequest = (categoryId, nomineeIndex) => {
  return send("/api/vote", { categoryId, nomineeIndex });
};
