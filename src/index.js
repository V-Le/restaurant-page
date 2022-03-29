import './style.css';
//import removeChild from './functions/removeChildren.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import navLogoImg from './Assets/logo_1.png';
import sushiPromoImg from './Assets/sushiPicture.jpg';


const mainContainer = document.querySelector('#main-container');
mainContainer.setAttribute('style', 'width: 100vw; height: 100vh; display: flex; flex-direction: column; overflow: hidden;');

/*******************************/
/* Creating the navagation Bar */
/*******************************/
const navContainer = document.createElement('div');
navContainer.className = 'Navigation-Container';
navContainer.setAttribute('style', "display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100vw; height: 151px; background-color: #fff")
mainContainer.appendChild(navContainer)

const navLogoContainer = document.createElement('div');
navLogoContainer.className = 'Navigation-Logo-Container';
navLogoContainer.setAttribute('style', 'display: flex; justify-content: center; align-items: center; width: 100%; height: 100px; backgroundcolor: #fff');
navContainer.appendChild(navLogoContainer);

const navLogo = document.createElement('img');
navLogo.src = navLogoImg;
navLogo.setAttribute('style', 'width: 180px; height: auto;')
navLogoContainer.appendChild(navLogo);

const navBarContainer = document.createElement('div');
navBarContainer.className = 'Navigation-Bar-Container';
navBarContainer.setAttribute('style', ' display: flex; justify-content: center; align-items: center; width: 100%; height: 50px; background-color: #888;');
navContainer.appendChild(navBarContainer);

const homeBtn = document.createElement('button');
homeBtn.innerText = 'Home';
navBarContainer.appendChild(homeBtn);

const menuBtn = document.createElement('button');
menuBtn.innerText = 'Menu';
menuBtn.addEventListener('click', loadMenu)
navBarContainer.appendChild(menuBtn);

const contactBtn = document.createElement('button');
contactBtn.innerText = 'Contact';
contactBtn.addEventListener('click', loadContact)
navBarContainer.appendChild(contactBtn);

const allBtns = document.querySelectorAll('button');
allBtns.forEach(btns => btns.setAttribute('style', "width: 100px; height 50px; margin: 0 5px"))

/*******************************/
/* Creating the lower content  */
/*******************************/
const contentContainer = document.createElement('div');
contentContainer.className = 'Content-Container';
contentContainer.setAttribute('style', 'display: flex; flex-direction: column; width: 100%; height: 100%;')
mainContainer.appendChild(contentContainer);

const sushiPromoContainer = document.createElement('div');
sushiPromoContainer.className = 'SushiPromo-Container';
//sushiPromoContainer.setAttribute('style', 'background-color: #000; position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%); width: 100%; height: 100%; z-index: -99; overflow: hidden');
sushiPromoContainer.setAttribute('style', 'background-color: #000; position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%); width: 100%; height: 100%; z-index: -99; overflow: hidden');
contentContainer.appendChild(sushiPromoContainer);

const sushiPromo = document.createElement('img');
sushiPromo.src = sushiPromoImg;
//sushiPromo.setAttribute('style', 'width: auto; height: auto; min-height: 100vh;');
sushiPromo.setAttribute('style', 'background-size: cover');
sushiPromoContainer.appendChild(sushiPromo);
