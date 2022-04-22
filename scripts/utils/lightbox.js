this.lightboxModal = document.querySelector("#lightbox_modal");

function setMedia() {

}

// eslint-disable-next-line no-unused-vars
function displayLightboxModal(media) {
  this.lightboxModal.style.display = "block";
  console.log(media);
  console.log(media.image);

  this.currentIndex = this.photographerMedias.indexOf(
    this.photographerMedias.find((element) => element.id === media.id),
  );
  if (typeof media.image !== "undefined") {
    this.lightboxModal.querySelector(".lightbox_img").src = media.content;
    this.lightboxModal.querySelector(".lightbox_vid").src = null;
  } else if (typeof media.video !== "undefined") {
    this.lightboxModal.querySelector(".lightbox_vid").src = media.content;
    this.lightboxModal.querySelector(".lightbox_img").src = null;
  }
}

// close modal form
// eslint-disable-next-line no-unused-vars
function closeLightboxModal() {
  this.lightboxModal.style.display = "none";
}

function nextMedia() {
  this.currentIndex += 1;
  setMedia();
}

function previousMedia() {
  this.currentIndex -= 1;
  setMedia();
}
