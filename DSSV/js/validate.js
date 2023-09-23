
// hợp lệ => true 
function kiemTraRong(value , idErr) {
    if (value != "" ){
        document.getElementById(idErr).innerHTML = " ";
        return true;
    }else{
        document.getElementById(idErr).innerHTML = "mã sinh viên không được rỗng";
        return false;

    }





}
function kiemTraTrung(value, idErr,dssv, message,key) {
    var index = dssv.findIndex(function(item){
        return item[key] == value ;

    });
    if (index == -1) {
        // không tìm thấy vlue nằm ơ trongdssv => hơpk lê
        document.getElementById(idErr).innerText =" "
        return true ;
    } else {
        document.getElementById(idErr).innerText = message ;
        return false;
    }
    
}