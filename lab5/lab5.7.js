function percentageOfWorld1 (populations){
    return (populations / 7900) * 100;
};
let populations = [1441, 125, 335, 273];
let percentages3 = [];
 let count = 1;
 while(count < populations.length){
    let percentages = percentageOfWorld1(populations[count]);
  let sum = parseFloat(percentages.toFixed(1));
    percentages3.push(sum);
    count++
 }
 console.log(percentages3);
//toi thich vong lap while hon vi n ngan gon 