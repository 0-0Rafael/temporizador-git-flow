const minutosInput = document.getElementById('minutos');
const empezarBtn = document.getElementById('empezar-btn');
const pararBtn = document.getElementById('parar-btn');
const tiempoRestanteElem = document.getElementById('tiempo-restante');

let tiempoRestante = 0;
let intervalo;

function empezarTemporizador() {
  const minutos = parseInt(minutosInput.value);
  if (!isNaN(minutos)) {
    tiempoRestante = minutos * 60;
    actualizarTiempoRestante();
    empezarBtn.disabled = true;
    pararBtn.disabled = false;
    intervalo = setInterval(actualizarTiempoRestante, 1000);
  }
}

function pararTemporizador() {
  clearInterval(intervalo);
  tiempoRestante = 0;
  actualizarTiempoRestante();
  empezarBtn.disabled = false;
  pararBtn.disabled = true;//true error
}

function actualizarTiempoRestante() {
  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  tiempoRestanteElem.innerHTML = `Tiempo restante: ${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  if (tiempoRestante === 0) {
    pararTemporizador();
  } else {
    tiempoRestante--;
  }
}

empezarBtn.addEventListener('click', empezarTemporizador);
pararBtn.addEventListener('click', pararTemporizador);
