function calBMI() {
    console.log('this calBMI', this);
    //return  this.mass/(this.height*this.height);
    this.BMIval =  this.mass/(this.height*this.height);
}
//console.log(typeof calBMI)
var jonh = {
    fullNam: 'jonh',
    mass: 56,
    height: 1.6,
    BMI: calBMI
}
var mark = {
    fullNam: 'Mask',
    mass: 56,
    height: 1.6,
    BMI: calBMI
}
//debugger;
//console.log("BMI jonh",jonh.BMI());
//console.log("BMI Mark",mark.BMI());
// if(jonh.BMI() > mark.BMI()){
//     console.log('BMI Jonh lon hon Mark');
// } else if(jonh.BMI() < mark.BMI()) {
//     console.log('BMI jonh nho hon Mark')
// } else {
//     console.log('BMI ca hai bang nhau');
// }
jonh.BMI();
mark.BMI();
console.log("BMI jonh",jonh.BMIval);
console.log("BMI Mark", mark.BMIval);
    if(jonh.BMIval > mark.BMIval ){
        console.log('BMI Jonh lon hon Mark');
     } else if(jonh.BMIval < mark.BMIval) {
        console.log('BMI jonh nho hon Mark')
    } else {
         console.log('BMI ca hai bang nhau');
    }
    
    
    
    