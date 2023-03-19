// form validation:
const formName = form.name;
const formSurname = form.surname;
const formCity = form.city;
const formStore = form.store;
//
const form_bankCardOption = document.getElementById('bank');
const form_CashOnDelivery = document.getElementById('cash');
//
const formAmount = form.amount;
//
const formComment = form.сomment;

const inputs = [
     {
          name: 'name',
		inputEl: formName,
		validationsRules: [validateStringLength, validateForValue],
		isValid: false,
		needToValidate: true,
          needToClear: true,
          errorMessage: document.getElementById('errorName')
     },
     {
          name: 'surname',
		inputEl: formSurname,
		validationsRules: [validateStringLength, validateForValue],
		isValid: false,
		needToValidate: true,
          needToClear: true,
          errorMessage: document.getElementById('errorSurname')
     },
     {
          name: 'city',
          inputEl: formCity,
          validationsRules: [],
          isValid: true,
          needToValidate: false,
          needToClear: false,
          byDefault: 'Kyiv',
          errorMessage: false
     },
     {
          name: 'store',
          inputEl: formStore,
          validationsRules: [],
          isValid: true,
          needToValidate: false,
          needToClear: false,
          errorMessage: false
     },
     {
          name: 'typeOfPayment',
          inputEl: [form_bankCardOption, form_CashOnDelivery],
          validationsRules: [],
          isValid: false,
          needToValidate: false,
          needToClear: true,
          byDefault: form_bankCardOption,
          errorMessage: false
     },
     {
          name: 'amount',
          inputEl: formAmount,
          validationsRules: [],
          isValid: false,
          needToValidate: false,
          needToClear: true,
          byDefault: 1,
          errorMessage: document.getElementById('errorAmount')
     },
     {
          name: 'comment',
          inputEl: formComment,
          validationsRules: [validateStringLength],
          isValid: false,
          needToValidate: true,
          needToClear: true,
          errorMessage: document.getElementById('errorComment')
     }
]

function validateStringLength(string, typeOfInput){
     if(typeOfInput === 'name'){
          return string ? string.length > 2 : false;
     }
     if(typeOfInput === 'surname'){
          return string ? string.length >= 2 : false;
     }
     if(typeOfInput === 'comment'){
          return string ? string.length > 25 : false;
     }
}

function validateForValue(value, typeOfInput){
     if(typeOfInput === 'name' || typeOfInput === 'surname'){
          return typeof value === 'string' && value.trim().length > 0;
     }
     return !!value.trim();
}

function chooseOne(){

}

function processOfValidation(product){
     const validatedArr = inputs.map(el => {
          if(el.needToValidate){
               const isValidAll = el.validationsRules.map(func => {
                    return func(el.inputEl.value, el.name)
               })
               if(isValidAll.every(e => e === true)){
                    el.isValid = true;
                    el.errorMessage !== false ? el.errorMessage.classList.add('hide') : '';
                    return true
               } else {
                    el.errorMessage ? el.errorMessage.classList.remove('hide') : '';
               }

          } else {
               return true
          }
     })
     if(validatedArr.every(element => element === true)){
          const data = {};
          inputs.forEach(element => {
               if(element.name === 'typeOfPayment') {
                    element.inputEl.forEach(e => {
                         if(e.checked) data[element.name] = e.value;
                    })
               } else {
                    data[element.name] = element.inputEl.value;
               }
          })
          sendData(data, product);
          alert('Your order has been successfully placed')
          return true
     } else {
          console.log('something wrong');
          return false
     }
}

// ======= //

formCity.addEventListener('change', (e) => {
     showListOfStores(e.target.value)
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

function sendData(data, product){
     console.log(data)
     console.log('send on server')
     data.product = product;
     purchase.push(data);
     console.log(`All purchases:`)
     console.log(purchase)
}

