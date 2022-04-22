/* eslint-disable eqeqeq */
const JSON = '/data/photographers.json';

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
  // Penser à remplacer par les données récupérées dans le json
  // eslint-disable-next-line no-undef
  const photographersApi = new PhotographerApi(JSON);
  const photographer = await photographersApi.getPhotographer(id);

  // et bien retourner le tableau photographers seulement une fois
  return photographer;
}

async function getPhotographerMediasFromApi(id) {
  // Penser à remplacer par les données récupérées dans le json
  // eslint-disable-next-line no-undef
  const photographersApi = new PhotographerApi(JSON);
  const photographerMedias = await photographersApi.getPhotographerMedias(id);

  // et bien retourner le tableau photographers seulement une fois
  return photographerMedias;
}

async function displayHeader(photographer) {
  const photographersHeader = document.querySelector('.photograph_header');
  // eslint-disable-next-line no-undef
  const photographerModel = new PhotographerFactory(photographer);
  const userCardDOM = photographerModel.getUserPageDOM();
  photographersHeader.appendChild(userCardDOM);
}

async function displayContent(photographerMedias) {
  // eslint-disable-next-line no-undef
  const galleryModel = new GalleryFactory(photographerMedias);
  const galleryDOM = galleryModel.getGalleryDom();
  this.photographersContent.appendChild(galleryDOM);
}

async function displayData(photographer, photographerMedias) {
  displayHeader(photographer);
  displayContent(photographerMedias);
}

async function init() {
  // Récupère les datas des photographes
  this.photographersContent = document.querySelector('.photograph_content');
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  this.id = parseInt(urlParams.get('id'), 10);
  const photographer = await getPhotographerFromApi(this.id);
  this.photographerMedias = await getPhotographerMediasFromApi(this.id);
  this.photographerMedias.sort(popularitySorting);
  displayData(photographer, this.photographerMedias);
}

// eslint-disable-next-line no-unused-vars
function sortContent(select) {
  const sortType = select.value;
  console.log(sortType);
  if (sortType == 'popularity') {
    this.photographerMedias.sort(popularitySorting);
  } if (sortType == 'date') {
    this.photographerMedias.sort(dateSorting);
  } if (sortType == 'title') {
    this.photographerMedias.sort(titleSorting);
  } else {
    this.photographerMedias.sort(popularitySorting);
  }

  console.log(this.photographerMedias);
  console.log(this.photographersContent);
  console.log(this.photographersContent.querySelector('.gallery'));
  this.photographersContent.removeChild(this.photographersContent.querySelector('.gallery'));
  displayContent(this.photographerMedias);
}
init();
