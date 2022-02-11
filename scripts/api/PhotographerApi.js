class PhotographerApi extends Api {
  /**
     *
     * @param {string} url
     */
  constructor(url) {
    super(url);
  }

  async getPhotographers() {
    return await this.get();
  }
}
