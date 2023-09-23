function Dog(_name, _age , _color){
    this.name = _name;
    this.age = _age
    this.color = _color ;
}
var dog3 = new Dog("meomeo", 2, "black")
var dog4 = new Dog("mimi", 3, "black")
console.log("😃 - dog3:", dog3)
console.log("😃 - dog4:", dog4)



function SinhVien(ma,ten,matkhau,email,toan,ly,hoa) {
    this.ma = ma;
    this.ten = ten;
    this.matkhau = matkhau;
    this.email = email;
    this.toan = toan;
    this.ly = ly ;
    this.hoa = hoa;
    this.tinhDtb = function(){
    var dtb  =(this.ly + this.toan + this.hoa)/3;
        return dtb;
    };
    

}
