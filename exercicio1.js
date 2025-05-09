function verificarParOuImpar() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    if (numero === '') {
      resultado.textContent = 'Por favor, digite um número.';
      return;
    }
    resultado.textContent = numero % 2 === 0 ? 'É par!' : 'É ímpar!';
  }
  