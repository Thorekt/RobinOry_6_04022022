class PhotographerFactory {
  constructor(data) {
    const {
      name, id, city, country, tagline, price, portrait,
    } = data;
    this.name = name;
    this.id = id;
    this.city = city;
    this.country = country;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;

    this.templateModel = new TemplateFactory();

    this.picture = `assets/photographers/${portrait}`;
  }

  getUserCardDOM() {
    const article = this.templateModel.getUserCardTemplate();
    article.querySelector('img').setAttribute('src', this.picture);
    article.querySelector('h2').textContent = this.name;
    article.querySelector('.location').textContent = `${this.city}, ${this.country}`;
    article.querySelector('.tagline').textContent = this.tagline;
    article.querySelector('.price').textContent = `${this.price}€/jour`;
    return (article);
  }

  getUserPageDOM() {
    const section = this.templateModel.getUserPageTemplate();
    section.querySelector('h2').textContent = this.name;
    section.querySelector('.location').textContent = this.name;
    section.querySelector('.tagline').textContent = this.name;
    return section;
  }
}
