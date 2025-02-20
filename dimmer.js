window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let maxScroll = 200; // Max scroll for full effect

    let darkness = Math.min(scrollTop / maxScroll, 1);
    let bgColor = `rgb(${234 - (224 * darkness)}, ${234 - (214 * darkness)}, ${234 - (184 * darkness)})`;

    document.body.style.backgroundColor = bgColor;

    // Adjust opacity of binary rain elements
    document.querySelectorAll(".binary").forEach(binary => {
        binary.style.opacity = darkness; // Fades in as you scroll down
    });
});
