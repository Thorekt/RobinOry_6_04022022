// eslint-disable-next-line no-unused-vars
class TemplateFactory {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  // eslint-disable-next-line class-methods-use-this
  getUserCardTemplate() {
    const template = document.createElement('article');
    template.innerHTML = `<img>
        <h2>N/A</h2>
        <span class="location">N/A</span>
        <span class="tagline">N/A</span>
        <span class="price">N/A</span>`;
    return (template);
  }

  // eslint-disable-next-line class-methods-use-this
  getUserPageTemplate() {
    const template = document.createElement('div');
    template.innerHTML = `<img>    
      <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
      <div class="info">
        <h2>N/A</h2>
        <span class="location">N/A</span>
        <span class="tagline">N/A</span>
      </div>`;
    return (template);
  }

  // eslint-disable-next-line class-methods-use-this
  getMediaCardImgTemplate() {
    const template = document.createElement('article');
    template.innerHTML = `<img class="content">
        <h3>N/A</h3>
        <span class="title">N/A</span>
        <span class="tagline">N/A</span>
        <span class="price">N/A</span>`;
    return (template);
  }

  // eslint-disable-next-line class-methods-use-this
  getMediaCardVidTemplate() {
    const template = document.createElement('article');
    template.innerHTML = `<video class="content" type="video/mp4">
        <h3>N/A</h3>
        <span class="title">N/A</span>
        <span class="tagline">N/A</span>
        <span class="price">N/A</span>`;
    return (template);
  }

  // eslint-disable-next-line class-methods-use-this
  getGalleryTemplate() {
    const template = document.createElement('div');
    template.innerHTML = `<button></button>
    <div class="gallery"></div>
    `;
    return (template);
  }
}
