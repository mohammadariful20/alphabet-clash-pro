function addClass(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function removeClass(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function randomAlphabet() {
    // random alphabets 
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabets.split('');
    // randomNumber genaret
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const randomalphabet = alphabet[index]; //random alphabet
    // console.log(randomalphabet)
    return randomalphabet
}
function displayText(elementId) {
    const display = document.getElementById(elementId);
    display.innerText = randomAlphabet();
    return display.innerText
}
function setBackgroundClour(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function removeBackgroundClour(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}