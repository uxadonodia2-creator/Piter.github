/* =====================================================
   PITER — SCRIPT
   DARK MODE • NEVE • MAGIA • ANIMAÇÕES
===================================================== */


/* =====================================================
   ENTRADA DO SITE
===================================================== */

function entrarNoSite() {

    const entrada = document.getElementById("entrada");

    if (!entrada) return;

    entrada.classList.add("saida");

    // Explosão visual ao entrar
    criarExplosaoMagica();

    setTimeout(() => {

        entrada.style.display = "none";

        const site = document.getElementById("site");

        if (site) {
            site.style.display = "block";
        }

        iniciarEfeitos();

    }, 800);
}


/* =====================================================
   PARTÍCULAS DA ENTRADA
===================================================== */

function criarParticulas() {

    const entrada = document.getElementById("entrada");

    if (!entrada) return;

    const camada = document.createElement("div");

    camada.className = "particulas-magicas";

    camada.style.position = "absolute";
    camada.style.inset = "0";
    camada.style.pointerEvents = "none";
    camada.style.overflow = "hidden";
    camada.style.zIndex = "1";

    entrada.appendChild(camada);

    const quantidade = window.innerWidth < 600 ? 35 : 65;

    for (let i = 0; i < quantidade; i++) {

        const particula = document.createElement("span");

        particula.style.position = "absolute";
        particula.style.left = Math.random() * 100 + "%";
        particula.style.top = Math.random() * 100 + "%";

        const tamanho = Math.random() * 3 + 1;

        particula.style.width = tamanho + "px";
        particula.style.height = tamanho + "px";

        particula.style.borderRadius = "50%";

        particula.style.background =
            Math.random() > 0.5
                ? "#00b7ff"
                : "#ffffff";

        particula.style.boxShadow =
            "0 0 10px #00b7ff";

        particula.style.opacity =
            Math.random() * 0.7 + 0.2;

        particula.style.animation =
            `flutuar ${Math.random() * 5 + 4}s ease-in-out infinite`;

        particula.style.animationDelay =
            Math.random() * 5 + "s";

        camada.appendChild(particula);
    }
}


/* =====================================================
   FLOQUINHOS DE NEVE
===================================================== */

function criarNeve() {

    const entrada = document.getElementById("entrada");

    if (!entrada) return;

    const neve = document.createElement("div");

    neve.className = "neve-piter";

    neve.style.position = "absolute";
    neve.style.inset = "0";
    neve.style.overflow = "hidden";
    neve.style.pointerEvents = "none";
    neve.style.zIndex = "1";

    entrada.appendChild(neve);

    const quantidade =
        window.innerWidth < 600 ? 28 : 50;

    for (let i = 0; i < quantidade; i++) {

        const floco = document.createElement("span");

        floco.innerHTML = "❄";

        floco.style.position = "absolute";

        floco.style.left =
            Math.random() * 100 + "%";

        floco.style.top =
            -Math.random() * 100 + "%";

        floco.style.color =
            "rgba(255,255,255," +
            (Math.random() * 0.6 + 0.2) +
            ")";

        floco.style.fontSize =
            Math.random() * 10 + 6 + "px";

        floco.style.filter =
            "drop-shadow(0 0 5px #ffffff)";

        floco.style.animation =
            `cairNeve ${Math.random() * 8 + 7}s linear infinite`;

        floco.style.animationDelay =
            Math.random() * 8 + "s";

        neve.appendChild(floco);
    }
}


/* =====================================================
   MAGIA NEGRA
===================================================== */

function criarMagiaNegra() {

    const entrada = document.getElementById("entrada");

    if (!entrada) return;

    const magia = document.createElement("div");

    magia.className = "magia-negra";

    magia.style.position = "absolute";
    magia.style.left = "50%";
    magia.style.top = "50%";

    magia.style.width = "20px";
    magia.style.height = "20px";

    magia.style.transform = "translate(-50%, -50%)";

    magia.style.borderRadius = "50%";

    magia.style.pointerEvents = "none";

    magia.style.zIndex = "0";

    magia.style.boxShadow = `
        0 0 40px rgba(0,119,255,.7),
        0 0 100px rgba(0,119,255,.35)
    `;

    magia.style.animation =
        "magiaRespirar 4s ease-in-out infinite";

    entrada.appendChild(magia);
}


/* =====================================================
   EXPLOSÃO AO ENTRAR
===================================================== */

