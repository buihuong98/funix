const country = "VietNam";
const continent = "Asia";
let population = 97;
let isIsland = false;
const language = "Vietnamese";

//1
let halfPopulation = population /2
console.log('halfPopulation: ' + halfPopulation + 'million');
//2
let plus1 = population + 1;
console.log(plus1)
//3
if(population > 6){
    console.log("The country has more people than Finland.")
} else{
    console.log("The country does not have more people than Finland.")
}
//4
if(population > 33){
    console.log("The country has more people than Average population of a country.")
} else {
    console.log("The country does not have more people than Average population of a country.")
}
//5
let description = `${country} and its ${population} million people speak ${language}`