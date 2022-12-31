let userName = prompt("What is your name?");
let age = prompt("How old are you?");
let smoke = confirm("Do you smoke?");

if(age >= 18 && smoke === true){
     alert(`Привіт ${userName}, що ж, ти сам обрав цей шлях...`)
} else if(age >= 18 && smoke === false){
     alert(`Привіт ${userName}, чудово! Ти мабуть ще й спортом займаєшся!`)
} else if(age < 18 && smoke === true){
     alert(`Привіт ${userName}! А батьки знають про це?`)
} else {
     alert(`Привіт ${userName}! Правильно, зараз головне добре вчитися!`)
}
