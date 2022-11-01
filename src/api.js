const api_key =
  "live_NULR4xgEwG1yoyOfQIGORjJhDhgZIWlpY48OFEpecOWv5VNX0lifb9cjVg1BKCvI";

export const serverGetCats = async (count) => {
  return fetch(`https://api.thecatapi.com/v1/images/search?limit=${count}`, {
    method: "GET",
    headers: {
      "x-api-key": api_key,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return { success: data, error: null };
    })
    .catch(function (error) {
      console.log(error);
      return { success: null, error: error };
    });
};
