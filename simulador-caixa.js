document.getElementById('calcularBtn').addEventListener('click', function() {
    const valor = parseInt(document.getElementById('valor').value);
    const resultado = document.getElementById('resultado');
    let valorRestante = valor;
    let notas = { 100: 0, 50: 0, 10: 0, 1: 0 };
  
    if (isNaN(valor) || valor <= 0) {
      resultado.textContent = 'Por favor, insira um valor válido!';
      return;
    }
  
    for (let nota in notas) {
      while (valorRestante >= nota) {
        valorRestante -= nota;
        notas[nota]++;
      }
    }
  
    resultado.innerHTML = `
      R$100: ${notas[100]}<br>
      R$50: ${notas[50]}<br>
      R$10: ${notas[10]}<br>
      R$1: ${notas[1]}<br>
    `;
  });