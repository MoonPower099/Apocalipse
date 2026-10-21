document.querySelectorAll(".verse-toggle").forEach(botao => {
    botao.addEventListener("click", () => {
        const cartao = botao.closest(".verse-card");
        const conteudo = cartao.querySelector(".verse-content");
        const seta = cartao.querySelector(".verse-arrow");

        const fechado = conteudo.classList.contains("hidden");

        conteudo.classList.toggle("hidden");
        botao.setAttribute("aria-expanded", fechado);
        seta.textContent = fechado ? "−" : "+";
    });
});