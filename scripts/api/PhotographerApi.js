// eslint-disable-next-line no-unused-vars, no-undef
class PhotographerApi extends Api {
  /**
     *
     * @param {string} url
     */
  // eslint-disable-next-line no-useless-constructor
  constructor(url) {
    super(url);
  }

  async getPhotographers() {
    const result = await this.get();
    const photographers = await result.photographers;
    return photographers;
  }

  async getPhotographer(id) {
    const result = await this.getPhotographers();
    const photographer = result.find((element) => element.id === id);
    return photographer;
  }

  async getMedias() {
    const result = await this.get();
    const medias = await result.media;
    return medias;
  }

  async getPhotographerMedias(photographerId) {
    const result = await this.getMedias();
    const medias = result.filter((element) => element.photographerId === photographerId);
    return medias;
  }

}
