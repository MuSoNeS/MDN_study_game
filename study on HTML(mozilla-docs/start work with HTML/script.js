//забрать введенное значение
const submitGuessButtonClickListener = document.getElementById("submit-guess-button");


//по кнопке сгенерировать новое значение случайно и сравнить с тем, что забрали


const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

//Селекторы элементов
const previousGuessesP = document.getElementById("previous-guesses-p").textContent


submitGuessButtonClickListener.addEventListener("click", function(e){
    const enterAGuessValue = document.getElementById("enter-a-guess").value;
    if(enterAGuessValue == randomNumber){
        document.getElementById("previous-guesses-p").textContent = Number(enterAGuessValue);
        document.getElementById("red-green-alert-p").textContent = "Congratulations! You got it right!";
        document.getElementById("min-max-guess-answer").textContent = "";
    }else if(enterAGuessValue < randomNumber){
        document.getElementById("previous-guesses-p").textContent = Number(enterAGuessValue);
        document.getElementById("red-green-alert-p").textContent = "Wrong!";
        document.getElementById("min-max-guess-answer").textContent = "Last guess was too low!";
    }else if(enterAGuessValue > randomNumber){
        document.getElementById("previous-guesses-p").textContent = Number(enterAGuessValue);
        document.getElementById("red-green-alert-p").textContent = "Wrong!";
        document.getElementById("min-max-guess-answer").textContent = "Last guess was too hight!";
    }else{
        alert("Error");
    }
});
//Вывести ответ в previous guess
//Вывести верность ответа
//Вывести подсказку
