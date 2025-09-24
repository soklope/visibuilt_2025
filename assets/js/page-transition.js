document.addEventListener('DOMContentLoaded', () => {

  const transition = document.querySelector(".page-transition");

  function hideTransition() {
    transition.classList.add("hidden");
  }

  window.addEventListener("pageshow", hideTransition);

  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (
        href &&
        href.indexOf("#") !== 0 &&
        this.hostname === window.location.hostname &&
        !this.classList.contains("no-transition")
      ) {
        e.preventDefault();
        transition.classList.remove("hidden"); // fade back in

        setTimeout(() => {
          window.location.href = href;
        }, 300); 
      }
    });
  });
});
