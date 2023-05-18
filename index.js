// store elements from html

const scoreEl = document.getElementById('score');
const form = document.getElementById('form');
const input = document.getElementById('input');
const question = document.getElementById('question');

const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()*10);

question.innerHTML = `Multiply ${num1} by ${num2}`;

const correctAns = num1*num2;
let score = JSON.parse(localStorage.getItem('score'));
scoreEl.innerText = `Score: ${score}`;
if(!score){
    score = 0
}

form.addEventListener('submit', ()=>{
    const userAns = +input.value;
    if(userAns === correctAns){
        score++;
        console.log(score)
        updateLocalStorage()
    }else{
        score--;
        console.log(score)
        updateLocalStorage()
    }
});
const updateLocalStorage = ()=>{
localStorage.setItem('score',JSON.stringify(score));

}

 