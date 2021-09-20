import refs from "./refs.js";
const { modal, closeModalBtn } = refs;

export function closeModal() {
  closeModalBtn.addEventListener("click", closeByClick);
  window.addEventListener("keydown", closeByEsc);
  modal.addEventListener("click", closeByWrapper);
}

export function closeByClick() {
  modal.classList.remove("is-open");
  refresh();
}

export function closeByEsc(e) {
  console.log(`Escape`);
  if (e.code === "Escape") {
    modal.classList.remove("is-open");
  }
  refresh();
}

export function closeByWrapper(e) {
  if (!e.target.classList.contains("lightbox__image")) {
    modal.classList.remove("is-open");
    refresh();
  }
}

export function refresh(btn) {
  closeModalBtn.removeEventListener("click", closeByClick);
  window.removeEventListener("keydown", closeByEsc);
  modal.removeEventListener("click", closeByWrapper);
}
