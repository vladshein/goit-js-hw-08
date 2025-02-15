/*
Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.
*/

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryUl = document.querySelector(".gallery");
let fragment = document.createDocumentFragment();

for (const image of images) {
  const element = document.createElement("li");
  element.classList.add("gallery-item");

  const imageLi = document.createElement("img");

  imageLi.src = image.url;
  imageLi.alt = image.alt;

  element.append(imageLi);
  fragment.append(element);
}

galleryUl.appendChild(fragment);
console.log(galleryUl);
