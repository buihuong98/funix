function percentageOfWorld1(population){
    let percentpopulation1 = (population / 7900)* 100;
    let sum = percentpopulation1.toFixed(1);
    return sum;
}
function describePopulation(country, population){
    let percentage = percentageOfWorld1(population);
    let description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
    return description;
}

console.log(describePopulation('china', 1441));
console.log(describePopulation('Japan', 125));
console.log(describePopulation('USA', 335));