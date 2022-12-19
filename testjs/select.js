var seclect = Array.from(document.querySelectorAll('select[name="year"]'));
console.log('seclec all: ',seclect);

seclect.forEach(
    function(select,index){
        //var seclectindex = 
        //console.log('select :',parent);
        for (let year = 1970; year < 1980; year++) {
            var option = document.createElement("option");
                option.setAttribute('value', year);
                option.innerText = 'nam ' + year;
                select.append(option)
            //console.log('year: ', option);          
        }
    }
)

var seclect_vn = document.querySelector("select[name='country_vn']")
var country_vn = ["An Giang", "Bà Rịa - Vũng Tàu", "Bạc Liêu", "Bắc Kạn", "Bắc Giang", "Bắc Ninh", "Bến Tre", "Bình Dương", "Bình Định", "Bình Phước", "Bình Thuận", "Cà Mau", "Cao Bằng", "Cần Thơ", "Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Đồng Nai", "Đồng Tháp", "Điện Biên", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh", "Hải Dương", "Hải Phòng", "Hòa Bình", "Hậu Giang", "Hưng Yên", "Thành phố Hồ Chí Minh", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lào Cai", "Lạng Sơn", "Lâm Đồng", "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên - Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"]

for (let index = 0; index < country_vn.length; index++) {
    var option = document.createElement("option");
        option.setAttribute('value', country_vn[index]);
        option.innerText = country_vn[index];
        seclect_vn.append(option)
}