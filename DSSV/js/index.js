// tạo array dssv chứa object 
var dssv = []
const DSSV_LOCAL = "DSSV_LOCAL" ;

// render lại  data từ localStorage khi user reload trang
var dataJson = localStorage.getItem(DSSV_LOCAL);
console.log("😃 - dataJson:", dataJson)

// COVERT TỪ JSSON SANG ARAY
if(dataJson != null) {
    var svArr = JSON.parse(dataJson).map(function(sv){
        return new SinhVien()
    });

    renderDSSV(svArr);
    // kiểm tra localStorage trước khi kiểm tra có tồn tại hay không trước khi render
    
}


function themSV() {
    var sv = layThongTinTuForm();
    // validate dữ liệu trước khi thêm
    var isValid = 
    kiemTraRong(sv.ma, "spanMaSV") & kiemTraRong(sv.ten,  "spanTenSV") & kiemTraTrung(sv.ma, "spanMaSV", dssv,"Mã sinh viên đã tồn tại", "ma") ;
    isValid = 
      isValid & 
      kiemTraTrung (
        sv.email,
        "spanEmailSV",
        dssv,
        "email đã được sử dụng",
        "email"

    );
    
    
    
    
   /**& 
    kiemTraTrung(
        sv.email,
        "spanEmailSV",
        dssv,
        "email đã được sử dụng",
        "email"

    );
    */ 
    if (!isValid) {
    //false thì dừng ở đây function themSV
    return;
  }
    
    
    
    // thêm  sv vừa được tạo  tạo vào array dssv
    dssv.push(sv);
    console.log("😃 - themSV - dssv:", dssv);
    // show array dssv  lên layout , mỗi item   1 thẻ tr
   renderDSSV(dssv);
    // localStorage, json strigtify, json parse ==> khi user load  ko bị mất



    // convert array thành json  để lưu xuống local
    var dataJson = JSON.stringify(dssv);
    console.log("😃 - themSV - dataJson:", dataJson)
    // lưu json vào localStorage
    localStorage.setItem(DSSV_LOCAL,dataJson);
    
    
    
    
    
}
function xoaSV(id) {
    console.log("😃 - xoaSV - id:", id)
    console.log("YES");
    var index ;
    for (var i =0; i < dssv.length; i++ ){
        if ( dssv[i].ma == id){
            index = i;
        }
        
        
    }
    
       // xoá phần tử tại dssv tại vị trí index trong dssv
    dssv.splice(index, 1 );
    //gọi lại danh sách sinh viên rederDSSV SAU KHI XOA =>tạo mới lại với data mới nhất 
    renderDSSV(dssv);
}
function suaSV(id){
    var index = dssv.findIndex(function (item){
        return item.ma == id;
    });
    var sv  = dssv[index];
    document.getElementById("txtMaSV").value = sv.ma;
    

}


    console.log("😃 - dssv:", dssv)