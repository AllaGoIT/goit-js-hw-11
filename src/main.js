import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";
import { fetchPhotosCats } from "./js/pixabay-api.js";
import { createGalleryList } from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formEl = document.querySelector(".form");
formEl.addEventListener("submit", onSubmit);
const loadEl = document.querySelector(".loader");
const galEl = document.querySelector("ul.gallery");

const lightbox = new SimpleLightbox('.gallery a', {
    captionPosition: 'bottom',
    captionDelay: 250,
    captionsData: 'alt',
});

function onSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements[0].value.trim();
  event.target.reset();
  loadEl.style.visibility = "visible";
  loadEl.style.pointerEvents = "all";
  
  if (searchQuery) {
    fetchPhotosCats(searchQuery);
  
};
  const galEl = document.querySelector("ul.gallery");
  galEl.innerHTML = "";
  lightbox.refresh();
  }
 