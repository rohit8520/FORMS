document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector("main input");
    
    // Input focus effect
    inputField.addEventListener("focus", function () {
        inputField.style.boxShadow = "0 0 10px rgba(211, 47, 47, 0.5)";
    });

    inputField.addEventListener("blur", function () {
        inputField.style.boxShadow = "none";
    });

    // Header animation on scroll
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#b71c1c";
        } else {
            header.style.backgroundColor = "#d32f2f";
        }
    });

    // Smooth scroll for links
    document.querySelectorAll("ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
    