//Частина №1

const capitals = [
     {city: "Kyiv", country: "Ukraine"},
     {city: "London", country: "United Kingdom"},
     {city: "Washington", country: "USA"}
]

// inputs
const year = prompt("What year were you born?");
if(!year){
     alert("It's a pity that you didn't want to enter your year of birth.");
}
const city = prompt("What city do you live in?");
if(!city){
     alert("It's a pity that you didn't want to enter your city.");
}
const sport = prompt("What is your favorite sport?");
if(!sport){
     alert("It's a pity that you didn't want to enter your favorite sport.");
}

//check
let checkCity = capitals.filter(item => item.city === city);
if(checkCity.length !== 0) {
     alert(`You were born in ${year}. You live in the capital of ${checkCity[0].country}`)
} else {
     alert(`You were born in ${year}. You live in ${city}`)
}


//Частина №2

const chempions = [
     {sport: 'swimming', name: 'Michael Phelps'},
     {sport: 'football', name: 'Lionel Messi'},
     {sport: 'basketball', name: 'LeBron James'}
]

// inputs
const favoriteSport = prompt("What is your favorite sport?").toLowerCase();

// check
if(!favoriteSport){
     alert("It's a pity that you didn't want to enter your favorite sport.");
} else {
     let check = chempions.filter(item => item.sport === favoriteSport);
     if(check.length !== 0){
          alert(`Cool! Do you want to become like ${check[0].name}?`);
     }
}