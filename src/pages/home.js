import removeChild from '../functions/removeChildren.js';
import sushiPromoImg from '../assets/sushiPicture.jpg';

export default function loadHome() {
    removeChild();

    const contentContainer = document.querySelector('.Content-Container');

    const sushiPromoContainer = document.createElement('div');
    sushiPromoContainer.className = 'SushiPromo-Container';
    //sushiPromoContainer.setAttribute('style', 'background-color: #000; position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%); width: 100%; height: 100%; z-index: -99; overflow: hidden');
    sushiPromoContainer.setAttribute('style', 'background-color: #000; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: -99; overflow: hidden');
    contentContainer.appendChild(sushiPromoContainer);

    const sushiPromo = document.createElement('img');
    sushiPromo.src = sushiPromoImg;
    sushiPromo.setAttribute('style', 'width: auto; height: auto; min-height: 100vh; position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);');
    sushiPromoContainer.appendChild(sushiPromo);
}
