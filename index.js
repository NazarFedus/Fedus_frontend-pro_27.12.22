// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

const getSum = number => {
   const n = number;
   return function (number) {
         return n + number;
   }
}

const sum = getSum(5);
console.log(sum(2));
console.log(sum(3));
console.log(sum(5)); 
