const imgPainel = document.querySelectorAll('.imgPainel');
const setaAvancar = document.getElementById('btnAvancar');
const setaVoltar = document.getElementById('btnVoltar');
let imgAtual = 0;

setaAvancar.addEventListener('click', function () {
    const totalDeImgs = imgPainel.length - 1
    if (imgAtual === totalDeImgs) {
        return;
    }
    imgAtual++;
    imgPainel.forEach(img => {
        img.classList.remove('mostrar');
    });
    imgPainel[imgAtual].classList.add('mostrar');
})

setaVoltar.addEventListener('click', function () {
    if (imgAtual === 0) {
        return;
    }
    imgAtual--;
    imgPainel.forEach(img => {
        img.classList.remove('mostrar');
    });
    imgPainel[imgAtual].classList.add('mostrar');
})