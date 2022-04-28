// eslint-disable-next-line no-unused-vars
class GalleryFactory {
  constructor(data) {
    this.medias = this.fillMedias(data);
    // eslint-disable-next-line no-undef
    this.templateModel = new TemplateFactory();
  }

  // eslint-disable-next-line class-methods-use-this
  fillMedias(data) {
    const medias = [];
    data.forEach((element) => {
      // eslint-disable-next-line no-undef
      const media = new MediaFactory(element);
      medias.push(media);
    });
    return medias;
  }

  // eslint-disable-next-line class-methods-use-this
  getGalleryDom() {
    const section = this.templateModel.getGalleryTemplate();
    this.medias.forEach((media) => {
      section.appendChild(media.getMediaCardDOM());
    });
    return section;
  }
}
