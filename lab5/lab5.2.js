const  myCountry = {
    country: "Finland",
    capital: "Helsinki",
    language: "finnish",
    population: 6,
    neighbours : ["Sweden", "Norway", "Russia and Estonia"],

}
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(`New population: ${myCountry.population} million`)

myCountry['population'] -= 2;
console.log(`Updated population: ${myCountry.population} million`)
