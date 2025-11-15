import "./styles.css";
import "./home";
import { buildHome } from "./home";
import { buildMenu } from "./menu";

buildHome();

const nav = document.querySelector('nav');
nav.addEventListener('click', (event) => {
    switch(event.target.id) {
        case ('home'):
            clearContent();
            buildHome();
            break;

        case ('menu'):
            clearContent();
            buildMenu();
            break;

        case ('about'):
            clearContent();
            break;

        default:
            break;
    }
});

function clearContent() {
    const pageContent = document.querySelector('#content');

    while (pageContent.lastChild) {
        pageContent.removeChild(pageContent.lastChild);
    }
}