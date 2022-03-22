import './style.css';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const mainContainer = document.querySelector('#main-container');
mainContainer.setAttribute('style', 'width: 100vw; height: 100vh; display: flex; flex-direction: column;');

/*******************************/
/* Creating the navagation Bar */
/*******************************/
const navBar = document.createElement('div');
navBar.classList.add('Navigation-Bar');
navBar.setAttribute('style', ' display: flex; justify-content: center; align-items: center; width: 100%; height: 50px; background-color: #888;');
mainContainer.appendChild(navBar);

const homeBtn = document.createElement('button');
homeBtn.innerText = 'Home';
navBar.appendChild(homeBtn);

const menuBtn = document.createElement('button');
menuBtn.innerText = 'Menu';
menuBtn.addEventListener('click', loadMenu)
navBar.appendChild(menuBtn);

const contactBtn = document.createElement('button');
contactBtn.innerText = 'Contact';
contactBtn.addEventListener('click', loadContact)
navBar.appendChild(contactBtn);

const allBtns = document.querySelectorAll('button');
allBtns.forEach(btns => btns.setAttribute('style', "width: 100px; height 50px; margin: 0 5px"))

/*******************************/
/* Creating the lower content  */
/*******************************/
const pageElement = document.createElement('div');
pageElement.classList.add('Page-Content');
pageElement.setAttribute('style', 'display: flex; flex-direction: column; width: 100%; height: 100%; background-color: #777;')
mainContainer.appendChild(pageElement);
