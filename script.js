const button =document.querySelector("#btn");
const par = document.querySelector("#par");

const predictions = ["Год подарит счастливые случайности!", "Шанса набить морду судьбе в новом году не представится.", "Хорошие манеры и быстрые рефлексы помогут получить больше жизненных трофеев.", "Деньги не будут тебя беспокоить в следующем году. Они будут тебя успокаивать.", "В новом году настоящее веселье ты получишь только с настоящими друзьями, а не виртуальными.", "Деньги на ложку икры у тебя в новом году найдутся…черной икры или кабачковой – зависит от тебя!", "Добрые дела, сделанные ранее, принесут дивиденды.", "Наступят моменты, когда счастье тебе не придется симулировать.", "Жизнь предоставит случай закалить характер.", "Успех придет! Примени инициативу и планирование.", "Переживешь ощущение победы.", "Тебе предоставится множество шансов потратить свое время в пустую.", "1 января вся еда на столе станет прошлогодней. Остерегайся!!!", "Кому-то потребуется твоя поддержка.", "Методом проб и ошибок ты нащупаешь правильную жизненную стратегию.", "Жизнелюбие поможет легче пережить неидеальность этого мира.", "Улыбаться в новом году придется много: кому-то искренне, а кому-то на зло…", "Независимо от того насколько медленно ты будешь продвигаться к своей цели, всё равно будешь впереди тех, кто даже не пытается что-то сделать!" ];

button.addEventListener ("click", () => {
    let randomPred = predictions[Math.floor(Math.random()*predictions.length)];
    par.textContent = randomPred;
    par.style.display = "block";
})

//Audio

const myAudioButton = document.querySelector("#myButton");

myAudioButton.addEventListener("click", play);

    function play () {
        const myAudio =document.querySelector("#myAudio").play();
    }

    play ();


