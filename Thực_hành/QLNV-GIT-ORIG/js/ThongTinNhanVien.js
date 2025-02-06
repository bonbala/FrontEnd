function NhanVien(taiKhoan, hoTen, email, mk, date, luong, chucVu, gioLam) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.mk = mk;
  this.date = date;
  this.luong = luong;
  this.chucVu = chucVu;
  this.gioLam = gioLam;
  this.tongLuong = 0;
  this.xepLoai = "";
  this.tinhLuong = function () {
    if (this.chucVu === 'Sếp') {
      var total = (this.luong * 3).toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
      });
      return total;
    } else if (this.chucVu === 'Trưởng phòng') {
      var total = (this.luong * 2).toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
      });
      console.log('total : ', total);
      return total;
    } else if (this.chucVu === 'Nhân viên') {
      var total = this.luong.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
      });
      return total;
    } else {
      var content = 'vui lòng chọn chức vụ';
      alert(content);
      return content;
    }
  };
  this.tinhXepLoai = function(){
    if(this.gioLam>0 && this.gioLam<160){
      return "Trung Binh"
    }
    else if(this.gioLam >= 160 && this.gioLam <180){
      return "Kha"
    }
    else if (this.gioLam>=180){
      return "Gioi"
    }
    else{
      return "Vui long nhap gio lam"
    }
  }
}