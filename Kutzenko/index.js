let M = [0.5, 1, 2.5, 5, 10, 15, 20, 25, 4.54, 11.34, 15.88, 20.41];
let K = 40.76;
let best = Math.max(...M)*12;
let finalCombination = '';
function proc(prefix){
    let mass = 0;
    let combination = '';
    for (let j = 0; j < M.length; j++){
        for (let i = 0; i < K+1 ; i++){
            if (prefix[i] == 1){
                prefix[i+M[j]] = 1;
                mass += M[i];
                combination += M[i] + ' + ';
            }
            if (mass <= best && mass > K){
                best = mass;
                finalCombination = combination;
            }
        }
    }
}
function generate(n, prefix = [] ){
    if (n == 0){
        proc(prefix);
        return;
    }
    else{
        generate(n - 1, prefix + [0]);
        generate(n - 1, prefix + [1]);
    }
}

generate(M.length);
console.log(best);
console.log(finalCombination);