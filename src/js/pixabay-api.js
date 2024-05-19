import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";
import {createGalleryList} from "./render-functions.js";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = '43918725-f2c9edad28ee6306c974c89a7';

 

export const fetchPhotosCats = (query = "cat") => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: 'horizontal',
    safesearch: "true"
  });
  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error((
        iziToast.show({
          position: 'topCenter',
          message: "Sorry, there are no images matching your search query. Please try again!",
          color: 'red',
          close: true,
        })
      ));
    }
    return response.json();

  })
    .then(json => {
      console.log(json);
      if (json.total === 0) {
        throw new Error((
          iziToast.show({
            position: 'topCenter',
            message: "Sorry, there are no images matching your search query. Please try again!",
            color: 'red',
            close: true,
          })
        ));
      }
      createGalleryList(json);
    })
    .catch(error => {
      console.log(error);
    });
};

  // key — твій унікальний ключ доступу до API.
// q — слово для пошуку. Те, що буде вводити користувач.
// image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
// orientation — орієнтація фотографії. Постав значення horizontal.
// safesearch — фільтр за віком. Постав значення true.
// const searchQuery = 'cats';
// const params = `?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation"horizontal&safesearch=true"`;

// const options = {
//   headers: {
//     API_KEY: '43918725-f2c9edad28ee6306c974c89a7',
//   },
// };