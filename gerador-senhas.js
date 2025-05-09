document.getElementById('gerarBtn').addEventListener('click', () => {
    const tamanho = parseInt(document.getElementById('tamanho').value);
    const resultado = document.getElementById('senhaResultado');
  
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?';
    let senha = '';
  
    if (isNaN(tamanho) || tamanho < 4 || tamanho > 32) {
      resultado.textContent = 'Insira um tamanho entre 4 e 32.';
      return;
    }
  
    for (let i = 0; i < tamanho; i++) {
      const index = Math.floor(Math.random() * caracteres.length);
      senha += caracteres.charAt(index);
    }
  
    resultado.textContent = senha;
  });