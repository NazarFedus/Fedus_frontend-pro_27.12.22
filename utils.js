//clear all lists and active category
function globalClear(){
     // remove active class in block "category";
     tabs.querySelector('.active').classList.remove('active');

     // remove elements in block "listOfProducts";
     listProducts.querySelectorAll('.tab').forEach(e => listProducts.removeChild(e));

     // remove box of info in block "blockInfo";
     blockInfo.removeChild(blockInfo.querySelector('.box__info'));
}

// clear previous list
function clearPrevious(parent, className){
     const list = parent.querySelectorAll(className);
     if(list) list.forEach(e => parent.removeChild(e));
}


// clear all data from inputs in form:
function clearDataInputs(){
     inputs.forEach(input => {
          if(input.needToClear) input.inputEl.value = '';
          if(input.byDefault){
               input.name === 'typeOfPayment'
                    ? input.inputEl[0].checked = true
                    : input.inputEl.value = input.byDefault;
          }
          if(input.errorMessage) input.errorMessage.classList.add('hide');
     })
}

