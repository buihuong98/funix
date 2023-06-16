const neighbours = ['Norway', 'Sweden', 'Estonian'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(neighbours.includes('Germany')){
    
}else{
    console.log("Probably not a central European country :D");
}

neighbours[1] = 'Republic of Sweden';
console.log(neighbours);