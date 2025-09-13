document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header') ?? null
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop

        if (scrollTop > lastScrollTop) {
            header.classList.remove("header--show")
        } else {
            header.classList.add("header--show")
        }

        lastScrollTop = scrollTop
    })






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
