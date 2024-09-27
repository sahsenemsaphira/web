const menuBtn = document.querySelector(".fa-bars");
const menuBtn2 = document.querySelector(".fa-bars2");
const overlay = document.querySelector(".overlay");
const navMenu = document.querySelector(".nav-links-container");

function handleClick(e) {
    console.log(e.target);
    if (e.target === menuBtn || e.target === menuBtn2) {
        overlay.style.display = "block";
        navMenu.style.right = "0%";
    }
    if (e.target === overlay || e.target === navMenu) {
        overlay.style.display = "none";
        navMenu.style.right = "-150%";
    }
}

// Hem click hem de touchstart olayını dinlemek için
window.addEventListener("click", handleClick);
window.addEventListener("touchstart", handleClick);

// iOS'ta dokunma olaylarının çalışması için menu butonlarına touchstart eklendi
menuBtn.addEventListener("touchstart", (e) => {
    overlay.style.display = "block";
    navMenu.style.right = "0%";
    e.preventDefault(); // Olası tıklama/dokunma çatışmalarını önler
}, { passive: false });

menuBtn2.addEventListener("touchstart", (e) => {
    overlay.style.display = "block";
    navMenu.style.right = "0%";
    e.preventDefault();
}, { passive: false });



window.addEventListener('scroll', function () {
    var aboutus = document.getElementById('about');
    var aboutus_top = aboutus.getBoundingClientRect().top;
    var aboutus_bottom = aboutus.getBoundingClientRect().bottom;

    var products = document.getElementById('portfolio');
    var products_top = products.getBoundingClientRect().top;
    var products_bottom = products.getBoundingClientRect().bottom;


    if (aboutus_top + 300 < window.innerHeight) {
        dot.style.left = "25%";
    }
    if (products_top + 300 < window.innerHeight) {
        dot.style.left = "67%";
    }


});


function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

