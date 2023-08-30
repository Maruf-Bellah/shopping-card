function updateCaseNumber(isIncrease){
    const caseInput = document.getElementById("case-input-field");
    const caseInputValue = caseInput.value;
    const caseInputString = parseInt(caseInputValue);
    let caseInputCount;
    if(isIncrease === true){
        caseInputCount = caseInputString + 1;
    }else{
        caseInputCount = caseInputString - 1;
    }
    caseInput.value = caseInputCount;
    return caseInputCount;
}



document.getElementById("btn-case-plus").addEventListener("click", function () {
    const caseInputButton =  updateCaseNumber(true)
    const showTotal = caseInputButton * 59;
    document.getElementById("case-total").innerText = showTotal;
  
});


document.getElementById('btn-case-min').addEventListener('click', function(){
   const caseInputButton = updateCaseNumber(false)
   const showTotal = caseInputButton * 59;
   document.getElementById("case-total").innerText = showTotal;
})