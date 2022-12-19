/*
    hoc cach truy xuat phan tu
    -truy xuat bang ID cua phan tu > 1 phan tu html
    -truy xuat bang class cua phan tu (HTMLcollectionOf)- > mot tap hop html
     + HTMLcollectionOf no khong phai la mang
     + muon su dung  nhung phuong thuc ,function cua array ta ep kieu ve mang
     => cu phap : Array.from(HTMLcollectionOf)
     -truy xuat bang ten the a,body ,div
    -truy xuat bang selector cua css
    - phai nam ro phan selector cua css
    #demo {}
    .class {}
    atribute selector

    * co the su dung cac cach nay de thay the truy xuat cho getemlement
     +getElementById
     +getElementsByClassNam
     +getElementsByTagName

     +querySelector('#demo') = > 1 phan tu
     +querySelectorAll('.classdemo') - > nhieu phan tu nhung kho phai mang. ep kieu de thanh mang
*/
    var demoId = document.getElementById('demo');
    console.log('demo id =',demoId);
    var demoClass = document.getElementsByClassName('classdemo')
    //console.log('class =',demoClass);
    for (let index = 0; index < demoClass.length; index++) {
        console.log('phan tu thu ', + index + ' la ',demoClass[index]);        
    }
    var arraydemo = Array.from(demoClass);
    console.log('array of html' , arraydemo);
    
    var divelment = document.getElementsByTagName('div');

    var demoClass2 = document.querySelectorAll('.classdemo');
    console.log('selectorAll', demoClass2);
    
    
