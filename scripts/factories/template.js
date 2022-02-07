function templateFactory(){


    function getUserCardTemplate(){
        var cardTemplate = document.createElement("article");
        cardTemplate.innerHTML =
        `<img>
        <h2>test</h2>
        <span class="location">test</span>
        <span class="tagline">test</span>
        <span class="price">test</span>`
        ;

        return (cardTemplate);
    }

    return {getUserCardTemplate};
}