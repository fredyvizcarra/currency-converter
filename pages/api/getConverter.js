const axios = require('axios');

let response = null;
export default async function handler(req, res) {
    const { query: newValue } = req;



    try {
        response = await axios.get(`https://pro-api.coinmarketcap.com/v2/tools/price-conversion?amount=${newValue.amountToConverter}&symbol=${newValue.coinOne}&convert=${newValue.coinTwo}`, {
            headers: {
                'X-CMC_PRO_API_KEY': '5c778be2-3ba2-4139-90af-d78ad31dcab9',
            },
        });
    } catch (ex) {
        response = null;
        // error
        console.log(ex);
        res.status(404).json(ex);
    }
    if (response) {
        // success
        const result = response.data;
        console.log(result);
        res.status(200).json(result);
    }


};