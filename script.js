const alternatives = [
    {text:"", images:"images/cat-01.gif"},
    {text:"Я буду хорошим мальчиком", images:"images/cat-02.gif"},
    {text:"Я буду готовить тебе кушать", images:"images/cat-03.gif"},
    {text:"Ну согласись пожалуйста", images:"images/cat-04.gif"},
    {text:"Всё будет идеально если ты согласишься", images:"images/cat-05.gif"}
];
const ohyes = {text:"Я тебя люблю, зайка моя", images:"images/cat-yes.gif"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'Да'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'Нет'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});