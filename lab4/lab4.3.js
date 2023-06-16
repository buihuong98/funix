function percentageOfWorld3 (population3){
    let percentpopulation3 = (population3 / 7900) * 100;
    let sum = percentpopulation3.toFixed(1);
    return sum;
}

let iranPopulaction = 83;
let iranPercent = percentageOfWorld3(iranPopulaction);
console.log('Iran population percentage: ' + iranPercent + '%');

let thailandPopulaction = 69;
let thailandPercent = percentageOfWorld3(thailandPopulaction);
console.log('Thailand population percentage: ' + thailandPercent + '%');

let russiaPopulaction = 212;
let russiaPercent = percentageOfWorld3(russiaPopulaction);
console.log('Russia population percentage: ' + russiaPercent + '%');