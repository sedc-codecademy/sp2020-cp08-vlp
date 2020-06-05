let cards = [];
let cardContainer = document.querySelector('.row');

console.log(cards, cardContainer)

class CardStats {
    constructor(title, link, info, picture){
        this.title = title;
        this.link = link;
        this.info = info;
        this.picture = picture;
    }
}

cards.push( new CardStats(`Card Title`, `This is a link`, `Here is some more information about this product that is only revealed once clicked on.`, `images/numbersGlobe1.png`));

cards.push( new CardStats(`Card Title`, `This is a link`, `Here is some more information about this product that is only revealed once clicked on.`, `images/numbersGlobe1.png`));
cards.push( new CardStats(`Card Title`, `This is a link`, `Here is some more information about this product that is only revealed once clicked on.`, `images/numbersGlobe1.png`));
cards.push( new CardStats(`Card Title`, `This is a link`, `Here is some more information about this product that is only revealed once clicked on.`, `images/numbersGlobe1.png`));
cards.push( new CardStats(`Card Title`, `This is a link`, `Here is some more information about this product that is only revealed once clicked on.`, `images/numbersGlobe1.png`));
cards.push( new CardStats(`Card Title`, `This is a link`, `Here is some more information about this product that is only revealed once clicked on.`, `images/numbersGlobe1.png`));


function createCard (title, link, info, picture) {
    let card = `
    <div class="col s2">
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src=${picture}>
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${title}<i class="material-icons right">more_vert</i></span>
          <p><a href="#">${link}</a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${title}<i class="material-icons right">close</i></span>
          <p>${info}</p>
        </div>
      </div>
   `
    return card;
}

function postCard (arr) {
    for (let i = 0; i < arr.length; i++) {
        cardContainer.innerHTML += createCard (arr[i].title, arr[i].link, arr[i].info, arr[i].picture) ;
    }
}

postCard(cards);