function criarExplosaoMagica() {

    const entrada = document.getElementById("entrada");

    if (!entrada) return;

    for (let i = 0; i < 35; i++) {

        const particula = document.createElement("span");

        particula.style.position = "absolute";

        particula.style.left = "50%";
        particula.style.top = "50%";

        particula.style.width = "4px";
        particula.style.height = "4px";

        particula.style.borderRadius = "50%";

        particula.style.background =
            i % 2 === 0
                ? "#00b7ff"
                : "#ffffff";

        particula.style.boxShadow =
            "0 0 12px #00b7ff";

        particula.style.pointerEvents = "none";

        const angulo =
            Math.random() * Math.PI * 2;

        const distancia =
            Math.random() * 250 + 100;

        const x =
            Math.cos(angulo) * distancia;

        const y =
            Math.sin(angulo) * distancia;

        particula.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0)`,
                    opacity: 0
                }
            ],

            {
                duration: 900,
                easing: "cubic-bezier(.1,.8,.2,1)"
            }

        );

        entrada.appendChild(particula);

        setTimeout(() => {
            particula.remove();
        }, 1000);
    }
}


/* =====================================================
   ANIMAÇÕES CSS CRIADAS PELO JAVASCRIPT
===================================================== */

function adicionarAnimacoes() {

    if (document.getElementById("piter-animations")) return;

    const style = document.createElement("style");

    style.id = "piter-animations";

    style.textContent = `

        @keyframes flutuar {

            0%, 100% {
                transform: translate(0, 0);
                opacity: .2;
            }

            50% {
                transform: translate(
                    20px,
                    -30px
                );
                opacity: 1;
            }

        }


        @keyframes cairNeve {

            0% {
                transform:
                    translateY(-20px)
                    rotate(0deg);
            }

            50% {
                transform:
                    translateY(50vh)
                    translateX(25px)
                    rotate(180deg);
            }

            100% {
                transform:
                    translateY(110vh)
                    translateX(-20px)
                    rotate(360deg);
            }

        }


        @keyframes magiaRespirar {

            0%, 100% {
                transform:
                    translate(-50%, -50%)
                    scale(1);
                opacity: .5;
            }

            50% {
                transform:
                    translate(-50%, -50%)
                    scale(18);
                opacity: .15;
            }

        }


        #entrada.saida {

            animation:
                desaparecerEntrada
                .8s ease forwards;

        }


        @keyframes desaparecerEntrada {

            0% {
                opacity: 1;
                transform: scale(1);
            }

            60% {
                opacity: 1;
                transform: scale(1.03);
            }

            100% {
                opacity: 0;
                transform: scale(1.08);
            }

        }


        .efeito-brilho-piter {

            position: fixed;
            pointer-events: none;

            width: 150px;
            height: 150px;

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    rgba(0,183,255,.18),
                    transparent 70%
                );

            transform:
                translate(-50%, -50%);

            z-index: 9998;

        }

    `;

    document.head.appendChild(style);
}


/* =====================================================
   BRILHO QUE ACOMPANHA O DEDO/MOUSE
===================================================== */

function criarBrilhoMovimento() {

    const brilho =
        document.createElement("div");

    brilho.className =
        "efeito-brilho-piter";

    brilho.style.display = "none";

    document.body.appendChild(brilho);

    document.addEventListener(
        "pointermove",
        (evento) => {

            brilho.style.display = "block";

            brilho.style.left =
                evento.clientX + "px";

            brilho.style.top =
                evento.clientY + "px";

        }
    );

}


/* =====================================================
   MENU SUAVE
===================================================== */

function ativarMenu() {

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                function (e) {

                    const destino =
                        document.querySelector(
                            this.getAttribute("href")
                        );

                    if (destino) {

                        e.preventDefault();

                        destino.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });

}


/* =====================================================
   ANIMAÇÃO DOS CARDS
===================================================== */

function ativarAnimacoesCards() {

    const elementos =
        document.querySelectorAll(
            ".luta-card, " +
            ".treino-grid article, " +
            ".historia-texto, " +
            ".evolucao, " +
            ".objetivo, " +
            ".instagram"
        );

    if (!("IntersectionObserver" in window)) {

        elementos.forEach(elemento => {

            elemento.style.opacity = "1";
            elemento.style.transform =
                "translateY(0)";

        });

        return;
    }

    const observador =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach(
                    (entrada) => {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.style.opacity =
                                "1";

                            entrada.target.style.transform =
                                "translateY(0)";

                            observador.unobserve(
                                entrada.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.12
            }

        );


    elementos.forEach(elemento => {

        elemento.style.opacity = "0";

        elemento.style.transform =
            "translateY(35px)";

        elemento.style.transition =
            "opacity .8s ease, transform .8s ease";

        observador.observe(elemento);

    });

}


/* =====================================================
   INICIAR EFEITOS
===================================================== */

function iniciarEfeitos() {

    adicionarAnimacoes();

    criarBrilhoMovimento();

    ativarMenu();

    ativarAnimacoesCards();

}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        adicionarAnimacoes();

        criarParticulas();

        criarNeve();

        criarMagiaNegra();

    }
);
