class PhotographerFactory {
  constructor(data) {
    const { name, portrait } = data;
    this.name = name;
    this.portrait = portrait;
    this.templateModel = new TemplateFactory();

    this.picture = `assets/photographers/${portrait}`;
  }

  getUserCardDOM() {
    const article = this.templateModel.getUserCardTemplate();
    article.querySelector('img').setAttribute('src', this.picture);
    article.querySelector('h2').textContent = this.name;
    article.querySelector('.location').textContent = this.name;
    article.querySelector('.tagline').textContent = this.name;
    article.querySelector('.price').textContent = this.name;
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
