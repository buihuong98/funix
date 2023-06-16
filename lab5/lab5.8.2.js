let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcTip(bills){
  for(let i = 0; i < bills.length; i++){
    if(bills[i] >= 50 && bills[i] <= 300){
        let inTip = bills[i] * 0.15;
        tips.push(inTip);
    } else{
       let inTip = bills[i] * 0.2; 
       tips.push(inTip);
    }
  }
   return tips
}

console.log(calcTip(bills));

function moneyTotal(bills, tips){
    console.log("bill", bills);
    console.log('tips', tips)
    for(let m = 0;m < bills.length; m++){
        let total = bills[m] + tips[m];
        totals.push(total);
    }
    return totals;
}

console.log(moneyTotal(bills, tips));

function calcAverage(bills){
    let sum = 0;
    for(let n = 0; n < bills.length; n++){
      sum += bills[n];
    }
   sum = sum/10;
    return sum;
}

console.log(calcAverage(bills))


