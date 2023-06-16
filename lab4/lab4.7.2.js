function calcTip(billInvoice){
    
    if(billInvoice >= 50 && billInvoice <= 300){
        return billInvoice * 0.15;
    } else{
       return billInvoice * 0.2;
    }
}

let bills = [125, 555, 44];
let tips = [];
let totals = [];
for (let i = 0; i < bills.length; i++){
    let bill = calcTip(bills[i])
    tips.push(bill);
    totals.push(bills[i] + bill)
}
console.log(tips);
console.log(totals);
