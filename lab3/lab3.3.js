let language = prompt("Enter the language of the country:");
let population = Number(prompt("Enter the population of the country (in millions):"));
let isIsland = prompt("Is the country an island? (yes/no)")

if(language === 'English'&& population < 50 && !isIsland){
 console.log("You should live in Portugal :)")
}else{
    console.log("Portugal does not meet your criteria :(")
}