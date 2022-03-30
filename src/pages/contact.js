import removeChild from '../functions/removeChildren.js';

export default function loadContact() {
    removeChild();

    const contentContainer = document.querySelector('.Content-Container');

    const contactContent = document.createElement('div');
    contactContent.setAttribute('style', 'width: 100%; height: 100px; background-color: blue;');
    contentContainer.appendChild(contactContent);
}
