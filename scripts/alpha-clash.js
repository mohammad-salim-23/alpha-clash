// function play(){
//     const homesection = document.getElementById('home-screen')
//     homesection.classList.add('hidden');
//     const playground = document.getElementById('play-ground')
//     playground.classList.remove('hidden')
// }
function continuegame(){
    const alphabet = getARandomAlphabet()
    // console.log("Your random alphabet "+alphabet);
    // set randomly generated alphabet to the screen(show it)
    const currentalphabetElement = document.getElementById('current-alphabet')
    currentalphabetElement.innerText = alphabet;
    
    // set background color
    setBackgroundcolorById(alphabet);
    

}
function play(){
    // hide everything show only the playground
    getpop('home-screen')
    getpop('final-score')
    getpush('play-ground')

    // reset score and life
    setTextElementById('life-score',5);
    setTextElementById('current-score',0);
    
    

    continuegame()
}
// captured keyboard keypress
document.addEventListener('keyup',function handlerkeyboardKeyUpEvent(event){
        const playerpressed = event.key
        console.log('player pressed',playerpressed)

        //  stop game if playered want
        if(playerpressed==='Escape'){
            gameover();
        }

        // get the expected to press
        const currentalphabetElement = document.getElementById('current-alphabet')
        const currentalphabet = currentalphabetElement.innerText;
        const expectedalphabet = currentalphabet.toLowerCase()
        console.log(playerpressed,expectedalphabet)

        // check right or wrong key passed
        if(playerpressed===expectedalphabet){
            console.log('Boss , You get a point')
            const currentScore = getTextElementValueById('current-score');
            
            const updatedscore = currentScore+1;
            setTextElementById('current-score', updatedscore );
            
            removeBackgroundColorById(expectedalphabet);
            continuegame()

            // ------------ignore  -------0-
            // console.log('you have pressed correctly ',expectedalphabet)
            // update score
            // 1. get the current score
        //     const currentscoreElement = document.getElementById('current-score')
        //    const currentscoreText =  currentscoreElement.innerText;
        //    const currentScore = parseInt(currentscoreText);

        // same kaaj function er sahajje 
       
           
        // //  2.  increase the score by 1
        // const newScore = currentScore+1;
        // // 3. show the update score
        // currentscoreElement.innerText = newScore;
        // console.log(newScore);
       

            // removeBackgroundColorById(expectedalphabet);
            // continuegame()
        }else{
            console.log('OOPS! vatija eida ki korla ,\n try again')
            const life = getTextElementValueById('life-score');
         
            const value = parseInt(life);
            const presentlife = value-1;
            
            setTextElementById('life-score',presentlife);
            if(presentlife===0){
                console.log('Game-Over');
                gameover();
            }

        //     // step-1: get the current life number
        //     const life = document.getElementById('life-score');
        //    const newLife =  life.innerText ;
        // //    step-2: reduce life count
        //    const newlifescore = parseInt(newLife);
        //    const presentlife = newlifescore-1;
        //    life.innerText = presentlife;
           

        }



})
// window.addEventListener('load',function(){
//     console.log('window loading');
//     this.alert('please wait a moment....')
// });
const just = document.getElementById('just');
just.addEventListener('mouseover',function(){
    just.style.backgroundColor='yellow'
})
just.addEventListener('mouseleave',function(){
    just.style.backgroundColor="";
})
function gameover(){
    getpop('play-ground');
    getpush('final-score');
    // update final score
    // 1.get the final score
    const lastscore =getTextElementValueById('current-score');
    console.log(lastscore)
    
    setTextElementById('last-score',lastscore);

    // clear the last selected highlight alphabet
    const currentalphabet = getelementTextById('current-alphabet')
    removeBackgroundColorById(currentalphabet)

}