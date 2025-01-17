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
    return template;
  }

  // eslint-disable-next-line class-methods-use-this
  getUserPageTemplate() {
    const template = document.createElement('div');
    template.innerHTML = `<div class="info">
                            <h1>N/A</h1>
                            <span class="location">N/A</span>
                            <span class="tagline">N/A</span>
                          </div>          
                          <button role="Contact Me" class="contact_button">Contactez-moi</button>
                          <img>`;
    return template;
  }

  // eslint-disable-next-line class-methods-use-this
  getMediaCardImgTemplate() {
    const template = document.createElement('article');
    template.innerHTML = `<img class="content">
                          <div class="description">
                            <h2>N/A</h2>        
                            <div>
                              <span class="likes">N/A</span>
                              <em class="fas fa-solid fa-heart" role="figure" aria-label="likes" aria-hidden="false"></em>
                            </div>
                          </div>`;
    return template;
  }

  // eslint-disable-next-line class-methods-use-this
  getMediaCardVidTemplate() {
    const template = document.createElement('article');
    template.innerHTML = `<video class="content" type="video/mp4"></video>        
                          <div class="description">
                            <h2>N/A</h2>        
                            <div>
                              <span class="likes">N/A</span>
                              <em class="fas fa-solid fa-heart" role="figure" aria-label="likes" aria-hidden="false"></em>
                            </div>
                          </div>`;
    return template;
  }

  // eslint-disable-next-line class-methods-use-this
  getGalleryTemplate() {
    const template = document.createElement('div');
    template.className = 'gallery';
    return template;
  }
}
