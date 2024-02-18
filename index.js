function play() {
    addClass('home-screen')
    removeClass('play-ground')
    continuePlay()
}
function keyPrasshHandler(event) {
    // playerprswhed
    const playerPressed = event.key;
    // console.log('player preshed',playerPressed);
    //expated pressed
    const expatedPress = document.getElementById('display-text');
    const expatedalpha = expatedPress.innerText.toLocaleLowerCase();
    // console.log(expatedalpha);
    // check equale pressed
    if (expatedalpha === playerPressed) {
        console.log('You got a point')
        continuePlay()
        removeBackgroundClour(playerPressed)
        console.log(playerPressed);
    } else {
        console.log('You lost a "Life" and try again')
    }
}
document.addEventListener("keyup", keyPrasshHandler);
// play ground section
function continuePlay() {
    const text = displayText('display-text')
    // console.log(text)
    setBackgroundClour(text.toLocaleLowerCase())
}
