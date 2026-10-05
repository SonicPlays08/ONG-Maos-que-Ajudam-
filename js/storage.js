// ===== STORAGE.JS – PERSISTÊNCIA =====
window.Storage = {
    salvar(chave, valor) {
        try {
            localStorage.setItem(chave, JSON.stringify(valor));
        } catch (e) {
            console.warn('Erro ao salvar:', e);
        }
    },

    recuperar(chave, padrao = null) {
        try {
            const valor = localStorage.getItem(chave);
            return valor ? JSON.parse(valor) : padrao;
        } catch (e) {
            console.warn('Erro ao recuperar:', e);
            return padrao;
        }
    },

    remover(chave) {
        localStorage.removeItem(chave);
    }
};