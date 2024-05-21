import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";
import { fetchPhotosCats } from "./js/pixabay-api.js";
import { createGalleryList } from "./js/render-functions.js";


const formEl = document.querySelector(".form");
formEl.addEventListener("submit", onSubmit);
const loadEl = document.querySelector(".loader");
const galEl = document.querySelector("ul.gallery");



function onSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements[0].value.trim();
  event.target.reset();
  loadEl.style.visibility = "visible";
  loadEl.style.pointerEvents = "all";
  
  if (searchQuery) {
    fetchPhotosCats(searchQuery).then(json => {
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
      createGalleryList(json.hits);
    })
    .catch(error => {
      console.log(error);
    });
      };
};

 