document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger') ?? null
    const megaMenu = document.querySelector('.header__mega-menu-container') ?? null

    if (burger && megaMenu) {
        burger.addEventListener('click', () => {
            megaMenu.classList.toggle('header__mega-menu-container--toggled')

            if (burger.textContent === 'menu') {
                burger.textContent = 'back';
            } else {
                burger.textContent = 'menu';
            }
        })
    }
})
