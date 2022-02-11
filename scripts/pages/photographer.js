async function getPhotographerFromApi(id) {
  // Penser à remplacer par les données récupérées dans le json
  const photographersApi = new PhotographerApi('/data/photographers.json');
  const photographer = await photographersApi.getPhotographer(id);

  // et bien retourner le tableau photographers seulement une fois
  return (photographer);
}

async function displayData(photographer) {
  const photographersSection = document.querySelector('.photographer_section');

  photographer.forEach((photographer) => {
    const photographerModel = new PhotographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');
  const photographer = await getPhotographerFromApi(id);
  displayData(photographer);
}

init();
