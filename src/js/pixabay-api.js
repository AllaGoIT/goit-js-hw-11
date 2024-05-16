
const BASE_URL = "https://pixabay.com/api/";
const API_KEY = '43918725';
const searchQuery = 'cars';
const params = `?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation"horizontal&safesearch=true"`;

const formEl = document.querySelector(".form");
formEl.addEventListener("submit", onSubmit);

const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", onClick);

function onSubmit(event) {
    event.preventDefault();
fetch(`${BASE_URL}${params}`);
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.value === "") {
        onSubmit();
    }
    else {
        return;
    }
}

function fetchCars(carsId) {
  return fetch(`${BASE_URL}cars/${carsId}`).then(response => {
    if (!response.ok) {
      throw new Error(
          iziToast.show({
      position: 'topCenter',
      message: ` Sorry, there are no images matching your search query. Please try again!`,
      backgroundColor: 'red',
      backgroundColor: "opacity = 0,5",
      messageColor: 'black',
      close: false,
    })
      );
    }
      return response.json();
  });
}
  then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

  // key — твій унікальний ключ доступу до API.
// q — слово для пошуку. Те, що буде вводити користувач.
// image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
// orientation — орієнтація фотографії. Постав значення horizontal.
// safesearch — фільтр за віком. Постав значення true.