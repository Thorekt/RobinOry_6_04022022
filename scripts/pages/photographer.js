const JSON = '/data/photographers.json';

async function getPhotographerFromApi(id) {
  // Penser à remplacer par les données récupérées dans le json
  // eslint-disable-next-line no-undef
  const photographersApi = new PhotographerApi(JSON);
  const photographer = await photographersApi.getPhotographer(id);

  // et bien retourner le tableau photographers seulement une fois
  return (photographer);
}

async function getPhotographerMediasFromApi(id) {
  // Penser à remplacer par les données récupérées dans le json
  // eslint-disable-next-line no-undef
  const photographersApi = new PhotographerApi(JSON);
  const photographerMedias = await photographersApi.getPhotographerMedias(id);

  // et bien retourner le tableau photographers seulement une fois
  return (photographerMedias);
}

async function displayHeader(photographer) {
  const photographersHeader = document.querySelector('.photograph_header');
  // eslint-disable-next-line no-undef
  const photographerModel = new PhotographerFactory(photographer);
  const userCardDOM = photographerModel.getUserPageDOM();
  photographersHeader.appendChild(userCardDOM);
}

async function displayContent(photographerMedias) {
  const photographersContent = document.querySelector('.photograph_content');
  // eslint-disable-next-line no-undef
  const galleryModel = new GalleryFactory(photographerMedias);
  const galleryDOM = galleryModel.getGalleryDom();
  photographersContent.appendChild(galleryDOM);
}

async function displayData(photographer, photographerMedias) {
  displayHeader(photographer);
  displayContent(photographerMedias);
}

async function init() {
  // Récupère les datas des photographes
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = parseInt(urlParams.get('id'), 10);
  const photographer = await getPhotographerFromApi(id);
  const photographerMedias = await getPhotographerMediasFromApi(id);
  displayData(photographer, photographerMedias);
}

init();
