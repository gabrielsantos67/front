var alternador = document.querySelector('.js-botao-chaveador');

alternador.onclick = function(){
    var menu = DocumentTimeline.querySelector('js-menu');
    menu.classList.toggle('menu--exibindo');
}