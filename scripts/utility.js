function getpop(element){
    const play = document.getElementById(element)
    play.classList.add('hidden')
}
function getpush(element){
    const display = document.getElementById(element)
    display.classList.remove('hidden')
}

function getARandomAlphabet(){
    const alphateString = "abcdefghijklmnopqrstuvwxyz"
    const alphabets = alphateString.split('')
    // get a random index between 0 -25
    const randomnumber = Math.random()*25;
    const index = Math.round(randomnumber)
    const alphabet = alphabets[index];
    return alphabet;
}
function setBackgroundcolorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
}