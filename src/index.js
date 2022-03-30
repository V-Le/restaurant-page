import './style.css';
import loadHome from './pages/home.js';
import loadMenu from './pages/menu.js';
import loadContact from './pages/contact.js';
import navLogoImg from './assets/logo_1.png';

const mainContainer = document.querySelector('#main-container');


/*******************************/
/* Creating the navagation Bar */
/*******************************/
const navContainer = document.createElement('div');
navContainer.className = 'Navigation-Container';
mainContainer.appendChild(navContainer);

const navLogoContainer = document.createElement('div');
navLogoContainer.className = 'Navigation-Logo-Container';
navContainer.appendChild(navLogoContainer);

const navLogo = document.createElement('img');
navLogo.id = 'Navigation-Logo-Image';
navLogo.src = navLogoImg;
navLogoContainer.appendChild(navLogo);

const navLinkContainer = document.createElement('div');
navLinkContainer.className = 'Navigation-Link-Container';
navContainer.appendChild(navLinkContainer);


/*******************************/
/*     Navagation Buttons      */
/*******************************/
const homeBtn = document.createElement('button');
homeBtn.innerText = 'Home';
homeBtn.addEventListener('click', loadHome);
navLinkContainer.appendChild(homeBtn);

const menuBtn = document.createElement('button');
menuBtn.innerText = 'Menu';
menuBtn.addEventListener('click', loadMenu);
navLinkContainer.appendChild(menuBtn);

const contactBtn = document.createElement('button');
contactBtn.innerText = 'Contact';
contactBtn.addEventListener('click', loadContact);
navLinkContainer.appendChild(contactBtn);

const allBtns = document.querySelectorAll('button');
allBtns.forEach(btns => btns.className = 'Navigation-Buttons');


/*******************************/
/* Creating the lower content  */
/*******************************/
const contentContainer = document.createElement('div');
contentContainer.className = 'Content-Container';
contentContainer.setAttribute('style', 'display: flex; flex-direction: column; width: 100%; height: 100%;');
mainContainer.appendChild(contentContainer);

loadHome();


