var dropdown = Array.from(document.querySelectorAll(".dropdown"));
//console.log('dropdown all|: ',dropdown);
dropdown.forEach(
    function(el,index){
        //console.log('phan tu' , el);
        var btn = el.querySelector('.btn');
        //console.log('btn: ', btn);
        btn.addEventListener("click",function(event) {
            //var cl = el.classList;
           //console.log('hien thi cac class dropdown : ', el.classList.value);
            if(el.classList.value.indexOf('open') === -1 ) {
                el.classList.add('open');
            }else {
                el.classList.remove('open');
            }
        });
        
    }
)

/*
child
parent
sibling - > anh chi em -> chung cha
*/