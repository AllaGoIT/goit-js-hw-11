

const galEl = document.querySelector("ul.gallery");
const fragment = document.createDocumentFragment();

export const createGalleryList = json => {
    
    json.hits.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("gallery-item");

        const a = document.createElement("a");
        a.classList.add("gallery-link");
        a.href = item.largeImageURL;

        const img = document.createElement("img");
        img.classList.add("gallery-image");
        img.src = item.webformatURL;
        img.alt = item.tags;
     
        const h1 = document.createElement("h1");
        h1.classList.add("gallery-text1");
        h1.href = item.likes;
       
        const h2 = document.createElement("h2");
        h2.classList.add("gallery-text2");
        h2.href = item.views;

          const h3 = document.createElement("h3");
        h3.classList.add("gallery-text3");
        h3.href = item.comments;

        const h4 = document.createElement("h4");
        h4.classList.add("gallery-text4");
        h4.href = item.downloads;


        li.appendChild(a);
        a.appendChild(img);
        img.appendChild(h1, h2, h3, h4);

        fragment.appendChild(li);
    });
    galEl.appendChild(fragment);
  

    const loadEl = document.querySelector(".loader");
    loadEl.style.visibility = "hidden";
    loadEl.style.pointerEvents = "none";
      
    localStorage.removeItem("feedback-form-state");
    galEl.reset();
    gallery.innerHTML = "";
    lightbox.refresh();


}

// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень

//  return json
//     .map(
//       ({ webformatURL,largeImageURL,tags,likes,views,comments,downloads }) => 
//     <div class="gallery">
//     <a href="${webformatURL}"><img src="${largeImageURL}" alt="${tags}" title="${comments}"/></a>
// </div>
//     )
// .join('');