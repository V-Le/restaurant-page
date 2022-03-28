export default function removeChildren() {
    const contentContainer = document.querySelector('.Content-Container');

    while (contentContainer.children.length > 0) {
        contentContainer.children[0].remove();
    }
}