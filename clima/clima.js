const axios = require('axios');


const getClima = async(lat, long) => {

    const resp = await axios({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bab753d37db83f04bb5ded8c0374aca7&units=metric`
    });

    return resp.data.main.temp;

}

module.exports = {
    getClima
}