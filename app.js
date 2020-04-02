const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = (direccion) => {
    lugar.getLugarLatLng(argv.direccion)
        .then(res => {
            clima.getClima(res.latitud, res.longitud)
                .then(res => console.log(`El clima de ${direccion} es ${res} `))
        })
        .catch(err => console.log(err))

};

getInfo(argv.direccion);