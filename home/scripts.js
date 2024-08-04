// ABRIR E FECHAR MENU LATERAL DIREITO
let btnOpenMenu = document.getElementById('btn-open')
let btnCloseMenu = document.getElementById('btn-close')
let Menu = document.getElementById('menu-lateral')
let overlay = document.getElementById('overlay')

btnOpenMenu.addEventListener('click', ()=>{ 
    Menu.classList.add('abrir-menu')
})

btnCloseMenu.addEventListener('click', ()=>{
    Menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    Menu.classList.remove('abrir-menu')
})

// ALTERNAR OS CONTEUDOS QUANDO CLICAR NA BARRA INFERIOR
document.addEventListener('DOMContentLoaded', () => {
    const barraInferior = document.getElementById('barra-inferior');
    const ConteudoOriginal = document.getElementById('conteudo-original');
    const ConteudoBilhete = document.getElementById('conteudo-bilhete');
    const restoreButton = document.getElementById('restore-content');

    function alternarConteudo() {
        const OriginalVisivel = ConteudoOriginal.style.display !== 'none';
        ConteudoOriginal.style.display = OriginalVisivel ? 'none' : 'block';
        ConteudoBilhete.style.display = OriginalVisivel ? 'block' : 'none';
    };

    barraInferior.addEventListener('click', alternarConteudo);

    if (restoreButton) {
        restoreButton.addEventListener('click', () => {
            ConteudoOriginal.style.display = 'block';
            ConteudoBilhete.style.display = 'none';
        });
    }
});

