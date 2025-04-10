//Декларація змінних
const galleryItem = document.querySelector(".gallery");
const lightBox = document.querySelector(".lightbox");
const closeButton = document.querySelector(".lightbox__button");
const outputImage = document.querySelector(".lightbox__image");

// Відкриття вікна
galleryItem.addEventListener("click", (event) => {
  lightBox.classList.add("is-open");
  outputImage.src = event.target.alt
});

// Закрити вікно методом натискання кнопки
closeButton.addEventListener("click", () => {
  lightBox.classList.remove("is-open");
  console.log("cosed!");
});

// Закрити вікно методом наискання на сіре поле
lightBox.addEventListener("click", () => {
  lightBox.classList.remove("is-open");
});

// Закрити вікно методом натискання кнопки ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    lightBox.classList.remove("is-open");
   }
});