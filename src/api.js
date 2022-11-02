const api_key =
  "live_NULR4xgEwG1yoyOfQIGORjJhDhgZIWlpY48OFEpecOWv5VNX0lifb9cjVg1BKCvI";
const user_id = "MichaelB33";

// Получаем котиков
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

// Отправляем фаворитов котов
export const serverSendCatFavorite = async (imageId) => {
  return fetch(`https://api.thecatapi.com/v1/favourites`, {
    method: "POST",
    body: JSON.stringify({
      image_id: imageId,
      sub_id: user_id,
    }),
    headers: {
      "x-api-key": api_key,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return { success: data, error: null };
    })
    .catch(function (error) {
      console.log(error);
      return { success: null, error: error };
    });
};

// Получаем фаворитов котов
export const serverGetCatsFavorites = async (count) => {
  return fetch(
    `https://api.thecatapi.com/v1/favourites?limit=${count}&sub_id=${user_id}&order=DESC`,
    {
      method: "GET",
      headers: {
        "x-api-key": api_key,
        "Content-Type": "application/json",
      },
    }
  )
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
