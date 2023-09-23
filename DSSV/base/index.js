var name = "alice"
var phone = "21434"
var gmail = "alice@gamil.com"
var user1 = {
    //key
    name:  "alce ",
    phone: "21434",
    email: "alice@gmail.com"
};
console.log("😃 - user1:", user1.name)
var user2 = {
    //key:value,
    name:  "bub",
    phone: "215437",
    email: "bub@gmail.com",
    //method 
    sayHello: function(){
        console.log("tôi tên là :", this.name);
        
        // this dùng bên trong object dể truy xuất giá trị objecct 
    
    },
 
};
user2.name ="bub trần";
console.log("😃 - user2:", user2)
/**
 * aray:[]; index=> lưu dữ liệu cùng loại theo danh sách
 * 
 * object :{} key = > lưu dữ liệu miêu tả chung 1 đối tượng
 *  
 */