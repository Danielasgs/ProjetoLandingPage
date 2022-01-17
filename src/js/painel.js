const imgPainel = document.querySelectorAll('.imgPainel');
const setaAvancar = document.getElementById('btnAvancar');
const setaVoltar = document.getElementById('btnVoltar');
let imgAtual = 0;

setaAvancar.addEventListener('click', function () {
    const totalDeImgs = imgPainel.length - 1
    if (imgAtual === totalDeImgs) {
        document.getElementsByClassName('.conteudoPrincipal .paineis .seta.btnAvancar').style.opacity = '0.5';
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
        document.getElementsByClassName('.conteudoPrincipal .paineis .seta.btnVoltar').style.opacity = '0.5';
        return;
    }
    imgAtual--;
    imgPainel.forEach(img => {
        img.classList.remove('mostrar');
    });
    imgPainel[imgAtual].classList.add('mostrar');
})