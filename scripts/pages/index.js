const JSON = '/data/photographers.json';

async function getPhotographersFromApi() {
  // Penser à remplacer par les données récupérées dans le json
  // eslint-disable-next-line no-undef
  const photographersApi = new PhotographerApi(JSON);
  const photographers = await photographersApi.getPhotographers();
  // et bien retourner le tableau photographers seulement une fois
  return (photographers);
}

async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = new PhotographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographersFromApi();
  console.log(photographers);
  displayData(photographers);
}

init();
