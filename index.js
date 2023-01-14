// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
for(let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let dollar = 27;
for(let i = 10; i <= 100; i+=10){
  console.log(`${i} dollars is ${27 * i} UAN`);
}

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
// input
let n = +prompt('Enter number N:');
while(n <= 0 || isNaN(n)){
  n = +prompt('Enter number N:');
}
// output
for(let i = 1; i <= 100; i++){
     if(Math.pow(i, 2) <= n){
          console.log(i)
     }
}

// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// input
let n = +prompt('Enter number N:');
while(n <= 0 || isNaN(n)){
     n = +prompt('Enter number N:');
}
// output
if(n <= 1){
     console.log(`The number ${n} is not prime`);
}
if(n === 2){
     console.log(`The number ${n} is prime`);
}

for (let i = 2; i <= n / 2; i++) {
     if (n % i == 0) {
          console.log(`The number ${n} is not prime`);
          break;
     } else {
          console.log(`The number ${n} is prime`);
          break;
     }
}

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

// input
let n = +prompt('Enter number N:');
while(n <= 0 || isNaN(n)){
     n = +prompt('Enter number N:');
}

// output
let i = 1;
let result = false;

while(Math.pow(3, i) <= n){
  if(Math.pow(3,i) === n){
     console.log(`Так, число ${n} можна отримати шляхом зведення числа 3 у ступінь ${i}.`)
     result = true;
     break;
  } else {
    i++;
  }
}
if(!result){
  console.log(`Ні, число ${n} не можна отримати шляхом зведення числа 3 у ступінь.`);
}
