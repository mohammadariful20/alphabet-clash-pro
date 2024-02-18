function play() {
    // hide everything
    addClass('home-screen')
    addClass('score')
    removeClass('play-ground')
    // reset life and score 
    setValueElement('current-score',0)
    setValueElement('current-life',5)
    removeBackgroundClour('playerPressed')
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
        // console.log('You got a point')
        continuePlay()
        removeBackgroundClour(playerPressed)
        // console.log(playerPressed);
        scoreUpdate('current-score');
    } else {
        // console.log('You lost a "Life" and try again')
        // set life 
        let updatelife= lifeUpdate('current-life');
        if (updatelife === 0) {
            addClass('play-ground')
            removeClass('score')
            let lastScore= scoreUpdate('current-score');

            setValueElement('last-score',lastScore)
        }
    }
}
document.addEventListener("keyup", keyPrasshHandler);
// play ground section
function continuePlay() {
    const text = displayText('display-text')
    // console.log(text)
    setBackgroundClour(text.toLocaleLowerCase())
}
