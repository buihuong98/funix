let markMiller = {
    fullName: 'Mark',
    mass: 78,
    height: 1.69,
    BIM: 0,
    calcBIM: function(){
      BIM = markMiller.mass/ (markMiller.height * markMiller.height)
      const sum = parseFloat(BIM.toFixed(1));
      return sum
    }
}
let johnSmith = {
    fullName: 'John',
    mass: 92,
    height: 1.95,
    BIM: 0,
    calcBIM: function(){
        BIM = johnSmith.mass/(johnSmith.height * johnSmith.height)
        const sum = parseFloat(BIM.toFixed(1));
        return sum
    }
}
console.log(markMiller.calcBIM());
console.log(johnSmith.calcBIM());
if(markMiller.calcBIM() > johnSmith.calcBIM()){
    console.log(`${markMiller.fullName}'s BMI (${markMiller.calcBIM()}) is higher than ${johnSmith.fullName}'s (${johnSmith.calcBIM()})!`)
}else
if(johnSmith.calcBIM() > markMiller.calcBIM()){
    console.log(`${johnSmith.fullName}'s BMI (${johnSmith.calcBIM()}) is higher than ${markMiller.fullName}'s (${markMiller.calcBIM()})!`)
}