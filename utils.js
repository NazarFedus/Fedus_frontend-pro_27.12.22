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
const formSurname = form.surname;
const formCity = form.city;
const formStore = form.store;
//
const form_bankCardOption = document.getElementById('bank');
const form_CashOnDelivery = document.getElementById('cash');
//
//Your purchase:
//
const formAmount = form.amount;
//
const formComment = form.сomment;

console.log(formName)

const inputs = [
     {
          name: 'name',
		inputEl: formName,
		validationsRules: [validateStringLength, validateForValue],
		isValid: false,
		needToValidate: true,
		// errorEl: nameInput.parentElement.querySelector('p')
     },
     {
          name: 'surname',
		inputEl: formSurname,
		validationsRules: [validateStringLength, validateForValue],
		isValid: false,
		needToValidate: true,
		// errorEl: nameInput.parentElement.querySelector('p')
     },
     {
          name: 'city',
          inputEl: formCity,
          validationsRules: [],
          isValid: true,
          needToValidate: false,
     },
     {
          name: 'store',
          inputEl: formStore,
          validationsRules: [],
          isValid: true,
          needToValidate: false,
     },
     {
          name: 'typeOfPayment',
          inputEl: [form_bankCardOption, form_CashOnDelivery],
          validationsRules: [chooseOne],
          isValid: false,
          needToValidate: true
     },
     {
          name: 'amount',
          inputEl: formAmount,
          validationsRules: [() => {}],
          isValid: false,
          needToValidate: true
     },
     {
          name: 'comment',
          inputEl: formComment,
          validationsRules: [validateStringLength],
          isValid: false,
          needToValidate: true
     }

]

function validateStringLength(string, typeOfInput){
     if(typeOfInput === 'name'){
          return string.length > 2;
     }
     if(typeOfInput === 'surname'){
          return string.length >= 2;
     }
     if(typeOfInput === 'comment'){
          return string.length > 25;
     }
}

function validateForValue(value, typeOfInput){
     if(typeOfInput === 'email'){
          return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
     }
     if(typeOfInput === 'name' || typeOfInput === 'surname'){
          return !isNaN(+value.trim())
     }
     return !!value.trim();
}

function chooseOne(){

}

function processOfValidation(){
     const validatedArr = inputs.map(el => {
          if(el.needToValidate){
               const isValidAll = el.validationsRules.map(func => {
                    return func(el.inputEl.value, el.name)
               })
               if(isValidAll.every(e => e === true)){
                    el.isValid = true;
               }

          } else {

          }
     })

     if(validatedArr.every(element => element === true)){
          const data = {};
          inputs.forEach(element => {
               data[element.name] = element.inputEl.value;
          })
          sendData(data);
     } else {
          console.log('something wrong');
     }
}

// ======= //

formCity.addEventListener('change', (e) => {
     showListOfStores(event.target.value)
})

function showListOfStores(city = 'Kyiv'){
     while (formStore.options.length > 0) {
          formStore.remove(0);
        }
     STORES[STORES.findIndex(e => e.city === city)].stores.forEach(element => {
          const store = document.createElement('option');
          store.innerHTML = `${element}`
          formStore.appendChild(store);
     })
}
