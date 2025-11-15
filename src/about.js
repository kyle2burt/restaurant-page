const pageContent = document.querySelector('#content');

function buildAbout() {
    console.log('about');
    const title = document.createElement('h1');
    title.textContent = 'About My Restaurant';

    const subtitle = document.createElement('h3');
    subtitle.textContent = 'We serve food';

    const about1 = document.createElement('p');
    about1.textContent = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.';

    const about2 = document.createElement('p');
    about2.textContent = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.';

    pageContent.appendChild(title);
    pageContent.appendChild(subtitle);
    pageContent.appendChild(about1);
    pageContent.appendChild(about2);
}

export { buildAbout }