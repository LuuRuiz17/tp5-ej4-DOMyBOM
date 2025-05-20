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
    const diaDeLaSemana = fecha.getDay();
    const dia = fecha.getDate();
    const numeroMes = fecha.getMonth();
    const anio = fecha.getFullYear();
    const diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let mes = "";
    let nombreDiaDeLaSemana  ="";

    switch (numeroMes) {
        case 0: mes = "Enero"; break
        case 1: mes = "Febrero"; break
        case 2: mes = "Marzo"; break
        case 3: mes = "Abril"; break
        case 4: mes = "Mayo"; break
        case 5: mes = "Junio"; break
        case 6: mes = "Julio"; break
        case 7: mes = "Agosto"; break
        case 8: mes = "Septiembre"; break
        case 9: mes = "Octubre"; break
        case 10: mes = "Noviembre"; break
        case 11: mes = "Diciembre"; break
    }

    for (let i = 0; i < diasDeLaSemana.length; i++) {
        if(i === diaDeLaSemana){
            nombreDiaDeLaSemana = diasDeLaSemana[i];
        }
    }

    console.log(mes);
    contenedorFecha.textContent = `${nombreDiaDeLaSemana} ${dia} de ${mes} del ${anio}`;
}

const contenedorFecha = document.querySelector(".contenedorFecha");
const contenedorHora = document.querySelector(".contenedorHora");

setInterval(obtenerHorario, 1000);
obetenerFecha();

