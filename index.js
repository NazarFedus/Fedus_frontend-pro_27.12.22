// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i

function generateKey(length, characters){
     let letters = characters.split('');
     let result = [];
     while(result.length < length){
        result.push(letters[Math.floor(Math.random() * letters.length)])
     }
     return result.join('')
}