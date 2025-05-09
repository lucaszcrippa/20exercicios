function contar() {
    const ini = +document.getElementById("inicio").value;
    const fim = +document.getElementById("fim").value;
    let passo = +document.getElementById("passo").value;
    const out = document.getElementById("saida");
    
    if (!passo) passo = 1;
    out.innerHTML = '';
    if (ini < fim) {
      for (let i = ini; i <= fim; i += passo) {
        out.innerHTML += `${i} 👉 `;
      }
    } else {
      for (let i = ini; i >= fim; i -= passo) {
        out.innerHTML += `${i} 👉 `;
      }
    }
    out.innerHTML += '🏁';
  }