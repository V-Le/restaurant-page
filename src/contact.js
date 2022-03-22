export default function loadContact() {
    const pageElement = document.querySelector('.Page-Content');
    pageElement.innerHTML = '';
    
    const firstContact = document.createElement('div');
    firstContact.setAttribute('style', 'width: 100%; height: 100px; background-color: blue;');
    pageElement.appendChild(firstContact);
}
