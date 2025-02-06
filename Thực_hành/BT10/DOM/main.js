var nameStudent = getId('name');
var codeStudent = getId('code');
var mathScore = getId('math');
var physicScore = getId('physic');
var chemistryScore = getId('chemistry');
var infoName = getId('info-name');
var infoCode = getId('info-code');
var infoAvrg = getId('info-avrg');
var infoRating = getId('info-rating');
var formElement = document.querySelector('form');
var infoForm = document.querySelector('info')
var btnSub = getId('submit');
var btnUp = getId('update')

btnUp.disabled = true


btnSub.onclick = handleSubmit;
btnUp.onclick = handleUpdate;

listStudent =[{
    maSV: 'MA-1',
    name: 'Khai',
    xepLoai: 'Dat',
    diemTB: 5,
    toan: 5,
    ly: 5,
    hoa:5,
  },
  {
    maSV: 'MA-2',
    name: 'Hieu',
    xepLoai: 'Rot',
    diemTB: 5,
    toan: 5,
    ly: 5,
    hoa:5,
  },
  {
    maSV: 'MA-3',
    name: 'Dong',
    xepLoai: 'Dat',
    diemTB: 5,
    toan: 5,
    ly: 5,
    hoa:5,
  },]

function getId(id) {
  return document.getElementById(id);
}

handleShowItem(listStudent)

function handleCal(nameValue,codeValue,mathValue,physicValue,chemistryValue){
    var result = {
        maSV: '',
        name: '',
        diemTB: 0,
        xepLoai: '',
        toan: 0,
        ly: 0,
        hoa:0,
      };
    
      if (
        !nameValue ||
        !nameValue ||
        !mathValue ||
        !physicValue ||
        !chemistryValue
      ) {
        console.log(nameValue,nameValue,physicValue)
        alert('Vui long nhap lai thong ');
        return;
      } else if (mathValue > 10 || physicValue > 10 || chemistryValue > 10) {
        alert('Vuot qua gia tri diem so');
        return;
      }
      var average = (mathValue + physicValue + chemistryValue) / 3;
      result.name = nameValue;
      result.maSV = codeValue;
      result.toan = mathValue;
      result.hoa = chemistryValue;
      result.ly = physicValue;
      result.diemTB = Math.floor(average);
    
      if (average > 5) {
        result.xepLoai = 'Dat';
      } else {
        result.xepLoai = 'Rot';
      }
      infoName.innerText = result.name;
      infoCode.innerText = result.maSV;
      infoAvrg.innerText = result.diemTB;
      infoRating.innerText = result.xepLoai;

      return result;
}
function handleShowItem(listStudent) {
  var content = '';
  listStudent.map((item, index) => {
    content += `
        <tr>
        <th>${item.maSV}</th>
        <th>${item.name}</th>
        <th>${item.diemTB}</th>
        <th>${item.xepLoai}</th>
        <th><button onclick="handleRemove('${item.maSV}')">Xoa</button></th>
        <th><button onclick="handleEdit('${index}')">Edit</button></th>
        </tr>
        `;
  });
  document.querySelector('tbody').innerHTML = content;
}
function handleSubmit(e) {
    e.preventDefault();
  var nameValue = nameStudent.value;
  var codeValue = codeStudent.value;
  var mathValue = Number(mathScore.value);
  var physicValue = Number(physicScore.value);
  var chemistryValue = Number(chemistryScore.value);
  
  var result = handleCal(nameValue,codeValue,mathValue,physicValue,chemistryValue)
  
  
    var index = listStudent.findIndex((item) => item.maSV === result.maSV);
    if (index === -1) {
      listStudent.push(result);
      handleShowItem(listStudent);
      formElement.reset();
    } else {
      alert('da ton tai ma sv');
    }
}

function handleRemove(maSV) {
  var index = listStudent.findIndex((item) => item.maSV === maSV);
  if (index !== -1) {
    listStudent.splice(index, 1);
    console.log('listStudent: ', listStudent);
    handleShowItem(listStudent);
  } else {
    alert('nothing');
  }
}
function handleEdit(index){
    var studentSelected = listStudent[index];
    console.log('studentSelected  :', studentSelected);
    nameStudent.value = studentSelected.name;
    codeStudent.value = studentSelected.maSV
    mathScore.value = studentSelected.toan;
    physicScore.value = studentSelected.ly;
    chemistryScore.value = studentSelected.hoa;
    codeStudent.disabled = true;
    btnUp.disabled = false
    
}

function handleUpdate(e){
    e.preventDefault()
    var nameValue = nameStudent.value;
    var codeValue = codeStudent.value;
    var mathValue = Number(mathScore.value);
    var physicValue = Number(physicScore.value);
    var chemistryValue = Number(chemistryScore.value);

   var index = listStudent.findIndex((item) => item.maSV === codeValue);
  if (index !== -1) {
    var result = handleCal(nameValue, codeValue, mathValue, physicValue, chemistryValue);
    listStudent[index] = result; 
    handleShowItem(listStudent);
    formElement.reset();
    btnUp.disabled = true
  } else {
    alert('Không tìm thấy sinh viên để cập nhật.');
  }
}

