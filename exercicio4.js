document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado = 'Por favor, insira dois números válidos.';
    } else {
      switch (operacao) {
        case '+': resultado = num1 + num2; break;
        case '-': resultado = num1 - num2; break;
        case '*': resultado = num1 * num2; break;
        case '/':
          if (num2 === 0) {
            resultado = 'Divisão por zero não é permitida.';
          } else {
            resultado = num1 / num2;
          }
          break;
        default: resultado = 'Operação inválida.';
      }
    }
  
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  });