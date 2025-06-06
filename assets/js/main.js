function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'GMT'
    })

}

const botaoIniciar = document.querySelector('.iniciar');
const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);

}

document.addEventListener('click', function (e) {
    const elementoSendoClicado = e.target;

    if (elementoSendoClicado.classList.contains('iniciar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();

   botaoIniciar.textContent = 'Iniciar'
}

    if (elementoSendoClicado.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
        botaoIniciar.textContent = 'Continuar'
    }

    if (elementoSendoClicado.classList.contains('zerar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;

    botaoIniciar.textContent = 'Iniciar';
}

})











