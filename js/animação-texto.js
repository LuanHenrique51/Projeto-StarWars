// texto bonitinho

// o debouce ta fazendo o script funcionar direito, sem ele a função não acontece e o texto continua com opacidade 0
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

/*
    A função debounce recebe três parâmetros:

    func: A função que será executada.
    wait: O tempo de espera em milissegundos. Após esse período de tempo, a função será executada se não houver mais chamadas.
    immediate: Um valor booleano opcional. Se for true, a função será executada imediatamente na primeira chamada e, em seguida,
    aguardará o tempo de espera até poder ser chamada novamente. Se for false ou não for fornecido, a função aguardará o tempo 
    de espera antes de ser executada pela primeira vez.
*/
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.80);
    target.forEach(function(elemento) {
      if((windowTop) > elemento.offsetTop) {
        elemento.classList.add(animationClass);
      } else {
        elemento.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) { //length me da o total de itens q existem dentro do target
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 1 /*quanto tempo que vai ter a espera, nesse caso ta em 1 ms*/ ));
  }