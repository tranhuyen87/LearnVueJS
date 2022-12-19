var body = document.getElementsByTagName('body')[0];
var democl = document.querySelector(".classdemo");

console.log(democl.classList);
function addClass(el,className) {
    var oldcl = el.getAttribute('class'); 
    //console.log('class cu',oldcl);
    // dùng If kiểm tra xem có element đã có class hay chua
    if(oldcl) {
        /* 
         -khac null
         -class củ là 'classdemo'
         - className muốn thêm vào 'demo1 ,...'
         - Ta nối chuổi trước khi thêm vào ' classdemo demo1'
         - trước khi thêm mình kiểm tra xem classNam này đã tồn tại trong class cũ hay chưa ?
         - nếu chua tồn tại thì nối chuổi bt
         - nếu đã tồn tại thì không thêm nữa

         */
        if(oldcl.indexOf(className) === -1){
            var newClass = oldcl + ' ' + className;
            el.setAttribute('class',newClass);
        }
        

    }else {
        // bang null
        el.setAttribute('class',className)

    }
}

function removeClass(el, className){
    var oldcl = el.getAttribute('class');
    //console.log('mang cu : ', className);
    if(oldcl){
        var arroldcl = oldcl.split(" ");
        var deleteCl = arroldcl.indexOf(className);
        //console.log('mang cu : ', arroldcl);
        //console.log('phan tu de xoa :',deleteCl);
        
        if(deleteCl !== -1) {
            arroldcl.splice(deleteCl,1);
            el.setAttribute('class',arroldcl.join(" "));
        }
    }
}

addClass(body,'bodyclass');
addClass(democl,'demo02 demo03');

removeClass(democl,'classdemo demo03');

/*
+ chuyển đổi từ một chuỗi - > thành mảng
'acb edf' => ['abc' , 'edf']
oldcl.split(" ");

+ chuyển mảng => thành chuổi
arr.join(" ")

+ them vao dau mang = > arr.unshift(11);
+ xoa vao dau mang = > arr.shift();

+ them vao cuoi mang = > arr.push(77) ;
+ xoa vao cuoi mang = > arr.pop() ;

+ lay phan tu duyet tuw index 0 den end = > arr.indexOf(2)

+ lay phan tu dueyt tu end den inden 0 = > arr.lastIndexOf(5)

+ thêm vào giữa mảng , xoa phan tu giua mang;

 - method arr.slice(start,end) = > tao ra mot mang moi tinh tu vi tri start den end va khong lam thay doi mang goc

 - method arr.splice(start,deleteCount,...) = >
   xoa bao nhieu phan tu tinh tu start
    arr.splice(0,2) = > xoa hai phan tu tinh tu vi tri index = 0 .
    tra ve mot mang bao gom nhung phan tu da bi xoa
    no lam thay doi mang goc
*/
var str = "abc def";
//console.log('chuoi thanh mang',str.split(" "));
var arrstr = str.split(" ");
//console.log('chuoi thanh mang',arrstr);
var newstr = arrstr.join(" ")
//console.log('mang thanh chuoi : ',newstr);
var arr = [1,2,3,4,5,6];

arr.slice(1,3);
//cat tu vị trí số 1 đến vị trí sô 3, index tinh tu 0;
//console.log('mang slice', arr.slice(0,2));

//console.log('arr da xoa',arr.splice(2,3));

//console.log('them vao arr: ',arr.splice(2,3,100,88));

//console.log('them vao arr khong xoa: ',arr.splice(1,0,100,88));

//console.log('mang cu', arr);

