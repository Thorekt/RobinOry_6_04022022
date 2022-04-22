function setMedia() {
  const media = this.photographerMedias.at(this.currentIndex);
  const src = `assets/photographers/${media.photographerId}/`;
  console.log(media);
  if (typeof media.image !== 'undefined') {
    this.lightbox_img.src = src + media.image;
    this.lightbox_vid.src = null;
  } else if (typeof media.video !== 'undefined') {
    this.lightbox_vid.src = src + media.video;
    this.lightbox_img.src = null;
  }
}

// eslint-disable-next-line no-unused-vars
function displayLightboxModal(idMedia) {
  this.lightboxModal.style.display = 'block';
  console.log(idMedia);

  this.currentIndex = this.photographerMedias.indexOf(
    this.photographerMedias.find((element) => element.id === idMedia),
  );
  setMedia();
}

// close modal form
// eslint-disable-next-line no-unused-vars
function closeLightboxModal() {
  this.lightboxModal.style.display = 'none';
}

function nextMedia() {
  this.currentIndex += 1;
  if (this.currentIndex >= this.photographerMedias.length) {
    this.currentIndex = 0;
  }
  setMedia();
}

function previousMedia() {
  this.currentIndex -= 1;
  if (this.currentIndex < 0) {
    this.currentIndex = this.photographerMedias.length - 1;
  }
  setMedia();
}

function initLightbox() {
  this.lightboxModal = document.querySelector('#lightbox_modal');
  this.lightbox_img = this.lightboxModal.querySelector('.lightbox_img');
  this.lightbox_vid = this.lightboxModal.querySelector('.lightbox_vid');

  this.lightboxModal.querySelectorAll('.previousMedia').forEach(
    (element) => element.addEventListener('click', () =>previousMedia()),
  );

  this.lightboxModal.querySelectorAll('.nextMedia').forEach(
    (element) => element.addEventListener('click', () => nextMedia()),
  );
}

initLightbox();
