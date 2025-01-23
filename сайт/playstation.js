
const backToTopButton = document.getElementById("backToTop");


window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { 
        backToTopButton.style.display = "block";
        backToTopButton.style.animation = "fadeIn 0.3s";
    } else {
        backToTopButton.style.animation = "fadeOut 0.3s";
        setTimeout(() => {
            backToTopButton.style.display = "none";
        }, 300);
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", 
    });
});