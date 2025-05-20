function obtenerHorario() {
    const fecha = new Date();
    const contenedorHora = document.querySelector(".contenedorHora");
    const segundos = fecha.getSeconds() < 10 ? "0" + fecha.getSeconds() : fecha.getSeconds();
    const minutos = fecha.getMinutes() < 10 ? "0" + fecha.getMinutes() : fecha.getMinutes();
    const horas = fecha.getHours() < 10 ? "0" + fecha.getHours() : fecha.getHours();
    contenedorHora.textContent = `${horas}: ${minutos}: ${segundos}`;
}

function obetenerFecha() {
    const fecha = new Date;
    const contenedorFecha = document.querySelector(".contenedorFecha");
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const anio = fecha.getFullYear();
    contenedorFecha.textContent = `${dia}/${mes}/${anio}`;
}

const contenedorFecha = document.querySelector(".contenedorFecha");
const contenedorHora = document.querySelector(".contenedorHora");

setInterval(obtenerHorario, 1000);
obetenerFecha();
