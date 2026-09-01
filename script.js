/* =====================================================
   PITER — SCRIPT DEFINITIVO
   SASUKE • DARK • ROXO • MOBILE
===================================================== */

"use strict";


/* =====================================================
   CONFIGURAÇÕES
===================================================== */

const PITER = {
    roxo: "#9b4dff",
    roxoClaro: "#c084ff",
    roxoForte: "#6d20ff",
    branco: "#ffffff"
};


/* =====================================================
   ENTRADA DO SITE
===================================================== */

function entrarNoSite() {

    const entrada = document.getElementById("entrada");
    const site = document.getElementById("site");

    if (!entrada || !site) return;

    // Evita clicar várias vezes
    if (entrada.classList.contains("saida")) return;

    entrada.classList.add("saida");

    criarExplosaoRoxa();

    setTimeout(() => {

        entrada.style.display = "none";
        site.style.display = "block";

        // Pequeno reset para garantir que o navegador
        // renderize o site corretamente
        requestAnimationFrame(() => {
            site.classList.add("site-visivel");
        });

        iniciarEfeitos();

    }, 750);
}


/* =====================================================
   PARTÍCULAS ROXAS
===================================================== */

function criarParticulasRoxas() {

    const entrada = document.getElementById("entrada");

    if (!entrada) return;

    // Não cria duas vezes
    if (entrada.querySelector(".particulas-roxas")) return;

    const camada = document.createElement("div");

    camada.className = "particulas-roxas";

    Object.assign(camada.style, {
        position: "absolute",
        inset: "0",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: "1"
    });

    entrada.appendChild(camada);

    const celular = window.innerWidth <= 600;

    // Menos partículas no celular para manter o site leve
    const quantidade = celular ? 28 : 55;

    for (let i = 0; i < quantidade; i++) {

        const particula = document.createElement("span");

        const tamanho =
            Math.random() * 3 + 1;

        Object.assign(particula.style, {
            position: "absolute",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            width: tamanho + "px",
            height: tamanho + "px",
            borderRadius: "50%",
            background:
                Math.random() > 0.25
                    ? PITER.roxo
                    : PITER.roxoClaro,
            boxShadow:
                `0 0 ${Math.random() * 12 + 6}px ${PITER.roxo}`,
            opacity:
                Math.random() * 0.65 + 0.2,
            animation:
                `piterFlutuar ${Math.random() * 5 + 5}s ease-in-out infinite`,
            animationDelay:
                Math.random() * 5 + "s"
        });

        camada.appendChild(particula);
    }
}


/* =====================================================
   ORB ROXO
===================================================== */

function criarOrbRoxo() {

    const entrada = document.getElementById("entrada");

    if (!entrada) return;

    if (entrada.querySelector(".orb-piter")) return;

    const orb = document.createElement("div");

    orb.className = "orb-piter";

    Object.assign(orb.style, {
        position: "absolute",
        left: "50%",
        top: "50%",
        width: "35px",
        height: "35px",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: "0",
        background:
            "radial-gradient(circle, rgba(192,132,255,.65), rgba(109,32,255,.12) 45%, transparent 72%)",
        boxShadow:
            "0 0 45px rgba(155,77,255,.65), 0 0 120px rgba(109,32,255,.35)",
        animation:
            "piterOrb 4s ease-in-out infinite"
    });

    entrada.appendChild(orb);
}


/* =====================================================
   EXPLOSÃO ROXA AO ENTRAR
===================================================== */

function criarExplosaoRoxa() {

    const entrada = document.getElementById("entrada");

    if (!entrada) return;

    const celular = window.innerWidth <= 600;

    // Menos partículas no celular
    const quantidade = celular ? 24 : 38;

    for (let i = 0; i < quantidade; i++) {

        const particula = document.createElement("span");

        const tamanho =
            Math.random() * 4 + 2;

        Object.assign(particula.style, {
            position: "absolute",
            left: "50%",
            top: "50%",
            width: tamanho + "px",
            height: tamanho + "px",
            borderRadius: "50%",
            background:
                i % 3 === 0
                    ? PITER.branco
                    : PITER.roxoClaro,
            boxShadow:
                `0 0 12px ${PITER.roxo}`,
            pointerEvents: "none",
            zIndex: "20"
        });

        const angulo =
            Math.random() * Math.PI * 2;

        const distancia =
            Math.random() * (celular ? 160 : 280) + 70;

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
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(0)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    Math.random() * 400 + 650,
                easing:
                    "cubic-bezier(.1,.8,.2,1)",
                fill: "forwards"
            }
        );

        entrada.appendChild(particula);

        setTimeout(() => {
            particula.remove();
        }, 1200);
    }
}


