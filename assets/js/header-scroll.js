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
})
