// eslint-disable-next-line no-unused-vars
class MediaFactory {
  constructor(data) {
    console.log(data);
    const {
      id, photographerId, title, image, likes, date, price, video,
    } = data;

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
      article.querySelector('img').setAttribute('alt', this.title);
    } else {
      article = this.templateModel.getMediaCardVidTemplate();
      article.querySelector('video').setAttribute('src', this.content);
      article.querySelector('video').setAttribute('alt', this.title);
    }
    article.querySelector('h3').textContent = this.name;
    article.querySelector('.title').textContent = `${this.city}, ${this.country}`;
    article.querySelector('.tagline').textContent = this.tagline;
    article.querySelector('.price').textContent = `${this.price}€/jour`;
    return (article);
  }
}