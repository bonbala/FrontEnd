var dsnv = new DanhSachNhanVien();
var val = new Validation()
function getELE(id) {
  return document.getElementById(id);
}
function setLocalStorage(){
  localStorage.setItem("DSNV",JSON.stringify(dsnv.mang));
}
function showDanhSachSinhVien(listNhanVien) {
    var content = ""
 listNhanVien.map((item,index)=>{
    console.log(item)
    content += 
    `<tr>
      <td>${item.taiKhoan}</td>
      <td>${item.hoTen}</td>
      <td>${item.email}</td>
      <td>${item.date}</td>
      <td>${item.chucVu}</td>
      <td>${item.tongLuong}</td>
      <td>${item.xepLoai}</td>
      <td class="d-flex">
          <button onclick="xoaNhanVien('${item.taiKhoan}')" class="btn btn-danger mx-1">Xoá</button>
          <button onclick="xemNhanVien('${item.taiKhoan}')" class="btn btn-success mx-1">Xem</button>
      </td>
      </tr>`;
    
 })
 getELE("tableDanhSach").innerHTML = content
}
function themNhanVien() {
  var taiKhoan = getELE("tknv").value;
  var name = getELE("name").value;
  var email = getELE("email").value;
  var mk = getELE("password").value;
  var date = getELE("datepicker").value;
  var luong = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var time = getELE("gioLam").value;
  var isValue = true;
  console.log(isValue)
  // check Validate Tai KHoan
  isValue &= val.checkEmty(taiKhoan,"tbTKNV","Nhap vao di may")&&val.ExistAccount(taiKhoan,"tbTKNV","Ton tai roi may",dsnv.mang);


  // check Validate Ho va Ten
  isValue &= val.checkEmty(name, "tbTen", "Nhap vao di may")&&val.checkCharSpec(name, "tbTen", "Biet chu khong may")

  //check Validate Email
  isValue &= val.checkEmty(email, "tbEmail", "Nhap vao di may")&&val.checkEmail(email, "tbEmail", "Biet email la gi ko may")

  //check Validate Password
  isValue &= val.checkEmty(mk, "tbMatKhau", "Nhap vao di may")&&val.checkPasswrod(mk, "tbMatKhau", "Dat nhieu hon chut di may")

  // chekc Validate Luong 
  isValue &= val.checkEmty(luong, "tbLuongCB", "Nhap vao di may")&&val.checkSalary(luong, "tbLuongCB", "Luong it the :>")

  // check Validate Chuc vu
  isValue &= val.checkChucVu(chucVu, "tbChucVu", "Chọn chức vụ đi mày")

  // chekc Validate Time
 

  if(isValue) {
    var nhanVien = new NhanVien(
      taiKhoan,
      name,
      email,
      mk,
      date,
      luong,
      chucVu,
      time
    );
    nhanVien.tongLuong = nhanVien.tinhLuong();
    nhanVien.xepLoai = nhanVien.tinhXepLoai();
  
    dsnv.themNhanVien(nhanVien);
    // console.log(dsnv.mang);
    showDanhSachSinhVien(dsnv.mang)
    // console.log(nhanVien);
    getELE("btnDong").click()
    getELE("form-area").reset()
    setLocalStorage()
  }
}
function xoaNhanVien(taiKhoan) {
  console.log('taiKhoan')
  dsnv.xoaNhanVien(taiKhoan)
  setLocalStorage()
  showDanhSachSinhVien(dsnv.mang)
}

function xemNhanVien(taiKhoan){
  var viTri = dsnv.timViTri(taiKhoan)
  var nhanVien = dsnv.mang[viTri]
  console.log(nhanVien)   
  getELE("tknv").disabled = true
  getELE("tknv").value = nhanVien.taiKhoan
  getELE("name").value = nhanVien.hoTen
  getELE("email").value = nhanVien.email
  getELE("password").value = nhanVien.mk
  getELE("datepicker").value = nhanVien.date
  getELE("luongCB").value = nhanVien.luong
  getELE("chucvu").value = nhanVien.chucVu
  getELE("gioLam").value = nhanVien.gioLam

  getELE("btnThemNV").disabled = true
  document.querySELEctor(".modal").classList.add("show");
  document.querySELEctor(".modal").style.display = "block"

  getELE("btnDong").addEventListener("click",function(){
    getELE("tknv").disabled = false
    getELE("btnThemNV").disabled = false
    document.querySELEctor(".modal").classList.remove("show");
    document.querySELEctor(".modal").style.display = "none"
    getELE("form-area").reset()
  })
}

function getLocalStorage(){
  var valueLocalStorage = localStorage.getItem("DSNV")
  console.log(valueLocalStorage)
  if( valueLocalStorage !== null){
    var listDSNV = JSON.parse(valueLocalStorage);
    dsnv.mang = listDSNV;
    showDanhSachSinhVien(dsnv.mang)
  }
}





function CapNhatNhanVien(){
  var taiKhoan = getELE('tknv').value
  var name = getELE('name').value
  var email = getELE('email').value
  var mk = getELE('password').value
  var date = getELE('datepicker').value
  var luong = getELE('luongCB').value
  var chucVu = getELE('chucvu').value
  var gioLam = getELE('gioLam').value

  var isValid = true

  isValid &= Val.checkEmty(name,"tbTen","Nhap ten") && Val.checkInfo(name,"tbTen","Nhap ten dung")

  isValid &= Val.checkEmty(email,"tbEmail","Nhap email") && Val.checkInfo(email,"tbEmail","Nhap dung  email")
  
  //isValid &= Val.checkEmty(mk,"tbMatKhau","Nhap mat khau") && Val.checkInfo(mk,"tbMatKhau","dung form")
  
  isValid &= Val.checkEmty(date,"tbNgay","Nhap ngay")

  isValid &= Val.checkEmty(luong,"tbLuongCB","Nhap mat khau") && Val.checkInfo(luong,"tbLuongCB","luong it nhat la 1tr")

  isValid &= Val.checkEmty(chucVu,"tbChucVu","Chon chuc vu")

  isValid &= Val.checkEmty(gioLam,"tbGiolam","Nhap gio lam")

  if(isValid){

    console.log(taiKhoan, name, email, mk, date, luong, chucVu, gioLam);

    var nhanVien = new NhanVien(
      taiKhoan,
      name,
      email,
      mk,
      date,
      luong,
      chucVu,
      gioLam
    );

    nhanVien.tongLuong = nhanVien.tinhLuong()
    nhanVien.xepLoai = nhanVien.tinhXepLoai()
    console.log("nhan vien", nhanVien)

    var viTri = dsnv.timViTri(nhanVien.taiKhoan)
    console.log(viTri)

    dsnv.capNhatNhanVien(nhanVien)

    console.log("mang", dsnv.mang)

    showDSNV(dsnv.mang)

    setLocalStoragre()

    getELE("form-area").reset()

    getELE("btnDong").click()
    
    alert("update successfully")

  }

}



    

getELE("btnCapNhat").addEventListener("click", CapNhatNhanVien)

getLocalStorage()

getELE("btnThemNV").addEventListener("click", themNhanVien)