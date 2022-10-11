var elForm = document.querySelector(".form");
var aNumber = elForm.querySelector(".input-first");
var bNumber = elForm.querySelector(".input-second");
var cNumber = elForm.querySelector(".input-there");
var elResult = document.querySelector(".alert-js");

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault();

    var aNumberValue = aNumber.value.trim();
    var bNumberValue = bNumber.value.trim();
    var cNumberValue = cNumber.value.trim();

    if(isNaN(aNumberValue) || isNaN(bNumberValue) || isNaN(cNumberValue)){
        elResult.textContent = "Siz harf kiritdiz iltimos son kiriting!!"
        elResult.classList.add("bg-danger")
    }else if((aNumberValue > bNumberValue && aNumberValue < cNumberValue) || ((aNumberValue < bNumberValue && aNumberValue > cNumberValue))){
        elResult.textContent = aNumberValue + " Middle Number"
        elResult.classList.add("bg-success");
    }else if((bNumberValue > aNumberValue && bNumberValue < cNumberValue) || (bNumberValue < aNumberValue && bNumberValue > cNumberValue)){
        elResult.textContent = bNumberValue + " Middle Number"
        elResult.classList.add("bg-info");
    }else if((cNumberValue > bNumberValue && cNumberValue < aNumberValue) || (cNumberValue < bNumberValue && cNumberValue > aNumberValue)){
        elResult.textContent = cNumberValue + " Middle Number";
        elResult.classList.add("bg-dark");
    }else if((aNumberValue == bNumberValue && aNumberValue != cNumberValue) || (bNumberValue == cNumberValue && bNumberValue != aNumberValue) || (cNumberValue == aNumberValue && cNumberValue != bNumberValue)){
        elResult.textContent = "Ikkita bir xil son kiritdiz";
        elResult.classList.add("bg-danger");
    }else{
        elResult.textContent = "Bir xil son kiritdiz!!!";
        elResult.classList.add("bg-danger");
    }

    aNumber.value = "";
    bNumber.value = "";
    cNumber.value = "";
})