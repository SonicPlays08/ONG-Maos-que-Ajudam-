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
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => menu.removeAttribute('open'));
        });
    },

    iniciarFadeIn() {
        window.addEventListener('load', () => {
            document.querySelectorAll('.alerta').forEach(alerta => {
                alerta.style.opacity = '0';
                setTimeout(() => {
                    alerta.style.transition = 'opacity 0.5s';
                    alerta.style.opacity = '1';
                }, 300);
            });
        });
    },

    iniciarToastDoacoes() {
        document.querySelectorAll('.card-forma .botao').forEach(botao => {
            botao.addEventListener('click', () => {
                this.mostrarToast(window.CONFIG.mensagens.doacao);
            });
        });
    }
};