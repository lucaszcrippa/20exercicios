document.getElementById('verificarBtn').addEventListener('click', function () {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(numero) || numero <= 1) {
      resultado.textContent = 'Por favor, insira um número válido maior que 1.';
      return;
    }
  
    let isPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        isPrimo = false;
        break;
      }
    }
  
    if (isPrimo) {
      resultado.textContent = `${numero} é um número primo!`;
    } else {
      resultado.textContent = `${numero} não é um número primo.`;
    }
  });
  