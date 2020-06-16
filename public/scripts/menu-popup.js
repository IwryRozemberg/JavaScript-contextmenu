const menu = document.querySelector("#menu-popup");
const menuItems = document.querySelectorAll('#menu-popup ul li');
// contextmenu
document.addEventListener('contextmenu', event => {
    event.preventDefault();
    console.log(event);
    console.log(window.event);

    const X = event.clientX;
    const Y = event.clientY;
    console.log(X, ', ', Y);

    menu.style.top = Y.toString() + 'px';
    menu.style.left = X.toString() + 'px';
    menu.style.visibility = "visible";
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.style.visibility = "hidden";
    })
});