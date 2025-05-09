document.getElementById('calcularBtn').addEventListener('click', function () {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      resultado.textContent = 'Por favor, insira todas as notas!';
      return;
    }
  
    const media = (nota1 + nota2 + nota3) / 3;
    let status = '';
  
    if (media >= 7) {
      status = 'Aprovado';
    } else if (media >= 4) {
      status = 'Recuperação';
    } else {
      status = 'Reprovado';
    }
  
    resultado.textContent = `Média: ${media.toFixed(2)} - Status: ${status}`;
  });