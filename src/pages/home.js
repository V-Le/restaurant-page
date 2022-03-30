import removeChild from '../functions/removeChildren.js';
import sushiPromoImg from '../assets/sushiPicture.jpg';

export default function loadHome() {
    removeChild();

    const contentContainer = document.querySelector('.Content-Container');

    const sushiPromoContainer = document.createElement('div');
    sushiPromoContainer.className = 'SushiPromo-Container';
    contentContainer.appendChild(sushiPromoContainer);

    const sushiPromo = document.createElement('img');
    sushiPromo.id = 'SushiPromo-Image';
    sushiPromo.src = sushiPromoImg;
    sushiPromoContainer.appendChild(sushiPromo);
}
