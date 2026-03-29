console.log("Test");

//1.Kiểu số
let x = "15.5"
let y = Number(x)
console.log(y)

//2.Kiểu chuối
let lang = "JavaScript";
let lang2 = 'JavaScript';
let strTB = `Ngôn ngữ ${lang} rất dễ học`;
console.log(strTB)

//3.Kiểu boolean
console.log(!"")
console.log(Boolean(x))
console.log(Boolean(y))

//4.Kiểu undefined
let tuoi
console.log(tuoi)
//5.Kiểu null
let kg = null
console.log(kg)

//6.Array 
let items = [1,2,3]
console.log(items)
items.push(4)
console.log(items,"push thêm cuối")
items.pop()
console.log(items,"pop bỏ cuối")
items.shift()
console.log(items,"shift bỏ giống pop ở đầu")
items.unshift(0)
console.log(items,"unshift thêm lại đầu")
items.splice(1,2,"orange") //vị trí 1, xóa 2 giá trị -sẽ xóa từ phải qua trái
console.log(items,"splice cắt và replace")

//7.Object
let car = {
brand: 'Suzuki',
model: 'Wagon',
year: 2023,
features: ['GPS', 'Bluetooth'],
printf: function () {
console.log(`Model: ${this.model}`);
}
};
console.log(car.brand);
console.log(car.features[1]);
car.printf();

let person = {
name: 'Nguyễn Văn A',
age: 39,
email: 'nguyen@abc.com',
address: {
street: '729 Vành Đai',
city: 'Hồ Chí Minh',
country: 'Việt Nam'
},
interests: ['Xem phim', 'Nghe nhạc', 'Nấu ăn'],
// Tạo phương thức trong đối tượng
greet: function () {
console.log(`Tên ${this.name} Tuổi ${this.age} chao xìn`);
}
};
console.log(person.name); 
console.log(person.age);
console.log(person.address.city);
console.log(person.interests[0]);
// Gọi phương thức
person.greet();

//8.Date
const dt1 = new Date(); // Lấy thời gian hiện tại
const dt2 = new Date(2023, 10, 3); // Tạo một thời điểm cụ thể
// Lấy thông tin về ngày, tháng, năm
const year = dt.getFullYear();
const month = dt.getMonth(); // Lưu ý: Tháng bắt đầu từ 0
const day = dt.getDate();
console.log(`Ngày ${day} Tháng ${month + 1} Năm ${year}`);
// trừ 2 date---------------------------
const dtNow = new Date();
console.log("Ngày hiện tại:", dtNow);
const dt = new Date(2023, 8 - 1, 20);
console.log("Ngày cụ thể:", dt);
// Khoảng cách giữa hai ngày
const Time = dt.getTime() - dtNow.getTime();
const Days = Time / (1000 * 3600 * 24); // Chuyển từ mili giây sang ngày
console.log("Khoảng cách giữa hai ngày là:", Days, "ngày.");

//9.Toán tử
console.log(10/3)

//10. Cấu trúc for..in cho object
car = {
brand: 'Suzuki',
model: 'Wagon',
year: 2023,
features: ['GPS', 'Bluetooth'],
printf: function () {
console.log(`Model: ${this.model}`);
}
};
for (key in car)
{
    console.log(car[key])
}

//11. Cấu trúc for..of cho mảng hoặc 
// object biểu diễn, còn lưu lại giao diện xử lý lưu vào mảng (lưu cấu trúc trang html)
let array=[1,2,3,4,[5,6,7,"js"]]

for (item of array)
{
    console.log(item)
}

//12. Hàm trong js
car1 = {
brand: 'Suzuki',
model: 'Wagon',
year: 2023,
features: ['GPS', 'Bluetooth'],
printf: () => {
console.log(`Model: ${this.model}`);
}
};
console.log(car1.printf())


