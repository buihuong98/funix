const country = "VietNam";
let population = 97;
const language = "Vietnamese";
let averagePopulation = 33;

if(population > averagePopulation){
    console.log(`${country}'s population is above average`)
}else {
    let populationDifference = averagePopulation - population;
    console.log(`Nederland's population is ${populationDifference} million below average`)
}
