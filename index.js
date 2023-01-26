// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [1, 2, 3, 4, 5, 6, 7];

removeElement(array, 5);

function removeElement(array, item){
     array.forEach(element => element === item ? array.splice(array.indexOf(element), 1) : null);
}

console.log(array);