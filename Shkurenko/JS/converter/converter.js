const СURRENCIES = {
    usd: 0.027,
    eur: 0.025,
};
function convert(currency,uah){
    let result = null;
    result = uah* СURRENCIES[currency];
    return result;
};