//menu
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".container-menu").classList.toggle("show-menu");
    });

//tela de inicio

//cabeçalho que acompanha a tela

window.addEventListener('scroll', function() {
  var cabecalho = document.getElementById('area-cabeçalho');
  if (window.pageYOffset > 10) {
    cabecalho.classList.add('scrolled');
  } else {
    cabecalho.classList.remove('scrolled');
  }
});

const collapseElementList = document.querySelectorAll('.collapse p');
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl));


 

