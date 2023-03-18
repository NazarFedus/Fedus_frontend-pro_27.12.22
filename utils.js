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


// form validation:

const formName = form.name;
console.log(formName)

const inputs = [
     {
          name: 'name',
		inputEl: nameInput,
		validationsRules: [validateStringLength, validateForValue],
		isValid: false,
		needToValidate: true,
		errorEl: nameInput.parentElement.querySelector('p')
     },
     {
          name: 'surname',
		inputEl: nameInput,
		validationsRules: [validateStringLength, validateForValue],
		isValid: false,
		needToValidate: true,
		errorEl: nameInput.parentElement.querySelector('p')
     },
     {

     }
]
