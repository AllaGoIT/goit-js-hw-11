

const galEl = document.querySelector("ul.gallery");
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const lightbox = new SimpleLightbox('.gallery a', {
    captionPosition: 'bottom',
    captionDelay: 250,
    captionsData: 'alt',
});

export const createGalleryList = images => {

    const markUp = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
     <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
        />
        <div class= "text-list">
          <p>Likes:${likes}</p> 
          <p>Views:${views}</p>
          <p>Comments:${comments}</p>
         <p>Downloads:${downloads}</p>
        </div>
      </a>
    </li>
    `).join("");

    galEl.insertAdjacentHTML("beforeend", markUp);
    lightbox.refresh();
    
   
    const loadEl = document.querySelector(".loader");
    loadEl.style.visibility = "hidden";
    loadEl.style.pointerEvents = "none";
}

    
