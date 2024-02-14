// function play(){
//     const homesection = document.getElementById('home-screen')
//     homesection.classList.add('hidden');
//     const playground = document.getElementById('play-ground')
//     playground.classList.remove('hidden')
// }
function continuegem(){
    const alphabet = getARandomAlphabet()
    console.log("Your random alphabet "+alphabet);
    // set randomly generated alphabet to the screen(show it)
    const currentalphabetElement = document.getElementById('current-alphabet')
    currentalphabetElement.innerText = alphabet;
    
    // set background color
    setBackgroundcolorById(alphabet);
    

}
function play(){
    getpop('home-screen')
    getpush('play-ground')
    continuegem()
}