document.addEventListener("DOMContentLoaded", () => {
    const animateSpans = document.querySelectorAll(".skp-animated-text__span");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const span = entry.target;
                const text = span.textContent;
                span.textContent = "";

                text.split("").forEach((char, i) => {
                    const letterSpan = document.createElement("span");
                    letterSpan.textContent = char;
                    letterSpan.classList.add("letter");
                    letterSpan.style.transition = "color 0.3s";
                    letterSpan.style.transitionDelay = `${i * 0.05}s`;
                    span.appendChild(letterSpan);
                });

                setTimeout(() => {
                    span.querySelectorAll(".letter").forEach(l => {
                        l.style.color = "#EE9A32";
                    });
                }, 50);

                obs.unobserve(span); 
            }
        });
    }, { threshold: 0.2 });

    animateSpans.forEach(span => observer.observe(span));
});
