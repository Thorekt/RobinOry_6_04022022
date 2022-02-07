function photographerFactory(data) {
  const { name, portrait } = data;
  const templateModel = templateFactory();

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = templateModel.getUserCardTemplate();
    article.querySelector('img').setAttribute('src', picture);
    article.querySelector('h2').textContent = name;
    article.querySelector('.location').textContent = name;
    article.querySelector('.tagline').textContent = name;
    article.querySelector('.price').textContent = name;
    return (article);
  }

  function getUserPageDOM(){
    
  }

  return { name, picture, getUserCardDOM };
}
