document.addEventListener('DOMContentLoaded', function() {
    var elementos = document.querySelectorAll('.elemento');
    var retrasoInicial = 500;
    var retrasoEntreElementos = 250;
  
    elementos.forEach(function(elemento, indice) {
      setTimeout(function() {
        elemento.style.opacity = '1';
        elemento.style.transform = 'translateY(0)'
      }, retrasoInicial + (indice * retrasoEntreElementos));
    });
  });

  document.addEventListener('DOMContentLoaded', function(){
    var elemento = document.querySelector('.elemento_1');
    setTimeout(function(){
      elemento.style.opacity = '0.5';
    }, 500)
  })