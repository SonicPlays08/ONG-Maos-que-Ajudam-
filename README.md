# Mãos que Ajudam

Site institucional da ONG **Mãos que Ajudam**, desenvolvido como projeto acadêmico de front-end. O objetivo é conectar voluntários e doadores a causas sociais que transformam comunidades.

---

## Sobre o Projeto

O site apresenta:
- **Quem Somos** — missão, valores e equipe
- **Como Ser Voluntário** — áreas de atuação e inscrição
- **Como Doar** — campanhas ativas e formas de doação
- **Nosso Impacto** — resultados e números
- **Contato** — canais de comunicação

---

## Tecnologias Utilizadas

| Categoria | Tecnologias |
|-----------|-------------|
| **Front-end** | HTML5, CSS3, JavaScript (Vanilla JS) |
| **Layout** | CSS Grid (12 colunas), Flexbox |
| **Persistência** | localStorage + JSON |
| **Máscaras** | IMask.js (via CDN) |
| **Versionamento** | Git + GitFlow |

---

## Estrutura de Pastas

maos-que-ajudam/
│
├── index.html
├── projetos.html
├── cadastro.html
│
├── css/
│ └── style.css
│
├── js/
│ ├── config.js → Constantes globais
│ ├── storage.js → Persistência (localStorage)
│ ├── ui.js → Interface e interações
│ ├── form.js → Formulário e validação
│ ├── masks.js → Máscaras (IMask.js)
│ └── main.js → Ponto de entrada
│
└── image/
└── (todas as imagens do projeto)

---

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/maos-que-ajudam.git
   
2. Abra o arquivo index.html no navegador.

Funcionalidades
✅ Layout responsivo (mobile, tablet, desktop)

✅ Menu hambúrguer em telas pequenas

✅ Rolagem suave entre seções

✅ Validação personalizada de formulário

✅ Máscaras automáticas (CPF, telefone, CEP)

✅ Rascunho automático do cadastro

✅ Toast de agradecimento nas doações

✅ Saudação personalizada com localStorage

✅ Contador de visitas

✅ Acessibilidade (aria-labels, contraste, navegação por teclado)

---

GitFlow
O projeto segue o padrão GitFlow:

| Pasta | Arquivos |
|-----------|-------------|
| **main** | Código estável em produção |
| **develop** | Desenvolvimento contínuo |
| **feature** | Novas funcionalidades |
| **release** | Preparação de versão |
| **hotfix** | Correções urgentes |

---

📫 Contato
LinkedIn: [link-do-linkedin]

GitHub: [https://github.com/seu-usuario]

E-mail: [seu-email@email.com]

"Dados são respostas esperando a pergunta certa."

Vamos construir algo simples e transformador juntos? 🚀


---

## 📌 O QUE ESSE README COBRE

| Seção | O que mostra |
|-------|--------------|
| **Título e descrição** | Identidade do projeto |
| **Sobre o Projeto** | O que o site apresenta |
| **Tecnologias** | Stack utilizada |
| **Estrutura de Pastas** | Organização dos arquivos |
| **Como Executar** | Instruções simples |
| **Funcionalidades** | Lista do que foi implementado |
| **GitFlow** | Estrutura de branches |
| **Contato** | Canais de comunicação |
