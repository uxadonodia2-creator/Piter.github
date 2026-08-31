function entrarNoSite() {
    const entrada = document.getElementById("entrada");

    entrada.classList.add("saida");

    setTimeout(() => {
        entrada.style.display = "none";
    }, 800);
}


// Animação suave ao clicar nos links do menu

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {
            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Efeito quando os cards aparecem na tela

const elementos = document.querySelectorAll(
    ".luta-card, .treino-grid article, .historia-texto"
);

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(30px)";

    elemento.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observador.observe(elemento);

});
