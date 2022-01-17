const imgPainel = document.querySelectorAll('.imgPainel');
const setaAvancar = document.getElementById('btnAvancar');
const setaVoltar = document.getElementById('btnVoltar');
let imgAtual = 0;

function setas() {
    if (imgAtual === 0) {
        setaAvancar.style.opacity = 1;
        setaVoltar.style.opacity = 0.5;
        return;
    } else if(imgAtual > 0){
        setaAvancar.style.opacity = 1;
        setaVoltar.style.opacity = 1;
    }else if(imgAtual < totalDeImgs){
        setaAvancar.style.opacity = 0.5;
        setaVoltar.style.opacity = 1;
        return;
    }
}
/* 
function esconderImg() {
    imgPainel.forEach(img=>{
        img.classList.remove('mostrar')
    })
}

function mostrarImg() {
    imgPainel[imgAtual].classList.add('mostrar')
    
}
*/
setaAvancar.addEventListener('click', function (event) {
    event.preventDefault() //isso aqui faz com que a tela não volte para cima quando clicar na seta

    const totalDeImgs = imgPainel.length - 1
    if (imgAtual >= totalDeImgs) {
        return;
    }
    setas()
    imgAtual++;
    /* 
    esconderImg();
    mostrarImg(); 
    */
    imgPainel.forEach(img => {
        img.classList.remove('mostrar');
    });
    imgPainel[imgAtual].classList.add('mostrar');
})

setaVoltar.addEventListener('click', function (event) {
    event.preventDefault()
    if (imgAtual === 0) {
        return;
    }
    setas()
    imgAtual--;
    /* 
    esconderImg();
    mostrarImg(); 
    */
    imgPainel.forEach(img => {
        img.classList.remove('mostrar');
    });
    imgPainel[imgAtual].classList.add('mostrar');
})