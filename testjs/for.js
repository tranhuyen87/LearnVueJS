for (let index = 0; index < 10; index++) {
    //const element = array[index];
    //console.log('index la', index);   
}

var calAverage =  function() {
    this.average = (this.maths + this.physics)/2;
    return this.average;
}

var student = [
    {
        fullName: 'NGuyen Van A',
        maths: 8,
        physics: 7
    },
    {
        fullName: 'NGuyen Van C',
        maths: 5,
        physics: 9
    },
    {
        fullName: 'NGuyen Van C',
        maths: 7,
        physics: 6
    }
]

for (var index = 0; index < student.length; index++) {
    student[index].calAverage = calAverage;
    student[index].calAverage();
   console.log(student[index]);
   
}
//console.log('student = ',student);

//console.log('DBT',student.calAverage());

//console.log('student', student);

// for /in

console.log('================');

var calAverage2 = function() {
    total =  0;
    totalScores = 0
    for (key in this.scores) {
        total += 1;
        totalScores += this.scores[key];
        console.log('scores ' + key + ' = ' , this.scores[ key ]);
    }
    console.log('total = ',total);
    //console.log('totalScores = ',totalScores);
    return totalScores / total;
}

var studentA = {
    fullName: 'NVA',
    year: 1990,
    scores: {
        maths: 9,
        physics: 6,
        chemistry: 8
    },
    calAverage: calAverage2
}
//debugger;
//studentA.calAverage2();
var studentB = {
    fullName: 'NVB',
    year: 1992,
    scores: {
        maths: 7,
        physics: 6,
        chemistry: 5,
        english: 7
    },
    calAverage: calAverage2
}
console.log('Average of studentA is', studentA.calAverage());
console.log('Average of studentB is', studentB.calAverage());
