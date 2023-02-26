
import { galleryItems } from './gallery-items.js';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGallery(items) {
    return items
        .map(
            (item) => `<a class="gallery__item" href="${item.original}">
                          <img
                            class="gallery__image"
                            src="${item.preview}"
                            alt="${item.description}"
                          />
                       </a>`
        )
        .join("");
}

gallery.innerHTML = createGallery(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250});