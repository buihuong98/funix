function percentageOfWorld1 (populations){
    return (populations / 7900) * 100;
};
let populations = [1441, 125, 335, 273];
let percentages2 = [];
for(let i = 1; i < populations.length; i++){
    let percentages = percentageOfWorld1(populations[i]);
  let sum = parseFloat(percentages.toFixed(1));
    percentages2.push(sum);
}

console.log(percentages2);
