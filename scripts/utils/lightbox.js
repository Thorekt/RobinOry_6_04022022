function setMedia() {
  const media = this.photographerMedias.at(this.currentIndex);
  const src = `assets/photographers/${media.photographerId}/`;
  if (typeof media.image !== 'undefined') {
    this.lightbox_img.src = src + media.image;
    this.lightbox_img.alt = media.title;
    this.lightbox_img.style.display = '';
    this.lightbox_vid.src = null;
    this.lightbox_vid.style.display = 'none';
  } else if (typeof media.video !== 'undefined') {
    this.lightbox_vid.src = src + media.video;
    this.lightbox_vid.alt = media.title;
    this.lightbox_vid.style.display = '';
    this.lightbox_img.src = null;
    this.lightbox_img.style.display = 'none';
  }
}

// eslint-disable-next-line no-unused-vars
function displayLightboxModal(idMedia) {
  this.lightboxModal.style.display = 'block';
  this.currentIndex = this.photographerMedias.indexOf(
    this.photographerMedias.find((element) => element.id === idMedia),
  );
  setMedia();
}

// close modal form
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

  document.addEventListener('keydown', (key) => {
    console.log(key);
    if (key.code === 'ArrowLeft') {
      previousMedia();
    }
  });

  this.lightboxModal.querySelectorAll('.nextMedia').forEach(
    (element) => element.addEventListener('click', () => nextMedia()),
  );

  document.addEventListener('keydown', (key) => {
    console.log(key);
    if (key.code === 'ArrowRight') {
      nextMedia();
    }
  });

  this.lightboxModal.querySelectorAll('.modal_close').forEach(
    (element) => element.addEventListener('click', () => closeLightboxModal()),
  );

  document.addEventListener('keydown', (key) => {
    console.log(key);
    if (key.code === 'Escape') {
      closeLightboxModal();
    }
  });
}

initLightbox();
