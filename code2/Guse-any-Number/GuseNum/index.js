

let number = document.querySelector('.number');
let checkButton = document.querySelector('.checkButton');
let tryagainbtn = document.querySelector('.tryagainbtn');
let detailimg = document.querySelector('.detailimg');
let overlay = document.querySelector('.overlay');
let details = document.querySelector('.details');
let hide = document.querySelector('hide');
let backtohome = document.querySelector('.backtohome');
let highscore = document.querySelector('.highscore');
let Score = document.querySelector('.Score');
 

// console.log(checkButton);
// console.log(tryagainbtn);
// console.log(detailimg);
// console.log(overlay);
// console.log(backtohome);
// console.log(details);
// console.log(details);
// console.log(number.value);
// console.log(highscore);
// console.log(Score)

detailimg.addEventListener('click', () => {
    overlay.classList.remove('hide')
    details.classList.remove('hide')
})
backtohome.addEventListener('click', () => {
    overlay.classList.add('hide');
    details.classList.add('hide');
})

console.log(highscore.textContent);
console.log(Score.textContent)


checkButton.addEventListener('click', () => {
    let mathRandomNumber = Math.round(Math.random() * 10);
    console.log(mathRandomNumber);
    if(number.value === ''){
        alert('bhai kxh tw lhik');
        return false
    }
    if (Score.textContent > 0) {

        if (mathRandomNumber==number.value) {
            alert('You Win')
            Score.textContent = +Score.textContent + 1;
            if (highscore.textContent < Score.textContent) {
                highscore.textContent = Score.textContent;
                number.value =''

            }else{
                console.log('You lose')
              
            }
        }else{
            Score.textContent = +Score.textContent - 1;
           console.log( 'Pleas Try again')
        }
    }else(alert('You lose game'))
})

tryagainbtn.addEventListener('click',() => { 

    console.log('hi');

    Score.textContent = 20;
    highscore.textContent = 0;
    number.value = ''

    // number.classList.remove(number.value);



  

})