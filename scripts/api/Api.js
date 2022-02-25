// eslint-disable-next-line no-unused-vars
class Api {
  /**
     *
     * @param {string} url
     */
  constructor(url) {
    this.url = url;
  }

  async get() {
    return fetch(this.url)
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.log('an error occurs', err));
  }
}
