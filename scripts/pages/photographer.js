/* eslint-disable eqeqeq */
const JSON = './data/photographers.json';

function popularitySorting(mediaA, mediaB) {
  return mediaA.likes - mediaB.likes;
}

function dateSorting(mediaA, mediaB) {
  const dateA = Date.parse(mediaA.date);
  const dateB = Date.parse(mediaB.date);
  return dateA - dateB;
}

function titleSorting(mediaA, mediaB) {
  return mediaA.title.localeCompare(mediaB.title);
}

async function getPhotographerFromApi(id) {
  // eslint-disable-next-line no-undef
  const photographersApi = new PhotographerApi(JSON);
  const photographer = await photographersApi.getPhotographer(id);

  // et bien retourner le tableau photographers seulement une fois
  return photographer;
}

async function getPhotographerMediasFromApi(id) {
  // eslint-disable-next-line no-undef
  const photographersApi = new PhotographerApi(JSON);
  const photographerMedias = await photographersApi.getPhotographerMedias(id);

  // et bien retourner le tableau photographers seulement une fois
  return photographerMedias;
}

async function setTotalLike() {
  this.totalLike = 0;
  this.photographerMedias.forEach((element) => {
    this.totalLike += element.likes;
  });
}

async function displayHeader() {
  const photographersHeader = document.querySelector('.photograph_header');
  // eslint-disable-next-line no-undef
  const photographerModel = new PhotographerFactory(this.photographer);
  const userCardDOM = photographerModel.getUserPageDOM();
  photographersHeader.appendChild(userCardDOM);
  // eslint-disable-next-line no-undef
}

async function displayContent() {
  // eslint-disable-next-line no-undef
  const galleryModel = new GalleryFactory(this.photographerMedias);
  const galleryDOM = galleryModel.getGalleryDom();
  this.photographersContent.appendChild(galleryDOM);
}

async function displayTotalLike() {
  document.querySelector('#total_like').innerHTML = this.totalLike;
}

async function displayPrice() {
  document.querySelector('#price').innerHTML = this.photographer.price;
}

async function displayData() {
  displayHeader();
  displayContent();
  displayTotalLike();
  displayPrice();
}

async function like(element) {
  const likeSpan = element.parentNode.querySelector('span');
  if (element.classList.contains('liked')) {
    element.classList.remove('liked');
    likeSpan.innerHTML = parseInt(likeSpan.innerHTML, 10) - 1;
    this.totalLike -= 1;
  } else {
    element.classList.add('liked');
    likeSpan.innerHTML = parseInt(likeSpan.innerHTML, 10) + 1;
    this.totalLike += 1;
  }
  displayTotalLike();
}

async function init() {
  // Récupère les datas des photographes
  this.photographersContent = document.querySelector('.photograph_content');
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = parseInt(urlParams.get('id'), 10);
  this.photographer = await getPhotographerFromApi(id);
  this.photographerMedias = await getPhotographerMediasFromApi(id);
  this.photographerMedias.sort(popularitySorting);

  setTotalLike();
  displayData();

  document.querySelectorAll('article i').forEach((element) => {
    element.addEventListener('click', function () {
      like(this);
    });
  });

  document.querySelectorAll('.logo').forEach((element) => {
    element.addEventListener('click', () => {
      document.location.href = './index.html';
    });
  });

  // eslint-disable-next-line no-undef
  this.contactForm = new ContactForm(id);
}

// eslint-disable-next-line no-unused-vars
function sortContent(select) {
  const sortType = select.value;
  if (sortType == 'popularity') {
    this.photographerMedias = this.photographerMedias.sort(popularitySorting);
  } else if (sortType == 'date') {
    this.photographerMedias = this.photographerMedias.sort(dateSorting);
  } else if (sortType == 'title') {
    this.photographerMedias = this.photographerMedias.sort(titleSorting);
  } else {
    this.photographerMedias = this.photographerMedias.sort(popularitySorting);
  }

  this.photographersContent.querySelector('.gallery').remove();
  displayContent();
}
init();
