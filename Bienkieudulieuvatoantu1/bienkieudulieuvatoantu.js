let vatLy ;
let hoaHoc;
let sinhHoc;
vatLy>0;
hoaHoc>0;
sinhHoc>0;
vatLy = +prompt("Nhập điểm Vật Lí");
hoaHoc = +prompt("Nhập điểm Hóa Học");
sinhHoc = parseInt(prompt("Nhập điểm Sinh Học"));

let tong = (vatLy+hoaHoc+sinhHoc);
let dtb = (tong/3);
document.write("Điểm trung bình: " + dtb);
document.write("Tổng là:" + tong);
