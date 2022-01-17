const imgPainel = document.querySelectorAll('.imgPainel');
const setaAvancar = document.getElementById('btnAvancar');
const setaVoltar = document.getElementById('btnVoltar');
let imgAtual = 0;

function setas() {
    if (imgAtual < 1) {
        setaAvancar.style.opacity = 1;
        setaVoltar.style.opacity = 0.5;
    } else if(imgAtual == 1){
        setaAvancar.style.opacity = 1;
        setaVoltar.style.opacity = 1;
    }else if(imgAtual > 1 ){
        setaAvancar.style.opacity = 0.5;
        setaVoltar.style.opacity = 1;
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
setas()
setaAvancar.addEventListener('click', function (event) {
    //isso aqui faz com que a tela não volte para cima quando clicar na seta
    event.preventDefault() 
    const totalDeImgs = imgPainel.length - 1
    if (imgAtual == totalDeImgs) {
        return;
    }
    imgAtual++; 
    setas()
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
    imgAtual--;
    setas()
    /* 
    esconderImg();
    mostrarImg(); 
    */
    imgPainel.forEach(img => {
        img.classList.remove('mostrar');
    });
    imgPainel[imgAtual].classList.add('mostrar');
})