/* =====================================================
   ANIMAÇÕES EXTRAS
===================================================== */

function adicionarAnimacoes() {

    if (document.getElementById("piter-js-animations")) {
        return;
    }

    const style =
        document.createElement("style");

    style.id =
        "piter-js-animations";

    style.textContent = `

        /* -------------------------------
           PARTÍCULAS
        -------------------------------- */

        @keyframes piterFlutuar {

            0% {
                transform:
                    translate3d(0, 0, 0)
                    scale(.7);
                opacity: .15;
            }

            50% {
                transform:
                    translate3d(
                        12px,
                        -25px,
                        0
                    )
                    scale(1.15);
                opacity: 1;
            }

            100% {
                transform:
                    translate3d(
                        -8px,
                        -50px,
                        0
                    )
                    scale(.7);
                opacity: .15;
            }

        }


        /* -------------------------------
           ORB
        -------------------------------- */

        @keyframes piterOrb {

            0%, 100% {
                transform:
                    translate(-50%, -50%)
                    scale(1);
                opacity: .45;
            }

            50% {
                transform:
                    translate(-50%, -50%)
                    scale(13);
                opacity: .12;
            }

        }


        /* -------------------------------
           SAÍDA
        -------------------------------- */

        #entrada.saida {

            animation:
                piterEntradaSaida
                .75s
                cubic-bezier(.7,0,.2,1)
                forwards;

        }


        @keyframes piterEntradaSaida {

            0% {
                opacity: 1;
                transform: scale(1);
            }

            55% {
                opacity: 1;
                transform: scale(1.025);
            }

            100% {
                opacity: 0;
                transform: scale(1.08);
            }

        }


        /* -------------------------------
           SITE
        -------------------------------- */

        #site.site-visivel {

            animation:
                piterSiteEntrada
                .7s
                ease
                both;

        }


        @keyframes piterSiteEntrada {

            from {
                opacity: 0;
                transform: translateY(12px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }

        }


        /* -------------------------------
           BRILHO DE TOQUE
        -------------------------------- */

        .piter-toque {

            position: fixed;

            width: 85px;
            height: 85px;

            border-radius: 50%;

            pointer-events: none;

            z-index: 99999;

            background:
                radial-gradient(
                    circle,
                    rgba(192,132,255,.45),
                    rgba(155,77,255,.16) 35%,
                    transparent 72%
                );

            transform:
                translate(-50%, -50%)
                scale(.4);

            animation:
                piterToque
                .65s
                ease-out
                forwards;

        }


        @keyframes piterToque {

            0% {
                opacity: .9;
                transform:
                    translate(-50%, -50%)
                    scale(.35);
            }

            100% {
                opacity: 0;
                transform:
                    translate(-50%, -50%)
                    scale(1.5);
            }

        }


        /* -------------------------------
           LINHA DE SCROLL
        -------------------------------- */

        .piter-scroll-progress {

            position: fixed;

            top: 0;
            left: 0;

            width: 0%;
            height: 2px;

            z-index: 10000;

            pointer-events: none;

            background:
                linear-gradient(
                    90deg,
                    #6d20ff,
                    #c084ff
                );

            box-shadow:
                0 0 12px rgba(155,77,255,.8);

        }


        /* -------------------------------
           REDUZIR MOVIMENTO
        -------------------------------- */

        @media (prefers-reduced-motion: reduce) {

            .particulas-roxas,
            .orb-piter {
                display: none !important;
            }

            #entrada.saida,
            #site.site-visivel,
            .piter-toque {
                animation: none !important;
            }

        }

    `;

    document.head.appendChild(style);
}


/* =====================================================
   BRILHO DE TOQUE — CELULAR
===================================================== */

function ativarToqueRoxo() {

    // Não cria efeitos repetidos
    if (document.body.dataset.toqueAtivo === "true") {
        return;
    }

    document.body.dataset.toqueAtivo = "true";

    document.addEventListener(
        "pointerdown",
        (evento) => {

            // Ignora toque fora do site
            if (
                evento.target.closest("#entrada")
            ) {
                return;
            }

            criarBrilhoToque(
                evento.clientX,
                evento.clientY
            );

        },
        {
            passive: true
        }
    );
}


