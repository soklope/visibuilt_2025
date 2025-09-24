document.addEventListener('DOMContentLoaded', () => {
  (function () {
    const scrollSpeed = 100;
    const smoothness = 30;

    let scrollTarget = window.scrollY;
    let scrolling = false;

    function updateScroll() {
      scrolling = true;
      let currentScroll = window.scrollY;
      let distance = (scrollTarget - currentScroll) / smoothness;

      if (Math.abs(distance) > 0.5) {
        window.scrollTo(0, currentScroll + distance);
        requestAnimationFrame(updateScroll);
      } else {
        scrolling = false;
      }
    }

    window.addEventListener("wheel", function (e) {
      e.preventDefault();
      scrollTarget += e.deltaY > 0 ? scrollSpeed : -scrollSpeed;
      scrollTarget = Math.max(0, scrollTarget);
      if (!scrolling) requestAnimationFrame(updateScroll);
    }, { passive: false });
  })();
})
