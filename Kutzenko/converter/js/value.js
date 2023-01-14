function whatValue(value, inCurrency, outCurrency){
    switch(inCurrency){
        case CURRENCY.hryvnia:
            if(outCurrency === CURRENCY.dollar){
                return hryvniaDollar(value);
            }else if(outCurrency === CURRENCY.euro){
                return hryvniaEuro(value);
            }else return value;
            break;
        case CURRENCY.dollar:
            if(outCurrency === CURRENCY.hryvnia){
                return dollarHryvnia(value);
            }else if(outCurrency === CURRENCY.euro){
                return dollarEuro(value);
            }else return value;
            break;
        case CURRENCY.euro:
            if(outCurrency === CURRENCY.hryvnia){
                return euroHryvnia(value);
            }else if(outCurrency === CURRENCY.dollar){
                return euroDollar(value);
            }else return value;
            break;
    }
}