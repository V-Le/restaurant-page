export default function loadMenu() {
    const pageElement = document.querySelector('.Page-Content');
    pageElement.innerHTML = '';

    const firstItem = document.createElement('div');
    firstItem.setAttribute('style', 'width: 100%; height: 100px; background-color: red;');
    pageElement.appendChild(firstItem);
}