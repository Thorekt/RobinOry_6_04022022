// eslint-disable-next-line no-unused-vars
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
    // eslint-disable-next-line no-undef
    this.templateModel = new TemplateFactory();
    this.picture = `assets/photographers/${portrait}`;
  }

  getUserCardDOM() {
    const article = this.templateModel.getUserCardTemplate();
    article.setAttribute('onclick', `window.location.href = "photographer.html?id=${this.id}"`);
    article.querySelector('img').setAttribute('src', this.picture);
    article.querySelector('img').setAttribute('alt', this.name);
    article.querySelector('h2').textContent = this.name;
    article.querySelector('.location').textContent = `${this.city}, ${this.country}`;
    article.querySelector('.tagline').textContent = this.tagline;
    article.querySelector('.price').textContent = `${this.price}€/jour`;
    article.setAttribute('role', 'link');
    article.setAttribute('tabindex', '0');
    article.addEventListener('click', () => {
      document.location.href = 'photographer.html?id='.concat(this.id);
    });

    document.addEventListener('keydown', (key) => {
      if ((key.code === 'Space' || key.code === 'Enter') && document.activeElement === article) {
        document.location.href = 'photographer.html?id='.concat(this.id);
      }
    });
    return (article);
  }

  getUserPageDOM() {
    const section = this.templateModel.getUserPageTemplate();
    section.querySelector('img').setAttribute('src', this.picture);
    section.querySelector('img').setAttribute('alt', this.name);
    section.querySelector('h1').textContent = this.name;
    section.querySelector('.location').textContent = `${this.city}, ${this.country}`;
    section.querySelector('.tagline').textContent = this.tagline;
    return section;
  }
}
