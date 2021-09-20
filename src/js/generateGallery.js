// ВСЕ ИМПОРТЫ
import photoArray from "../db/photo.js";
// import createItemByString from "./createItemByString.js";
import createItemAsElement from "./createItemAsElement.js";
// ВСЕ ДОСТУПЫ
import refs from "./refs.js";
const { list, modal, modalImg } = refs;
// console.log(modal, overlay, modalContent, modalImg, closeModalBtn);
import { closeModal } from "./closeModal.js";
// ВСЕ ФУНКЦИИ

function slider() {}

// ВСЕ СЛУШАТЕЛИ
list.addEventListener("click", (e) => {
  if (e.target.nodeName === "IMG") {
    modal.classList.add("is-open");
    modalImg.src = e.target.src;
  }
  closeModal();
});

const result = photoArray.map((photoObject) => {
  //   console.log(photoObject);
  //   деструктуризация итерируемого объекта перед вызовом функции создания разметки
  const {
    title: mainTitle,
    image,
    description,
    category,
    seria,
    author: { name, country, city },
  } = photoObject;

  //   вызов функции создания разметки
  //   const item = createItemByString(
  //     mainTitle,
  //     image,
  //     description,
  //     category,
  //     seria,
  //     name,
  //     country,
  //     city,
  //   );
  const item = createItemAsElement(
    mainTitle,
    image,
    description,
    category,
    seria,
    name,
    country,
    city,
  );
  //   console.log(item);
  return item;
});

// ЧЕРЕЗ ``
// const addRersultByString = result.join("");
// list.insertAdjacentHTML("beforeend", addRersultByString);

// ЧЕРЕЗ createElement
list.append(...result);
