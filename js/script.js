// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // ===== CONFIGURAÇÃO DO EMAILJS =====
    // IMPORTANTE: Substitua estas variáveis pelas suas credenciais do EmailJS
    const EMAILJS_PUBLIC_KEY = 's0hSeKxhe6LKq6UEo'; // Ex: 'xxxxxxxxxxx'
    const EMAILJS_SERVICE_ID = 'service_sija6pw'; // Ex: 'service_xxxxxxx'
    const EMAILJS_TEMPLATE_ID = 'template_ti01cq6'; // Ex: 'template_xxxxxxx'
    
    // Inicializa o EmailJS com sua Public Key
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    const main = document.querySelector('main');
    
    // Armazena o HTML original do formulário
    let formularioOriginal = main.innerHTML;
    
    // Função para processar o formulário
    function processarFormulario(e) {
        e.preventDefault();
        
        // Coleta os dados do formulário atual
        const formAtual = document.querySelector('form');
        const formData = new FormData(formAtual);
        const dados = {
            nome: formData.get('nome'),
            sobrenome: formData.get('sobrenome'),
            email: formData.get('email'),
            devweb: formData.get('devweb'),
            senioridade: formData.get('senioridade'),
            tecnologias: formData.getAll('tecnologias'),
            experiencia: formData.get('experiencia')
        };
        
        // Formata as tecnologias
        const tecnologiasTexto = dados.tecnologias.length > 0 
            ? dados.tecnologias.join(', ') 
            : 'Nenhuma tecnologia selecionada';
        
        // Formata o tipo de desenvolvedor
        const devwebTexto = {
            'frontend': 'Front-end',
            'backend': 'Back-end',
            'fullstack': 'Full Stack'
        }[dados.devweb] || dados.devweb;
        
        // Formata a senioridade
        const senioridadeTexto = dados.senioridade.charAt(0).toUpperCase() + dados.senioridade.slice(1);
        
        // Cria a tela de confirmação
        main.innerHTML = `
            <header>
                <h1 class="titulo">Confirme seus dados</h1>
                <p class="subtitulo">Revise as informações antes de finalizar</p>
            </header>
            
            <div class="confirmacao">
                <div class="campo-confirmacao">
                    <strong>Nome completo:</strong>
                    <p>${dados.nome} ${dados.sobrenome}</p>
                </div>
                
                <div class="campo-confirmacao">
                    <strong>E-mail:</strong>
                    <p>${dados.email}</p>
                </div>
                
                <div class="campo-confirmacao">
                    <strong>Área de desenvolvimento:</strong>
                    <p>${devwebTexto}</p>
                </div>
                
                <div class="campo-confirmacao">
                    <strong>Senioridade:</strong>
                    <p>${senioridadeTexto}</p>
                </div>
                
                <div class="campo-confirmacao">
                    <strong>Tecnologias:</strong>
                    <p>${tecnologiasTexto}</p>
                </div>
                
                <div class="campo-confirmacao">
                    <strong>Experiência:</strong>
                    <p>${dados.experiencia || 'Não informada'}</p>
                </div>
                
                <div class="botoes-confirmacao">
                    <button type="button" class="botao botao-editar">Editar</button>
                    <button type="button" class="botao botao-confirmar">Confirmar</button>
                </div>
            </div>
        `;
        
        // Adiciona eventos aos novos botões
        const botaoEditar = document.querySelector('.botao-editar');
        const botaoConfirmar = document.querySelector('.botao-confirmar');
        
        botaoEditar.addEventListener('click', function() {
            // Restaura o formulário original
            main.innerHTML = formularioOriginal;
            
            // Preenche o formulário com os dados anteriores
            document.getElementById('nome').value = dados.nome;
            document.getElementById('sobrenome').value = dados.sobrenome;
            document.getElementById('email').value = dados.email;
            
            // Marca o radio button correto
            document.querySelector(`input[name="devweb"][value="${dados.devweb}"]`).checked = true;
            
            // Seleciona a senioridade
            document.getElementById('senioridade').value = dados.senioridade;
            
            // Marca os checkboxes das tecnologias
            dados.tecnologias.forEach(tech => {
                const checkbox = document.querySelector(`input[name="tecnologias"][value="${tech}"]`);
                if (checkbox) checkbox.checked = true;
            });
            
            // Preenche a experiência
            document.getElementById('experiencia').value = dados.experiencia;
            
            // Reanexa o evento de submit ao formulário restaurado
            const novoForm = document.querySelector('form');
            novoForm.addEventListener('submit', processarFormulario);
        });
        
        botaoConfirmar.addEventListener('click', function() {
            // Desabilita o botão para evitar cliques múltiplos
            botaoConfirmar.disabled = true;
            botaoConfirmar.textContent = 'Enviando...';
            
            // Prepara os dados para o email
            const templateParams = {
                nome: dados.nome,
                sobrenome: dados.sobrenome,
                email: dados.email,
                devweb: devwebTexto,
                senioridade: senioridadeTexto,
                tecnologias: tecnologiasTexto,
                experiencia: dados.experiencia || 'Não informada'
            };
            
            // Envia o email usando EmailJS
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
                .then(function(response) {
                    console.log('Email enviado com sucesso!', response.status, response.text);
                    
                    // Exibe mensagem de sucesso
                    main.innerHTML = `
                        <header>
                            <h1 class="titulo">Cadastro concluído!</h1>
                            <p class="subtitulo">Suas informações foram registradas com sucesso</p>
                        </header>
                        
                        <div class="mensagem-sucesso">
                            <p>✓ Obrigado por completar seu cadastro, ${dados.nome}!</p>
                            <p>📧 Um email de confirmação foi enviado para <strong>${dados.email}</strong></p>
                            <button type="button" class="botao" onclick="location.reload()">Novo cadastro</button>
                        </div>
                    `;
                }, function(error) {
                    console.error('Erro ao enviar email:', error);
                    
                    // Exibe mensagem de erro
                    main.innerHTML = `
                        <header>
                            <h1 class="titulo">Ops! Algo deu errado</h1>
                            <p class="subtitulo">Não foi possível enviar o email</p>
                        </header>
                        
                        <div class="mensagem-erro">
                            <p>❌ Ocorreu um erro ao enviar o email de confirmação.</p>
                            <p>Por favor, verifique suas configurações do EmailJS.</p>
                            <p><strong>Erro:</strong> ${error.text || 'Erro desconhecido'}</p>
                            <button type="button" class="botao" onclick="location.reload()">Tentar novamente</button>
                        </div>
                    `;
                });
        });
    }
    
    // Anexa o evento de submit ao formulário inicial
    const form = document.querySelector('form');
    form.addEventListener('submit', processarFormulario);
});