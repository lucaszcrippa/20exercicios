document.getElementById('formCadastro').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
  
    const mensagemErro = document.getElementById('mensagemErro');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!nome || !email || !senha) {
      mensagemErro.textContent = 'Todos os campos são obrigatórios!';
      return;
    }
  
    if (!emailRegex.test(email)) {
      mensagemErro.textContent = 'E-mail inválido!';
      return;
    }
  
    mensagemErro.textContent = 'Cadastro realizado com sucesso!';
    mensagemErro.style.color = 'green';
  });
  