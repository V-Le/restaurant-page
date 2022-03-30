import removeChild from "../functions/removeChildren.js";

export default function loadMenu() {
    removeChild();
    
    const contentContainer = document.querySelector('.Content-Container');

    const menuContent = document.createElement('div');
    menuContent.setAttribute('style', 'width: 100%; height: 100px; background-color: red;');
    contentContainer.appendChild(menuContent);
}