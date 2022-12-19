/*
có 3 dạng lam tròn:
+ làm tròn xuong : Math.floor(1.9) - > 1
+ lam tròn lên : Math.ceil(1.2) - > 2
+ làm tròn dựa theo 0.5
  - >= 0.5 -> len :Math.round(1.6) - > 2
  - <= 0.5 -> xuong :Math.round(1.4)-> 1
*/

// lay hoa don radom
function radomarr(n, max) {
    var arr = [];
    for( var index = 1 ; index <= n ; index++) {
        var num = Math.random() * max;
            num = Math.ceil(num);
            arr.push(num);
    }
    return arr;
}

//var bills = radomarr(3, 500);
//console.log('bills:', bills);

var calTips = function() {
    this.tips = [];
    this.value = [];
    var length = this.bills.length;
    //console.log('length = ', length);
        
    for (var index = 0; index < length; index++) {
        var percent = '';
        var bill = this.bills[index];
        if( bill < 50 ) {
            percent = 0.2;
        } else if ( bill < 200 ) {
            percent = 0.15;
        } else {
            percent = 0.1;
        }
        this.tips[index] = this.bills[index] * percent;
        this.value[index] = this.tips[index] + bill; 
        //var tips = this.bills[index] * percent;
        //console.log('tips = ',tips);
        //console.log('bill = ', bill);
        
    }
    return calTips;
}

var jonh = {
    name: 'jonh',
    bills: radomarr(5,400),
    Tips: calTips
}

var mark = {
    name: 'mark',
    bills: radomarr(8,400),
    Tips: calTips
}

jonh.Tips();
mark.Tips();
console.log('jonh = ', jonh);
console.log('mark = ', mark);
