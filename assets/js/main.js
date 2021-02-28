window.addEventListener("scroll", function(){
    var cabecalho = document.querySelector("header");
    cabecalho.classList.toggle("pegar", window.scrollY > 0);
})