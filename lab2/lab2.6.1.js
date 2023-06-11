// dữ liệu 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let BMImark = massMark/(heightMark * heightMark);
let BMIjohn = massJohn/(heightJohn * heightJohn);
console.log(BMImark);
console.log(BMIjohn)
let markHigherBMI = BMImark > BMIjohn;
console.log("Is Mark's BMI higher than John's?" + markHigherBMI);

//2.6.2
if(BMImark > BMIjohn){
    console.log(`Mark's BMI ${BMImark} is higher than John's ${BMIjohn}!`)
}else{
    console.log(`John's BMI ${BMIjohn} is higher than Mark's ${BMImark}!`)
}

