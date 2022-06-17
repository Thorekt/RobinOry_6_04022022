// eslint-disable-next-line no-unused-vars
class MediaFactory {
  constructor(data) {
    // eslint-disable-next-line object-curly-newline
    const { id, photographerId, title, image, likes, date, price, video } = data;

    this.id = id;
    this.photographerId = photographerId;
    this.title = title;
    if (typeof image !== 'undefined') {
      this.image = image;
      this.content = `assets/photographers/${this.photographerId}/${this.image}`;
    } else {
      this.video = video;
      this.content = `assets/photographers/${this.photographerId}/${this.video}`;
    }
    this.likes = likes;
    this.date = date;
    this.price = price;
    // eslint-disable-next-line no-undef
    this.templateModel = new TemplateFactory();
  }

  getMediaCardDOM() {
    let article;
    if (typeof this.image !== 'undefined') {
      article = this.templateModel.getMediaCardImgTemplate();
      article.querySelector('img').setAttribute('src', this.content);
      article.querySelector('img').setAttribute('alt', `${this.title}, closeup view`);
      article.querySelector('img').addEventListener('click', () => {
        displayLightboxModal(this.id);
      });
    } else {
      article = this.templateModel.getMediaCardVidTemplate();
      article.querySelector('video').setAttribute('src', this.content);
      article.querySelector('video').setAttribute('alt', `${this.title}, closeup view`);
      article.querySelector('video').addEventListener('click', () => {
        displayLightboxModal(this.id);
      });
    }
    article.setAttribute('tabindex', '0');
    document.addEventListener('keydown', (key) => {
      if ((key.code === 'Space' || key.code === 'Enter') && document.activeElement === article) {
        displayLightboxModal(this.id);
      }
    });

    article.querySelector('h2').textContent = this.title;
    article.querySelector('.likes').textContent = this.likes;
    return article;
  }
}
