// Dữ liệu 1

let Dolphins = [96, 108, 89];
let Koalas = [88, 91, 110];

let mediumScoreDolphins = (Dolphins[0] + Dolphins[1] + Dolphins[2])/3;
let mediumScoreKoalad = (Koalas[0] + Koalas[1] + Koalas[2])/3;
console.log(mediumScoreDolphins);
console.log(mediumScoreKoalad);

switch(true){
case mediumScoreDolphins > mediumScoreKoalad && mediumScoreDolphins >= 100:
    console.log("Dolphins win the trophy!");
break;

case mediumScoreKoalad > mediumScoreDolphins && mediumScoreKoalad >= 100:
    console.log("Koalas win the trophy!");
break;

case mediumScoreDolphins === mediumScoreKoalad && mediumScoreDolphins >= 100 && mediumScoreKoalad >= 100:
    console.log("Both win the trophy!")
break;
default:
    console.log("No one wins the trophy!")
}