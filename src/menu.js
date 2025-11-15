const pageContent = document.querySelector('#content');

function buildMenu() {
    console.log('menu');
    const title = document.createElement('h1');
    title.textContent = 'My Restaurant';

    const subtitle = document.createElement('h3');
    subtitle.textContent = 'My Menu';

    const menuItemContainer = document.createElement('div');

    for (let i = 1; i <= 3; i++) { 
        const menuItem = document.createElement('h4');
        menuItem.textContent = `Menu Item ${i}`;

        const menuItemText = document.createElement('p');
        menuItemText.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates ex dolorum corporis quidem';

        menuItemContainer.appendChild(menuItem);
        menuItemContainer.appendChild(menuItemText);
    }

    pageContent.appendChild(title);
    pageContent.appendChild(subtitle);
    pageContent.appendChild(menuItemContainer);
}

export { buildMenu }