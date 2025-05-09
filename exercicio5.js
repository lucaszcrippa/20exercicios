document.getElementById('idadeForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const anoNascimento = parseInt(document.getElementById('ano').value);
    const anoAtual = new Date().getFullYear();
    const resultado = document.getElementById('resultado');
  
    if (isNaN(anoNascimento) || anoNascimento > anoAtual || anoNascimento < 1900) {
      resultado.textContent = 'Ano inválido. Por favor, insira um ano entre 1900 e o atual.';
      return;
    }
  
    const idade = anoAtual - anoNascimento;
    let faixa = '';
  
    if (idade < 18) {
      faixa = 'menor de idade';
    } else if (idade < 60) {
      faixa = 'adulto(a)';
    } else {
      faixa = 'idoso(a)';
    }
  
    resultado.textContent = `Você tem ${idade} anos e é ${faixa}.`;
  });