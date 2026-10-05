// ===== FORM.JS – FORMULÁRIO =====
window.Form = {
    obterMensagemErro(campo) {
        if (campo.validity.valueMissing) return 'Este campo é obrigatório.';
        if (campo.validity.typeMismatch && campo.type === 'email') return 'Digite um e-mail válido (ex: nome@email.com).';
        if (campo.validity.patternMismatch) {
            if (campo.id === 'cpf') return 'Digite o CPF no formato 000.000.000-00.';
            if (campo.id === 'telefone') return 'Digite o telefone no formato (00) 00000-0000.';
            if (campo.id === 'cep') return 'Digite o CEP no formato 00000-000.';
        }
        return 'Preencha este campo corretamente.';
    },

    validar(campo) {
        const msg = campo.parentElement.querySelector('.mensagem-erro');
        if (campo.validity.valid) {
            campo.classList.remove('invalido');
            campo.classList.add('valido');
            campo.setAttribute('aria-invalid', 'false');
            if (msg) msg.textContent = '';
        } else {
            campo.classList.remove('valido');
            campo.classList.add('invalido');
            campo.setAttribute('aria-invalid', 'true');
            if (msg) msg.textContent = this.obterMensagemErro(campo);
        }
    },

    iniciar() {
        const campos = document.querySelectorAll('.campo input, .campo select');
        const form = document.querySelector('form');
        if (!campos.length) return;

        if (campos[0]) campos[0].focus();

        const rascunho = window.Storage.recuperar(window.CONFIG.chaves.rascunho, {});
        Object.keys(rascunho).forEach(id => {
            const campo = document.getElementById(id);
            if (campo) campo.value = rascunho[id];
        });

        campos.forEach(campo => {
            campo.addEventListener('input', () => {
                this.validar(campo);
                const dados = {};
                campos.forEach(c => { if (c.id) dados[c.id] = c.value; });
                window.Storage.salvar(window.CONFIG.chaves.rascunho, dados);

                const ind = document.querySelector('.rascunho-salvo');
                if (ind) {
                    ind.classList.add('visivel');
                    setTimeout(() => ind.classList.remove('visivel'), 1500);
                }
            });
            campo.addEventListener('blur', () => this.validar(campo));
        });

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                let ok = true;
                campos.forEach(c => { this.validar(c); if (!c.validity.valid) ok = false; });
                window.UI.mostrarToast(ok ? window.CONFIG.mensagens.sucessoForm : window.CONFIG.mensagens.erroForm);
                if (ok) window.Storage.remover(window.CONFIG.chaves.rascunho);
            });
        }
    }
};