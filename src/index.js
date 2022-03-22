import './style.css';


const mainContent = document.querySelector('#main-content');
mainContent.setAttribute('style', 'width: 100vw; height: 100vh; background-color: #888');

const navBar = document.createElement('div');
navBar.classList.add('Navigation-Bar');
navBar.setAttribute('style', ' display: flex; justify-content: center; align-items: center; width: 100vw; height: 50px; border: 1px solid black');
mainContent.appendChild(navBar);

const homeBtn = document.createElement('button');
homeBtn.innerText = 'Home';
homeBtn.setAttribute('style', "width: 100px; height 50px; margin: 0 5px");
navBar.appendChild(homeBtn);

const menuBtn = document.createElement('button');
menuBtn.innerText = 'Menu';
menuBtn.setAttribute('style', "width: 100px; height 50px; margin: 0 5px");
navBar.appendChild(menuBtn);

const contactBtn = document.createElement('button');
contactBtn.innerText = 'Contact';
contactBtn.setAttribute('style', "width: 100px; height 50px; margin: 0 5px");
navBar.appendChild(contactBtn);
