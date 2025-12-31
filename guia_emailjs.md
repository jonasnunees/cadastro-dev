# 📧 Guia de Configuração do EmailJS

## Passo 1: Criar Conta no EmailJS

1. Acesse: https://www.emailjs.com/
2. Clique em **Sign Up**
3. Preencha seus dados e crie a conta
4. Confirme seu email

---

## Passo 2: Adicionar Email Service

1. No dashboard, clique em **Email Services** (menu lateral)
2. Clique no botão **Add New Service**
3. Escolha seu provedor de email:
   - **Gmail** (recomendado para testes)
   - Outlook
   - Yahoo
   - Ou outro de sua preferência

### Para Gmail:
1. Selecione **Gmail**
2. Clique em **Connect Account**
3. Faça login com sua conta Google
4. Autorize o EmailJS a enviar emails
5. **Copie o Service ID** (exemplo: `service_abc123`)

---

## Passo 3: Criar Template de Email

1. No menu lateral, clique em **Email Templates**
2. Clique em **Create New Template**
3. Cole o template abaixo:

### Subject (Assunto):
```
Confirmação de Cadastro - {{nome}}
```

### Content (Corpo do Email):
```
Olá {{nome}} {{sobrenome}}!

Seu cadastro foi realizado com sucesso! 🎉

Aqui estão suas informações cadastradas:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 E-mail: {{email}}
💻 Área de Desenvolvimento: {{devweb}}
📊 Senioridade: {{senioridade}}
🛠️ Tecnologias: {{tecnologias}}

📝 Experiência Profissional:
{{experiencia}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Obrigado por se cadastrar em nosso sistema!

Caso tenha alguma dúvida, responda este email.

---
Sistema de Cadastro de Desenvolvedores
Powered by EmailJS
```

4. **IMPORTANTE:** Configure o campo **To Email** como `{{email}}` para enviar para o usuário
5. Clique em **Save**
6. **Copie o Template ID** (exemplo: `template_xyz789`)

---

## Passo 4: Obter Public Key

1. No menu lateral, clique em **Account**
2. Vá até a aba **General**
3. Na seção **API Keys**, você verá sua **Public Key**
4. **Copie a Public Key** (exemplo: `abcdefghijk123456`)

---

## Passo 5: Configurar o Código

Abra o arquivo `js/script.js` e substitua as seguintes linhas:

```javascript
const EMAILJS_PUBLIC_KEY = 'SUA_PUBLIC_KEY_AQUI';
const EMAILJS_SERVICE_ID = 'SEU_SERVICE_ID_AQUI';
const EMAILJS_TEMPLATE_ID = 'SEU_TEMPLATE_ID_AQUI';
```

### Exemplo de configuração final:
```javascript
const EMAILJS_PUBLIC_KEY = 'abcdefghijk123456';
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_xyz789';
```

---

## Passo 6: Testar o Formulário

1. Abra o arquivo `index.html` no navegador
2. Preencha o formulário com **seu próprio email**
3. Clique em **Concluído**
4. Revise os dados e clique em **Confirmar**
5. Aguarde a mensagem de sucesso
6. Verifique sua caixa de entrada (e spam/lixo eletrônico)

---

## 🔍 Solução de Problemas

### Problema: "Email não está sendo enviado"

**Verificar:**
1. As 3 chaves estão corretas no `script.js`?
2. O Service está ativo no dashboard do EmailJS?
3. O email está na caixa de spam?
4. Abra o Console do navegador (F12) para ver erros

### Problema: "Erro 401 - Unauthorized"

**Solução:** Sua Public Key está incorreta. Copie novamente do dashboard.

### Problema: "Erro 404 - Not Found"

**Solução:** O Service ID ou Template ID está incorreto. Verifique no dashboard.

### Problema: "Email cai no spam"

**Solução:** 
- Use um domínio de email profissional
- Configure SPF e DKIM (avançado)
- Peça para os usuários marcarem como "Não é spam"

---

## 📊 Limites do Plano Gratuito

- **200 emails por mês**
- **2 templates de email**
- **1 email service**

Para projetos maiores, considere o plano pago.

---

## ✅ Checklist de Configuração

- [ ] Conta criada no EmailJS
- [ ] Email Service configurado
- [ ] Template de email criado
- [ ] Public Key copiada
- [ ] Service ID copiado
- [ ] Template ID copiado
- [ ] Códigos atualizados no `script.js`
- [ ] Teste realizado com sucesso

---

## 🎉 Pronto!

Seu formulário agora envia emails automaticamente! 

Qualquer dúvida, consulte a documentação oficial: https://www.emailjs.com/docs/