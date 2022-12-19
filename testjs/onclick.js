var stylecolor = document.getElementById('stylecolor');
var body = document.getElementsByTagName('body')[0];
//console.log(body);

function changecolor(filename) {
    stylecolor.setAttribute('href', filename);
    //console.log('href = ',filename);
}

function changebg(bgimg) {
    if(bgimg) {
        var valuebg = "background-image: url('"+ bgimg +"')";
        body.setAttribute("style", valuebg);
        console.log('body',body);
        
    }else {
        body.setAttribute("style",'');
    }
    //stylecolor.setAttribute('style', bgimg);
    //console.log('style = ',valuebg);
   //body.setAttribute('style', valuebg)
   console.log('valuebg' ,valuebg);
   
}