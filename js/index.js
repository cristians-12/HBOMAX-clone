const observador = new IntersectionObserver((entradas)=>{
    entradas.forEach((e)=>{
        if(e.isIntersecting){
            e.target.classList.add('mostrar');
            console.log("hola")
        }else{
            e.target.classList.remove('mostrar');
        }
    })
});

const oculto = document.querySelectorAll(".hidden");

oculto.forEach((e)=>(
    observador.observe(e)
))