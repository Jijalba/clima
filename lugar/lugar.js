const axios = require('axios');


const getLugarLatLng = async(direccion) => {
    const encoderUrl = encodeURI(direccion);

    const resp = await axios({
        method: 'get',
        url: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encoderUrl,
        headers: {
            'X-RapidAPI-Key': 'fcebf7c916msh49d8c9aace45e0cp16f9ccjsn05a83b371ad9'
        }
    });

    if (resp.data.Results.length === 0)
        throw new Error('No hay resultado para ' + direccion);

    const data = resp.data.Results[0];
    const location = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        location,
        latitud,
        longitud
    }
}


module.exports = {
    getLugarLatLng
}