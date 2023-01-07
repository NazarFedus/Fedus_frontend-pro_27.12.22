const nums = []
const actions = ['/','*','+','-', 'add', 'sub', 'mult', 'div'];

// enter action:
let action = prompt('Enter action:');
while (!actions.includes(action)) {
     action = prompt('Enter correct action:');
}

// enter first number:
nums.push(+prompt('Enter first number:'));
while(isNaN(nums[0]) === true){
     nums[0] = +prompt("It's not a number. Please enter first number:");
}

// enter second number:
nums.push(+prompt('Enter second number:'));
while(isNaN(nums[1]) === true){
     nums[1] = +prompt("It's not a number. Please enter second number:");
}

// show the result:
alert(`The result is ${calculate(nums[0], nums[1], action)}`);

// function to calculate:
function calculate(num1, num2, action) {
     if(action === '/' || action === 'div'){
          return num1 / num2;
     } else if(action === '*' || action === 'mult'){
          return num1 * num2;
     } else if(action === '+' || action === 'add'){
          return num1 + num2;
     } else if(action === '-' || action === 'sub'){
          return num1 - num2;
     }
}

