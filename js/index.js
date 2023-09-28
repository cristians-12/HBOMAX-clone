const observador = new IntersectionObserver((entradas)=>{
    entradas.forEach((e)=>{
        if(e.isIntersecting){
            e.target.classList.add('mostrar');

        }else{
            // e.target.classList.remove('mostrar');
        }
    })
});

const oculto = document.querySelectorAll(".hidden");

oculto.forEach((e)=>(
    observador.observe(e)
))

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
