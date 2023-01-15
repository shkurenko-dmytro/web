const RATES = {
    usd: 0.027,
    eur: 0.025 
};

function convert({value, currency}){
    if(!RATES[currency]){
        return null;
    }

    return value * RATES[currency];
}