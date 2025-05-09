document.getElementById('verificarBtn').addEventListener('click', function() {
    const input = document.getElementById('palavraInput').value.trim().toLowerCase();
    const resultado = document.getElementById('resultado');
  
    const cleanInput = input.replace(/[^a-z0-9]/gi, ''); // Remove espaços e caracteres especiais
    const reversed = cleanInput.split('').reverse().join('');
  
    if (cleanInput === reversed) {
      resultado.textContent = 'É um palíndromo!';
      resultado.style.color = 'green';
    } else {
      resultado.textContent = 'Não é um palíndromo.';
      resultado.style.color = 'red';
    }
  });