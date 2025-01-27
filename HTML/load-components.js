// load-components.js
fetch('Navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });

  fetch('rodape.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('rodape').innerHTML = data;
  })
  .catch(error => console.error('Erro ao carregar o rodapé:', error));

