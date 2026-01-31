function showMenu() {
    let menu = document.querySelector('.mobile-menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        document.querySelector(".icon").src = "./src/images/icon-hamburger.svg";
    } else {
        menu.classList.add('active');
        document.querySelector(".icon").src = "./src/images/icon-close.svg";
    }
}

function showNavBtn(button) {
    let btnNav = button.nextElementSibling
    btnNav.classList.toggle('active')
    let arrowBtn = button.querySelector(".arrow")
    arrowBtn.classList.toggle('active')
}
