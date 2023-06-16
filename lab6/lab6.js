// Du lieu 1

function printForecast(arr){
    let forecast = '';
    for(let i = 0; i < arr.length; i++){
        forecast += `${arr[i]}°C in ${i + 1} day${i === arr.length - 1 ? '' : ' ... '}`;
    }    
    return forecast;
}
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]))