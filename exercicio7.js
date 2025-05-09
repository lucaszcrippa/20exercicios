document.getElementById('addItemBtn').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const item = itemInput.value.trim();
  
    if (item === '') {
      return;
    }
  
    const ul = document.getElementById('listaCompras');
    const li = document.createElement('li');
    li.textContent = item;
  
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.addEventListener('click', function() {
      ul.removeChild(li);
    });
  
    li.appendChild(removeBtn);
    ul.appendChild(li);
  
    itemInput.value = ''; // Limpar o campo
  });