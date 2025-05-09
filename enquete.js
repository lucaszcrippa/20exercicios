const votos = {
    JavaScript: 0,
    Python: 0,
    Java: 0
  };
  
  const form = document.getElementById('formEnquete');
  const resultadosDiv = document.getElementById('resultados');
  
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const opcaoSelecionada = document.querySelector('input[name="opcao"]:checked');
  
    if (!opcaoSelecionada) {
      alert('Por favor, selecione uma opção!');
      return;
    }
  
    const escolha = opcaoSelecionada.value;
    votos[escolha]++;
    atualizarResultados();
  });
  
  function atualizarResultados() {
    const total = Object.values(votos).reduce((a, b) => a + b, 0);
    resultadosDiv.innerHTML = '';
  
    for (let linguagem in votos) {
      const quantidade = votos[linguagem];
      const percentual = total > 0 ? ((quantidade / total) * 100).toFixed(1) : 0;
      resultadosDiv.innerHTML += `
        <p>${linguagem}: ${quantidade} votos (${percentual}%)</p>
      `;
    }
  
    resultadosDiv.innerHTML += `<p><strong>Total de votos: ${total}</strong></p>`;
  }
  