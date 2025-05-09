const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

document.getElementById('verificarBtn').addEventListener('click', function () {
  const palpite = parseInt(document.getElementById('palpite').value);
  const dica = document.getElementById('dica');
  const tentativasElem = document.getElementById('tentativas');
  
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    dica.textContent = 'Por favor, insira um número entre 1 e 100.';
    return;
  }

  tentativas++;
  
  if (palpite < numeroAleatorio) {
    dica.textContent = 'O número é maior!';
  } else if (palpite > numeroAleatorio) {
    dica.textContent = 'O número é menor!';
  } else {
    dica.textContent = `Parabéns! Você acertou o número em ${tentativas} tentativas.`;
  }
  
  tentativasElem.textContent = `Tentativas: ${tentativas}`;
});