var bills = [120, 45,250];
console.log("bill", bills);
function calTips(bill) {
    var percent;
    if(bill < 50) {
        percent = 0.2;
    } else if (bill <= 200) {
        percent = 0.15;
    } else {
        percent = 0.1;
    }

    return bill*percent;
}

var tips = [
    calTips(bills[0]),
    calTips(bills[1]),
    calTips(bills[2]),
]
console.log("tips1", tips);
var tips2 = []
    tips2.push(calTips(bills[0]));
    tips2.push(calTips(bills[1]));
    tips2.push(calTips(bills[2]));
console.log("tips2", tips2);

var tips3 = []
    tips3[tips3.length] = calTips(bills[0]);
    tips3[tips3.length] = calTips(bills[1]);
    tips3[tips3.length] = calTips(bills[2]);
    console.log("tips3", tips3);
var totalbills = [
    tips[0] + bills[0],
    tips[1] + bills[1],
    tips[2] + bills[2],
]
console.log("totalbills = ", totalbills);