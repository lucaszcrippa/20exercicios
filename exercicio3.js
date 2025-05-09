function calcular() {
    const p = parseFloat(document.getElementById('peso').value);
    const a = parseFloat(document.getElementById('altura').value);
    const res = document.getElementById('resultado');
  
    if (!p || !a) return res.textContent = 'Preencha os campos!';
    const imc = (p / (a * a)).toFixed(2);
    let msg = '';
    if (imc < 18.5) msg = 'Abaixo do peso';
    else if (imc < 25) msg = 'Peso normal';
    else if (imc < 30) msg = 'Sobrepeso';
    else msg = 'Obesidade';
    res.textContent = `IMC: ${imc} - ${msg}`;
  }