// ===== MAIN.JS – PONTO DE ENTRADA =====
document.addEventListener('DOMContentLoaded', () => {
    // UI
    window.UI.atualizarAno();
    window.UI.iniciarRolagemSuave();
    window.UI.iniciarMenuMobile();
    window.UI.iniciarFadeIn();
    window.UI.iniciarToastDoacoes();

    // Saudação personalizada
    const nome = localStorage.getItem(window.CONFIG.chaves.nomeUsuario);
    if (nome) {
        const h1 = document.querySelector('header h1');
        if (h1) h1.textContent = `Bem-vindo(a), ${nome}!`;
    }

    // Contador de visitas
    const visitas = parseInt(localStorage.getItem(window.CONFIG.chaves.visitas) || '0', 10) + 1;
    localStorage.setItem(window.CONFIG.chaves.visitas, visitas);
    window.UI.mostrarToast(
        visitas === 1
            ? window.CONFIG.mensagens.boasVindas
            : window.CONFIG.mensagens.retorno(visitas)
    );

    // Última seção visitada
    const ultima = localStorage.getItem(window.CONFIG.chaves.ultimaSecao);
    if (ultima) {
        const destino = document.querySelector(ultima);
        if (destino) {
            setTimeout(() => destino.scrollIntoView({ behavior: 'smooth', block: 'start' }), 500);
        }
    }

    // Formulário e máscaras
    window.Form.iniciar();
    window.Masks.iniciar();

    // Histórico de doações
    document.querySelectorAll('.card-forma .botao').forEach(botao => {
        botao.addEventListener('click', () => {
            const tipo = botao.closest('.card-forma').querySelector('h4').textContent.trim();
            const historico = window.Storage.recuperar(window.CONFIG.chaves.historico, []);
            historico.push({ tipo, data: new Date().toISOString() });
            window.Storage.salvar(window.CONFIG.chaves.historico, historico);
        });
    });
});