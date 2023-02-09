// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
// (done)

const arr = [1, 2, 3, 4, 5, 6, 'a', 'b', 'c', 'd', 'e', 10, 'f', 'g', 'h', 'i', 17, 'j', true, false, true, () => console.log('hello'), 7, 8, 9, 10, {name: 'Nazar'}];

function average(arr) {
       return arr.filter(item => typeof item === 'number')
                 .reduce((sum, el, index, array) => index !== array.length - 1 ? sum += el : (sum += el)/array.length, 0)
}

console.log(average(arr))


// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача. (done)

const znak = ['+', '-', '*', '/', '%', '^']
const data = [
      {name: 'x', type: 'number', value: null},
      {name: 'znak', type: 'znak', value: null},
      {name: 'y', type: 'number', value: null}
]

function getValues(data){
      for(let key of data){
            key.value = key.type === 'number' ? +prompt(`Enter value of ${key.name}:`) : prompt(`Enter value of ${key.name}:`);
            validation(data.indexOf(key), key.value, key.type);
      }
      return function doMath(x, znak, y) {
            switch (znak) {
                case '+':
                    return x + y;
                case '-':
                    return x - y;
                case '*':
                    return x * y;
                case '/':
                    return x / y;
                case '%':
                    return x % y;
                case '^':
                    return Math.pow(x, y);
                default:
                    return 'Error'
            }
      }
    }

const result = getValues(data);
// show result:
alert(`The result is: ${result(data[0].value, data[1].value, data[2].value)}`)


// validation:
function validation(index, element, type){
      if(isNaN(element) && type === 'number'){
            element = +prompt(`Enter correct number:`);
            validation(index, element, type);
      } else if (type === 'znak' && !znak.includes(element)){
            element = prompt(`Enter correct znak: ${znak.join(', ')}`);
            validation(index, element, type);
      } else {
            console.log('validation done', element)
            data[index].value = element;
      }
}

// 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач. (done)

function fillArray(){
      const arr = [];
      const mainArrLength = +prompt('Enter main array length');
      for(let i = 0; i < mainArrLength; i++){
            const innerArr = [];
            const innerArrLength = +prompt('Enter inner array length');
            for(let j = 0; j < innerArrLength; j++){
                  innerArr.push(prompt('Enter value'));
            }
            arr.push(innerArr);
      }
      return arr;
}

console.log(fillArray());


// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач. (done)

function func(str, arr){
      return str.split('').filter(item => !arr.includes(item)).join('');
}

console.log(func("hello world", ['l', 'd'])); // heo wor
