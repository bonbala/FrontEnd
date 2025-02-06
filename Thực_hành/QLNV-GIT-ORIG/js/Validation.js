function Validation() {
  this.checkEmty = function (inputValue, id, message) {
    if (!inputValue.trim()) {
      document.getElementById(id).style.display = "block";
      document.getElementById(id).innerHTML = message;
      return false;
    } else {
      document.getElementById(id).style.display = "none";
      document.getElementById(id).innerHTML = "";
      return true;
    }
  };
  this.ExistAccount = function (inputValue, id, message, list) {
    var index = list.findIndex((item) => item.taiKhoan === inputValue.trim());
    if (index !== -1) {
      document.getElementById(id).style.display = "block";
      document.getElementById(id).innerHTML = message;
      return false;
    } else {
      document.getElementById(id).style.display = "none";
      document.getElementById(id).innerHTML = "";
      return true;
    }
  };

  this.checkCharSpec = function (inputValue, id, message) {
    var pattern = new RegExp(
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$"
    );
    if (!pattern.test(inputValue)) {
      document.getElementById(id).style.display = "block";
      document.getElementById(id).innerHTML = message;
      return false;
    } else {
      document.getElementById(id).style.display = "none";
      document.getElementById(id).innerHTML = "";
      return true;
    }
  };

  this.checkEmail = function (inputValue, id, message) {
    var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (pattern.test(inputValue)) {
      document.getElementById(id).style.display = "none";
      document.getElementById(id).innerHTML = "";
      return true;
    } else {
      document.getElementById(id).style.display = "block";
      document.getElementById(id).innerHTML = message;
      return false;
    }
  };

  this.checkPasswrod = function (inputValue, id, message) {
    var pattern = new RegExp(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/
    );
    if (pattern.test(inputValue)) {
      document.getElementById(id).style.display = "none";
      document.getElementById(id).innerHTML = "";
      return true;
    } else {
      document.getElementById(id).style.display = "block";
      document.getElementById(id).innerHTML = message;
      return false;
    }
  };

  this.checkSalary = function (inputValue, id, message) {
    var pattern = new RegExp('^[0-9]+$')
    if (pattern.test(inputValue)&&inputValue>=1e6) {
      document.getElementById(id).style.display = "none";
      document.getElementById(id).innerHTML = "";
      return true;
    } else {
      document.getElementById(id).style.display = "block";
      document.getElementById(id).innerHTML = message;
      return false;
    }
  };
  this.checkChucVu = function(inputValue, id, message) {
    if (inputValue !== "Chọn chức vụ") {
      document.getElementById(id).style.display = "none";
      document.getElementById(id).innerHTML = "";
      return true
    }else {
      document.getElementById(id).style.display = "block";
      document.getElementById(id).innerHTML = message;
      return false;
    } 
  };
  this.checkTime = function (inputValue, id, message) {
    var pattern = new RegExp('^[0-9]+$')
    if (pattern.test(inputValue)&&inputValue>=0) {
      document.getElementById(id).style.display = "none";
      document.getElementById(id).innerHTML = "";
      return true;
    } else {
      document.getElementById(id).style.display = "block";
      document.getElementById(id).innerHTML = message;
      return false;
    }
  };
}
