 function getInnerTextByValue(id) {
   const value = document.getElementById(id).innerText;
   const convrtedValue = parseInt(value);
    return convrtedValue;
}

 function getInnerTextById(id) {
     const value = document.getElementById(id).innerText;
     const convrtedValue = parseInt(value);
     return convrtedValue;
 }

 function setInnerTextByIdAndValue(id,value) {
     document.getElementById(id).innerText = value;
 }