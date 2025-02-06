var USD = document.querySelector('#USD')
var VND = document.querySelector('#VND')
var pEL = document.querySelector('p')
var btnChange = document.querySelector('button')


console.log(USD,pEL,btnChange)
const number = 123456.789;


btnChange.onclick = handleChange

function handleChange(){
  if(!USD.value){
    alert("Nhập số vào ô")
  }
  else if (USD.value<0){
    alert("Số tiền chuyển đổi không được âm")
  }
  else{
    var exVND = Number(USD.value)*23500 
    pEL.innerText = "VND: "+Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(
        exVND,
      ), +"đ"
    VND.value = exVND.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    
  } 
    
}
