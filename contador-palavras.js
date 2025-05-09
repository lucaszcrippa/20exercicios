document.getElementById('contarBtn').addEventListener('click', function () {
    const texto = document.getElementById('texto').value.trim();
    const palavras = texto.split(/\s+/).filter(Boolean);
    const letras = texto.replace(/\s+/g, '').length;
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
      Palavras: ${palavras.length}<br>
      Letras: ${letras}
    `;
  });