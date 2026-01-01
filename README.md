# 📋 Formulário de Cadastro de Desenvolvedores

Um formulário interativo e responsivo para cadastro de desenvolvedores, com validação e sistema de confirmação de dados.

## 🎯 Sobre o Projeto

Este projeto é um formulário de cadastro completo que coleta informações profissionais de desenvolvedores, incluindo nome, e-mail, área de atuação (Front-end, Back-end ou Full Stack), senioridade e tecnologias utilizadas.

### ✨ Principais Funcionalidades

- **Formulário semântico** com validação de campos obrigatórios
- **Sistema de confirmação interativo** (JavaScript)
- **Edição de dados** antes da finalização
- **Design responsivo** e intuitivo
- **Feedback visual** para o usuário

## 🚀 Nova Feature: Confirmação e Edição

A principal funcionalidade deste projeto é o **sistema de confirmação de dados com JavaScript**, que permite:

1. **Revisão completa** - Após preencher o formulário, o usuário visualiza todos os dados inseridos em uma tela de confirmação
2. **Edição facilitada** - Botão "Editar" que retorna ao formulário com todos os campos preenchidos
3. **Confirmação final** - Botão "Confirmar" que finaliza o cadastro
4. **Email de confirmação automático** - O usuário recebe um email com todos os dados cadastrados usando EmailJS
5. **Mensagem de sucesso** - Feedback visual confirmando o cadastro e envio do email

### Como funciona?

```
Preenchimento → Confirmação → Edição (opcional) → Envio de Email → Finalização
```

O JavaScript intercepta o envio do formulário, exibe uma tela de revisão, permite que o usuário edite as informações quantas vezes precisar e, ao confirmar, envia automaticamente um email de confirmação com todos os dados cadastrados.

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e responsividade
- **JavaScript** - Interatividade e validação
- **EmailJS** - Serviço de envio de emails (200 emails/mês grátis)

## 📁 Estrutura do Projeto

```
projeto/
├── index.html
├── css/
│   └── styles.css
└── js/
    └── script.js
```

## ⚙️ Configuração do EmailJS

Para que o envio de emails funcione corretamente, você precisa configurar o EmailJS:

### Passo 1: Criar conta no EmailJS
1. Acesse https://www.emailjs.com/
2. Crie uma conta gratuita
3. Confirme seu email

### Passo 2: Configurar Email Service
1. No dashboard, vá em **Email Services**
2. Adicione um novo serviço (Gmail, Outlook, etc.)
3. Conecte sua conta de email
4. Copie o **Service ID**

### Passo 3: Criar Template de Email
1. Vá em **Email Templates**
2. Crie um novo template
3. Configure o campo **To Email** como `{{email}}`
4. Use as variáveis: `{{nome}}`, `{{sobrenome}}`, `{{email}}`, `{{devweb}}`, `{{senioridade}}`, `{{tecnologias}}`, `{{experiencia}}`
5. Copie o **Template ID**

### Passo 4: Obter Public Key
1. Vá em **Account** → **General**
2. Copie sua **Public Key**

### Passo 5: Configurar o código
Abra `js/script.js` e substitua as seguintes linhas com suas credenciais:

```javascript
const EMAILJS_PUBLIC_KEY = 'sua_public_key_aqui';
const EMAILJS_SERVICE_ID = 'seu_service_id_aqui';
const EMAILJS_TEMPLATE_ID = 'seu_template_id_aqui';
```

📖 **Guia completo de configuração disponível no arquivo `GUIA_EMAILJS.md`**

## 🎨 Paleta de Cores

- Primary: `#380B61`
- Secondary: `#59429D`
- Background: `#F0F8FF`
- Accent: `#CCBBFF`
- Success: `#28A745`

## 🖥️ Como Usar

1. Clone este repositório
```bash
git clone https://github.com/jonasnunees/formulario-cadastro-dev.git
```

2. Configure o EmailJS seguindo os passos na seção **Configuração do EmailJS**

3. Abra o arquivo `index.html` no seu navegador

4. Preencha o formulário e teste a funcionalidade de confirmação e envio de email!

## 📸 Preview

O formulário coleta as seguintes informações:
- Nome e Sobrenome
- E-mail
- Área de desenvolvimento (Front-end/Back-end/Full Stack)
- Nível de senioridade (Junior/Pleno/Senior)
- Tecnologias (HTML, CSS, JavaScript, PHP, C#, Python, Java)
- Experiência profissional

## ✉️ Funcionalidade de Email

Após a confirmação dos dados, o sistema envia automaticamente um email para o usuário contendo:
- Nome completo
- Email cadastrado
- Área de desenvolvimento
- Nível de senioridade
- Tecnologias selecionadas
- Descrição da experiência

O email é enviado através do **EmailJS**, um serviço gratuito que permite enviar emails diretamente do front-end sem necessidade de backend.

## 🔧 Requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Conexão com internet (para envio de emails)
- Conta no EmailJS (gratuita - 200 emails/mês)

## 👏 Créditos

Projeto original criado por **Rafaela Ballerini**

### Conecte-se com a Rafaela:

- 💻 [GitHub](http://github.com/rafaballerini)
- 📷 [Instagram](http://instagram.com/rafaballerini)
- 💬 [Discord](https://discord.gg/wagxzStdcR)
- 🎵 [TikTok](https://vm.tiktok.com/ZSp8sjEr/)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
