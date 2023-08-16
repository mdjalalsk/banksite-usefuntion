
// step:1 get the button and add event listeners
document.getElementById("btn-deposite").addEventListener("click", function () {
    // step 1; get new deposite value by id
    const newDepositeValue=getInputFieldvalueById('input-deposite');
    //check validations
    if(isNaN(newDepositeValue)){
        alert("please provide a number of amount");
        return;
     }
    // step 2; get new previous deposite value by id
    const privousDepositeValue=getElementVlaueById('total-deposite');
   
    // setp3:total deposite value caculate
    const newDepositeTotalAmount=privousDepositeValue+newDepositeValue;
  
   //step4: set total deposite amount      
   setElementVlaueById('total-deposite',newDepositeTotalAmount);

//    step5:get privoues total balance by id using function
   const privousTotalBalance=getElementVlaueById('total-balance')
     // step3:total balance amount caculate  
     const newBalanceAmount=privousTotalBalance+newDepositeTotalAmount;

    // step7:set new total Balance 
    setElementVlaueById('total-balance',newBalanceAmount);
});
