export default function removeChildren() {
    const contentContainer = document.querySelector('.Content-Container');

    while (contentContainer.children.length > 1) {
        contentContainer.children[1].remove();        
    }
}