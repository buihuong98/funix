function percentageOfWorld1(population){
    let percentpopulation = (population / 7900)* 100;
    return percentpopulation;
}
let chinaPopulaction = 1441;
let chinaPercent = percentageOfWorld1(chinaPopulaction);
console.log('China population percentage: ' + chinaPercent + '%');

let japanPopulaction = 125;
let japanPercent = percentageOfWorld1(japanPopulaction);
console.log('Japan population percentage: '+ japanPercent + '%');

let usaPopulaction = 336;
let usaPercent = percentageOfWorld1(usaPopulaction);
console.log('USA population percentage: ' + usaPercent + '%');



function percentageOfWorld2 (population2){
    let percentpopulation2 = (population2 / 7900) * 100;
    return percentpopulation2;
}

let indiaPopulaction = 1380;
let indiaPercent = percentageOfWorld2(indiaPopulaction);
console.log('India population percentage: ' + indiaPercent + '%');

let indonesiaPopulaction = 273;
let indonesiaPercent = percentageOfWorld2(indonesiaPopulaction);
console.log('Indonesia population percentage: ' + indonesiaPercent + '%');

let brazilPopulaction = 212;
let brazilPercent = percentageOfWorld2(brazilPopulaction);
console.log('Brazil population percentage: ' + brazilPercent + '%');