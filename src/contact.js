import removeChild from './functions/removeChildren.js';

export default function loadContact() {
    removeChild();

    const contentContainer = document.querySelector('.Content-Container');

    const firstContact = document.createElement('div');
    firstContact.setAttribute('style', 'width: 100%; height: 100px; background-color: blue;');
    contentContainer.appendChild(firstContact);
}
