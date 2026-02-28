document.addEventListener("DOMContentLoaded", function () {

    const perfil = document.querySelector(".fotoPerfil");
    const menu = document.querySelector(".dropdown");

    perfil.addEventListener("click", function (e) {
        e.stopPropagation();
        menu.classList.toggle("show");
    });

    document.addEventListener("click", function () {
        menu.classList.remove("show");
    });

     const elementos = document.querySelectorAll(".animarScroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    elementos.forEach(el => observer.observe(el));

});