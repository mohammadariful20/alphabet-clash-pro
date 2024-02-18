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
function scoreUpdate(elementId) {
     // score update
     const currentScoreElement=document.getElementById(elementId);
     const currentScoreValue=currentScoreElement.innerText;
     let currentScoreNumber=parseInt(currentScoreValue);
     // set the current scroe 
     const newScore= currentScoreNumber+1;
     // set the new score
     currentScoreElement.innerText=newScore;
    return currentScoreNumber
}
function lifeUpdate(elementId) {
     // life update
     const currentScoreElement=document.getElementById(elementId);
     const currentScoreValue=currentScoreElement.innerText;
     let currentScoreNumber=parseInt(currentScoreValue);
     // set the current life 
     const newLife= currentScoreNumber-1;
     // set the new life
     currentScoreElement.innerText=newLife;
     return newLife;
}
function setValueElement(elementId,value) {
    const element=document.getElementById(elementId);
    element.innerText=value;
}