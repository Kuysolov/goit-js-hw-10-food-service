import dishCardsTpl from "../menu-dishes.hbs";
import dishes from '../menu.json';

const menuContainer = document.querySelector('.js-menu');

function createMenuCardsMarkup() {
    return dishCardsTpl(dishes)
}

function renderMenuCardsMarkup() {
const menuCardsMarkup = createMenuCardsMarkup();
menuContainer.insertAdjacentHTML("beforeend", menuCardsMarkup);
}

renderMenuCardsMarkup()

