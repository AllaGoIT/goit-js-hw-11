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
} 
