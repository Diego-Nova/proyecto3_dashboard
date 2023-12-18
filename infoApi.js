import {pintarGrafica} from "./funciones.js";

const obtenerInformacion = async () => {
    const resp = await fetch("https://www.balldontlie.io/api/v1/games");
    const json = await resp.json();

    console.log(json);

    pintarGrafica(json.data);
};



export {obtenerInformacion}; 
