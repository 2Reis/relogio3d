const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    hr = hr < 10 ? '0' + hr : hr.toString().padStart(2, '0');
    min = min < 10 ? '0' + min : min.toString().padStart(2, '0');
    seg = seg < 10 ? '0' + seg : seg.toString().padStart(2, '0');

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
}, 1000);
