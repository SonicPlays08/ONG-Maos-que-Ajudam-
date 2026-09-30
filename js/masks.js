// ===== MASKS.JS – MÁSCARAS =====
window.Masks = {
    iniciar() {
        if (typeof IMask === 'undefined') return;
        const cpf = document.getElementById('cpf');
        if (cpf) IMask(cpf, { mask: '000.000.000-00' });
        const tel = document.getElementById('telefone');
        if (tel) IMask(tel, { mask: '(00) 00000-0000' });
        const cep = document.getElementById('cep');
        if (cep) IMask(cep, { mask: '00000-000' });
    }
};