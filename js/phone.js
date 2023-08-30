function updatePhoneNumber (isIncrease){
    const phoneInput = document.getElementById("phone-input");
    const phoneInputField = phoneInput.value;
    const phoneInputString = parseInt(phoneInputField)
    let phoneInputCount ;
    if(isIncrease === true){
        phoneInputCount = phoneInputString + 1;
    }else{
        phoneInputCount = phoneInputString - 1;
    }
    phoneInput.value = phoneInputCount;
    return phoneInputCount;
   
}

function updatePHoneTotalPrice(phoneInputCount ){
    const  showTotal= phoneInputCount * 1219;
    document.getElementById('phone-total').innerText = showTotal;
    console.log(showTotal);

}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
  const phoneInputButton =  updatePhoneNumber(true)
  updatePHoneTotalPrice(phoneInputButton)
//   console.log(phoneInputButton);
//   const showTotal = phoneInputButton * 1219 ;
//   console.log( showTotal);
})

document.getElementById('btn-phone-min').addEventListener('click', function(){
    const phoneInputButton = updatePhoneNumber(false)
    updatePHoneTotalPrice(phoneInputButton)
})