function criarBrilhoToque(x, y) {

    const brilho =
        document.createElement("div");

    brilho.className =
        "piter-toque";

    brilho.style.left =
        x + "px";

    brilho.style.top =
        y + "px";

    document.body.appendChild(brilho);

    setTimeout(() => {
        brilho.remove();
    }, 700);
}


/* =====================================================
   SCROLL SUAVE
===================================================== */

function ativarMenu() {

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            // Evita adicionar o evento duas vezes
            if (link.dataset.menuAtivo === "true") {
                return;
            }

            link.dataset.menuAtivo = "true";

            link.addEventListener(
                "click",
                function (e) {

                    const href =
                        this.getAttribute("href");

                    if (!href || href === "#") {
                        return;
                    }

                    const destino =
                        document.querySelector(href);

                    if (!destino) return;

                    e.preventDefault();

                    destino.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

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
            ".historia-frase, " +
            ".evolucao, " +
            ".objetivo, " +
            ".instagram, " +
            ".frase"
        );

    if (!elementos.length) return;


    // Se o navegador não tiver IntersectionObserver,
    // mostra tudo normalmente.
    if (
        !("IntersectionObserver" in window)
    ) {

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

                entradas.forEach(entrada => {

                    if (
                        !entrada.isIntersecting
                    ) {
                        return;
                    }

                    entrada.target.style.opacity =
                        "1";

                    entrada.target.style.transform =
                        "translateY(0)";

                    observador.unobserve(
                        entrada.target
                    );

                });

            },
            {
                threshold: .08,
                rootMargin: "0px 0px -30px 0px"
            }
        );


    elementos.forEach((elemento, indice) => {

        elemento.style.opacity = "0";

        elemento.style.transform =
            "translateY(28px)";

        elemento.style.transition =
            "opacity .7s ease, transform .7s ease";

        // Pequeno atraso entre elementos
        // para dar sensação de sequência
        elemento.style.transitionDelay =
            Math.min(indice * 40, 180) + "ms";

        observador.observe(elemento);

    });
}


/* =====================================================
   BARRA DE PROGRESSO DO SCROLL
===================================================== */

function criarBarraScroll() {

    if (
        document.querySelector(
            ".piter-scroll-progress"
        )
    ) {
        return;
    }

    const barra =
        document.createElement("div");

    barra.className =
        "piter-scroll-progress";

    document.body.appendChild(barra);

    let atualizando = false;


    function atualizar() {

        const documento =
            document.documentElement;

        const scrollTop =
            documento.scrollTop;

        const altura =
            documento.scrollHeight -
            documento.clientHeight;

        if (altura <= 0) {
            barra.style.width = "0%";
            return;
        }

        const porcentagem =
            (scrollTop / altura) * 100;

        barra.style.width =
            Math.min(100, Math.max(0, porcentagem))
            + "%";
    }


    window.addEventListener(
        "scroll",
        () => {

            if (atualizando) return;

            atualizando = true;

            requestAnimationFrame(() => {

                atualizar();

                atualizando = false;

            });

        },
        {
            passive: true
        }
    );

    atualizar();
}


/* =====================================================
   VÍDEOS
===================================================== */

function melhorarVideos() {

    const videos =
        document.querySelectorAll("video");

    videos.forEach(video => {

        video.setAttribute(
            "playsinline",
            ""
        );

        video.setAttribute(
            "preload",
            "metadata"
        );

    });
}


/* =====================================================
   BOTÕES
===================================================== */

function ativarFeedbackBotoes() {

    const botoes =
        document.querySelectorAll(
            ".botao, button"
        );

    botoes.forEach(botao => {

        if (
            botao.dataset.feedbackAtivo === "true"
        ) {
            return;
        }

        botao.dataset.feedbackAtivo =
            "true";

        botao.addEventListener(
            "pointerdown",
            () => {

                botao.style.transform =
                    "scale(.97)";

            },
            {
                passive: true
            }
        );

        botao.addEventListener(
            "pointerup",
            () => {

                botao.style.transform =
                    "";

            },
            {
                passive: true
            }
        );

        botao.addEventListener(
            "pointercancel",
            () => {

                botao.style.transform =
                    "";

            },
            {
                passive: true
            }
        );

    });
}


/* =====================================================
   INICIAR TODOS OS EFEITOS
===================================================== */

function iniciarEfeitos() {

    adicionarAnimacoes();

    ativarMenu();

    ativarAnimacoesCards();

    ativarToqueRoxo();

    criarBarraScroll();

    melhorarVideos();

    ativarFeedbackBotoes();

}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        adicionarAnimacoes();

        criarParticulasRoxas();

        criarOrbRoxo();

    }
);
