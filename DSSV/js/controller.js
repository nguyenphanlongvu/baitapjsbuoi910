function layThongTinTuForm() {
        console.log("YESS");
    // lấy thông tin từ form
    var ma = document.getElementById("txtMaSV").value;
    var ten = document.getElementById("txtTenSV").value;
    var matkhau = document.getElementById("txtPass").value;
    var email = document.getElementById("txtEmail").value;
    var toan = document.getElementById("txtDiemToan").value*1;
    var ly  = document.getElementById("txtDiemLy").value*1;
    var hoa = document.getElementById("txtDiemHoa").value*1;
    // tạo object
    // var sv = {
    //     ma: ma,
    //     ten: ten,
    //     matkhau: matkhau,
    //     email: email,
    //     toan: toan,
    //     ly: ly,
    //     hoa: hoa,
    //     tinhDTB: function() {
    //         var dtb = (this.toan + this.ly + this.hoa)/3;
    //         return dtb ;
            
    //     },

    // };
////return sv ;
//cách 2
var sv = new SinhVien(ma,ten,matkhau,email,toan,ly,hoa);
return sv;

}

function renderDSSV(dssv) {
     var contentHTML = "";
    // duyệ t mảng để update dữ liệu của contentHTML 
     for (var index = 0; index<dssv.length; index++) {
        var sv  = dssv[index];
        var trString= ` <tr>
                            <td>${sv.ma}</td>
                            <td>${sv.ten}</td>
                            <td>${sv.email}</td>
                            <td>0</td>
                            <td>
                               <button onclick= "xoaSV('${sv.ma}')" class = 'btn btn-danger'> xoá </button>
                                <button onclick = "suaSV('${sv.ma}')" class = 'btn btn-info'> sửa </button>
                            </td>

        </tr>`;
        contentHTML =contentHTML + trString;
        // tạo chuỗi tr
        // cộng dồn chuỗi tr và contentHTML

     
    }
    document.querySelector("#tbodySinhVien").innerHTML = contentHTML;
    // dom thẻ tbody và show contenTTHTML




}