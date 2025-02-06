function DanhSachNhanVien() {
    this.mang = [];
    this.themNhanVien = function(nhanVien){
        console.log(nhanVien)
        this.mang.push(nhanVien)
    }
    this.xoaNhanVien = function(taiKhoan){
        var index = this.timViTri(taiKhoan)
        this.mang.splice(index, 1)
    }
    this.timViTri = function(taiKhoan){
        var index = this.mang.findIndex((item)=>item.taiKhoan === taiKhoan);
        return index;
    }
    this.capNhatNhanVien = function(nhanVien){
        var index = this.timViTri(nhanVien.taiKhoan)
        this.mang[index] = nhanVien
    }
}