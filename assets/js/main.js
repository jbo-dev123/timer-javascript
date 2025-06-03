function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'GMT'
    })
}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

document.addEventListener('click',function (e) {
    const elementoSendoClicado = e.target;
    
    if (elementoSendoClicado.classList.contains('iniciar')) {
        iniciaRelogio()
    }

    if (elementoSendoClicado.classList.contains('pausar')) {
        clearInterval(timer);
    }

    if (elementoSendoClicado.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        segundos = 0;
    }
})











