class PhotographerApi extends Api {
  /**
     *
     * @param {string} url
     */
  constructor(url) {
    super(url);
  }

  async getPhotographers() {
    const result = await this.get();
    return await result.photographers;
  }

  async getPhotographer(id) {
    const result = await this.getPhotographers();
    const photographer = result.find((element) => element.id === id);
    console.log(photographer);
    return photographer;
  }
}
