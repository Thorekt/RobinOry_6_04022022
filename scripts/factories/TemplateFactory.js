class TemplateFactory {
  constructor() {
  }

  getUserCardTemplate() {
    const template = document.createElement('article');
    template.innerHTML = `<img>
        <h2>test</h2>
        <span class="location">test</span>
        <span class="tagline">test</span>
        <span class="price">test</span>`;
    return (template);
  }

  getUserPageTemplate() {
    const template = document.createElement('section');
    template.innerHTML = `<img>
        <h2>test</h2>
        <span class="location">test</span>
        <span class="tagline">test</span>
        <span class="price">test</span>`;
    return (template);
  }
}
