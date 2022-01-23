import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryElementMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', onGalleryImageClick);

function onGalleryImageClick(e) {
  const imgSource = e.target.dataset.source;
  openModal(imgSource);
}

function createGalleryElementMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" onclick="event.preventDefault()" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          
        />
      </a>
    </div>`;
    })
    .join('');
}

function openModal(ClickImg) {
  const modal = basicLightbox.create(
    `
		<img width="1400" height="900" src="${ClickImg}">
	`,
  );

  modal.show();

  document.addEventListener('keydown', exitKey);
  function exitKey(e) {
    //  ------ show pressed key ------
    // console.log(e.key);
    if (e.key === 'Escape') {
      modal.close();
      document.removeEventListener('keydown', exitKey);
    }
  }
}
