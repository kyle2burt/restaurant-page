import "./styles.css";
import "./home";
import { buildHome } from "./home";

buildHome();

const nav = document.querySelector('nav');
nav.addEventListener('click', (event) => {
    switch(event.target.id) {
        case ('home'):
            buildHome();
            break;

        case ('menu'):

        case ('about'):

        default:
            break;
    }
})