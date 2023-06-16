const  myCountry = {
    country: "Finland",
    capital: "Helsinki",
    language: "finnish",
    population: 6,
    neighbours : ["Sweden", "Norway", "Russia and Estonia"],
    describe: function(){
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },

    checkIsland: function(){
        if(this.neighbours.length === 0){
            console.log(true)
        }else{
            console.log(false)
        }
    }
}

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);


