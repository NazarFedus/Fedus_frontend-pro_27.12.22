let userName = prompt('What is your name?');

if(userName){
     alert(`Hello, ${userName}! How are you?`);
} else {
     alert(`Hello, Stranger! How are you?`)
}


// простіший варіант:
// alert(`Hello, ${prompt('What is your name?')}! How are you?`);