const pageContent = document.querySelector('#content');

function buildHome() {
    console.log('home');
    const title = document.createElement('h1');
    title.textContent = 'My Restaurant';

    const subtitle = document.createElement('h3');
    subtitle.textContent = 'We serve food';

    const highlight = document.createElement('p');
    highlight.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates ex dolorum corporis quidem';

    pageContent.appendChild(title);
    pageContent.appendChild(subtitle);
    pageContent.appendChild(highlight);
}

export { buildHome }