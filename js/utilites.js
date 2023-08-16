// this function get input field value 
function getInputFieldvalueById(inputFieldId) {
    const InputFiled = document.getElementById(inputFieldId);
    const inputStingValue = InputFiled.value;
    const inputValueNumber = parseFloat(inputStingValue);
    InputFiled.value='';
    return inputValueNumber;
  }
//   this funtion get textelement value
  function getElementVlaueById(elementId) {
      const elementValue= document.getElementById(elementId);
      const elementValueString=elementValue.innerText;
      const elementNumberValue = parseInt(elementValueString);
      return elementNumberValue;
  }
//   this function use set element value
  function setElementVlaueById(elementId, newValue){
      const textelement = document.getElementById(elementId);
      textelement.innerHTML=newValue;
  }
