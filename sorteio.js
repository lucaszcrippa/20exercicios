document.getElementById('sortearBtn').addEventListener('click', () => {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const resultado = document.getElementById('numeroSorteado');
  
    if (isNaN(min) || isNaN(max) || min >= max) {
      resultado.textContent = 'Valores inválidos. Mínimo deve ser menor que máximo.';
      return;
    }
  
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    resultado.textContent = `Número sorteado: ${numero}`;
  });