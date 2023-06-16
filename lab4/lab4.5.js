let populations = [1441, 125, 335, 273];
let hasPopulaction = populations.length === 4;
console.log(hasPopulaction);

function percentageOfWorld1 (populations){
    return (populations / 7900) * 100;
}
let percentages = [];
for(let i = 1; i < populations.length; i++){
let percentage = percentageOfWorld1(populations[i]);
let sum = parseFloat(percentage.toFixed(1));
    percentages.push(sum);
}
console.log(percentages);
