function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    setTextElementValueById('sub-total', currentSubTotal);


    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount)
};


document.getElementById('check-out').addEventListener('click', function(){
    const phoneInput = document.getElementById("phone-input");
    const phoneTotal = document.getElementById('phone-total');
    const caseInput = document.getElementById("case-input-field");
    const caseTotal = document.getElementById('case-total');
    const subTotal = document.getElementById('sub-total');
    const taxAmount = document.getElementById('tax-amount');
    const total = document.getElementById('final-total');
    phoneInput.value = 0;
    phoneTotal.innerText = '00';
    caseInput.value =0;
    caseTotal.innerText= '00';
    subTotal.innerText= '00'
    taxAmount.innerText =0;
    total.innerText = '00';

    setTimeout(  alert('ধন্যবাদ আপনার কাছে প্রডাক্ট চলে যাবে', 2000))
  
    console.log(phoneTotal);
})


/* 
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}
 */