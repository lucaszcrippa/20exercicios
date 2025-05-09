document.getElementById('tabuadaForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('tabuadaResultado');
  
    if (isNaN(numero) || numero <= 0) {
      resultado.innerHTML = 'Por favor, insira um número válido maior que zero.';
      return;
    }
  
    let tabuadaHTML = '<ul>';
    for (let i = 1; i <= 10; i++) {
      tabuadaHTML += `<li>${numero} x ${i} = ${numero * i}</li>`;
    }
    tabuadaHTML += '</ul>';
  
    resultado.innerHTML = tabuadaHTML;
  });