class IndexPage {
  constructor() {
    this.JSON = './data/photographers.json';
    this.photographersSection = document.querySelector('.photographer_section');

    document.querySelectorAll('.logo').forEach((element) => {
      element.addEventListener('click', () => {
        document.location.href = './index.html';
      });
    });

    this.pageWorkflow();
  }

  async pageWorkflow() {
    // Récupère les datas des photographes
    const photographers = await this.getPhotographersFromApi();
    this.displayData(photographers);
  }

  async getPhotographersFromApi() {
    // Penser à remplacer par les données récupérées dans le json
    // eslint-disable-next-line no-undef
    const photographersApi = new PhotographerApi(this.JSON);
    const photographers = await photographersApi.getPhotographers();
    // et bien retourner le tableau photographers seulement une fois
    return (photographers);
  }

  async displayData(photographers) {
    photographers.forEach((photographer) => {
      // eslint-disable-next-line no-undef
      const photographerModel = new PhotographerFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      this.photographersSection.appendChild(userCardDOM);
    });
  }
}

// eslint-disable-next-line no-unused-vars
const indexPage = new IndexPage();
