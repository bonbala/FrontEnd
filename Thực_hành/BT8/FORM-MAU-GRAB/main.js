    var grabType = document.getElementsByName('selector');
    var distance = document.getElementById('distance');
    var waitTime = document.getElementById('time');
    var btn = document.getElementById('btn');
    var grabPrice = document.getElementById('divThanhTien')
    var price = document.getElementById('xuatTien')
    

    btn.onclick = handleCal;

    function handleCal() {
        var selectedType = null;
        var distanceValue = distance.value;
        var waitTimeValue = waitTime.value;




        for (var i = 0; i < grabType.length; i++) {
            if(grabType[i].checked) {
                selectedType = grabType[i].value;
                break;
            }
        }

        if(selectedType===null||!distance.value||!waitTime.value){
            alert("Vui chọn và điền đủ thông tin")
        }
        else if (isNaN(distanceValue)|| isNaN(waitTimeValue)){
            alert("vui lòng nhập số cho thông tin đã di chuyển")
        }
        else if (distanceValue < 0 || waitTimeValue < 0){
            alert("Thông tin di chuyển phải là số lớn hơn 0")
        }
        else{
            if(selectedType === "GrabCar"){
                var firstKm = 8000
                var secondKm = 7500
                var thirdKm = 7000
                var waitPrice = 2000
            if(distanceValue <= 19){        
                total = firstKm + (distanceValue-1)*secondKm + (waitTimeValue/3)*waitPrice
            }
            else{
                total = firstKm + 18*secondKm+(distanceValue-19)*thirdKm + (waitTimeValue/3)*waitPrice
            }
        }else if (selectedType === "GrabSUV"){
                var firstKm = 9000
                var secondKm = 8500
                var thirdKm = 8000
                var waitPrice = 3000 
            if(distanceValue <= 19){
            total = firstKm + (distanceValue-1)*secondKm + (waitTimeValue/3)*waitPrice
            }
            else{      
            total = firstKm + 18*secondKm+(distanceValue-19)*thirdKm + (waitTimeValue/3)*waitPrice
            }
        }
        else{
                var firstKm = 10000
                var secondKm = 9500
                var thirdKm = 9000
                var waitPrice = 3500
            if(distanceValue <= 19){
            total = firstKm + (distanceValue-1)*secondKm + (waitTimeValue/3)*waitPrice
            }
            else{ 
            total = firstKm + 18*secondKm+(distanceValue-19)*thirdKm + (waitTimeValue/3)*waitPrice
            }
        }

        grabPrice.style.display = 'block'
        price.innerText = Math.floor(total)

        distance.value = ""
        waitTime.value = ""

        for (var i = 0; i < grabType.length; i++) {
            if (grabType[i].checked === true) {
                grabType[i].checked = false;
                break;
            }
        }
        }
        distance.value = ""
        waitTime.value = ""
    }
 




