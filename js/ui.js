// ===== UI.JS – INTERFACE =====
window.UI = {
    atualizarAno() {
        const el = document.querySelector('footer p');
        if (el) el.textContent = `© ${new Date().getFullYear()} Mãos que Ajudam. Todos os direitos reservados.`;
    },

    mostrarToast(mensagem) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        toast.textContent = mensagem;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('visivel'), 100);
        setTimeout(() => {
            toast.classList.remove('visivel');
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    },

    iniciarRolagemSuave() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                const destino = document.querySelector(href);
                if (!destino) return;
                e.preventDefault();
                destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
                localStorage.setItem('ultimaSecao', href);
                const menu = document.querySelector('.menu-mobile');
                if (menu) menu.removeAttribute('open');
            });
        });
    },

    iniciarMenuMobile() {
        const menu = document.querySelector('.menu-mobile');
        if (!menu) return;

        menu.addEventListener('toggle', () => {
            if (menu.open) {
                const primeiroLink = menu.querySelector('a');
                if (primeiroLink) primeiroLink.focus();
            }
        });

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => menu.removeAttribute('open'));
        });
    },

    iniciarModal() {
        const modal = document.getElementById('modal-doacao');
        if (!modal) return;

        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') modal.close();
        });

        modal.addEventListener('show', () => {
            const botaoFechar = modal.querySelector('.botao');
            if (botaoFechar) botaoFechar.focus();
        });
    },

    iniciarToggleTema() {
        const botao = document.getElementById('toggle-tema');
        if (!botao) return;

        const icone = botao.querySelector('.icone-tema');
    }
}    