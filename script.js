



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

