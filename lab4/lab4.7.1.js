function calcAverage (diem1, diem2, diem3){
   let average = (diem1 + diem2 + diem3)/3;
   return average;
}
// du lieu 1
let avgDolphins = calcAverage(44, 23, 71);
console.log('diem trung binh cua doi Dolphins la ' + avgDolphins);

let avgKoalas = calcAverage(65, 54, 49);
console.log('diem trung binh cua doi Koalas la ' + avgKoalas);

function checkWinner (avgDolphins, avgKoalas){
    if(avgDolphins >= (avgKoalas * 2)){
        console.log("Dolphins win (" + avgDolphins + 'vs' + avgKoalas + ')')
    }else
    if(avgKoalas >= (avgDolphins * 2)){
        console.log("Koalas win (" + avgKoalas + 'vs' + avgDolphins + ')')
    }else {
        console.log('No team wins...')
    }
}
checkWinner(avgDolphins, avgKoalas);
// du lieu 2

let averageDolphins = calcAverage(85, 54, 41);
console.log('diem trung binh cua doi Dolphins la ' + averageDolphins);

let averageKoalas = calcAverage(23, 34, 27);
console.log('diem trung binh cua doi Koalas la ' + averageKoalas);
checkWinner(averageDolphins, averageKoalas)