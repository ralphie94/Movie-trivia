let choices = []
const movies = [
    {title: "Raging Bull", image: "images/raging bull.png"}, 
    {title: "Star Wars", image: "images/starwars.jpg"}, 
    {title: "Goodfellas", image: "images/goodfellaspic.jpg"}, 
    {title: "Taxi Driver", image: "images/taxidriver.jpg"},
    {title: "Pulp Fiction", image: "images/pulpfiction.jpg"},
    {title: "A Clockwork Orange", image: "images/clockwork.jpg"},
    {title: "Jaws", image: "images/jaws.jpg"},
    {title: "King Kong", image: "images/kingkong.jpg"},
    {title: "Psycho", image: "images/psycho.png"},
    {title: "The Godfather", image: "images/thegodfather.jpeg"},
    {title: "Gone With the Wind", image: "images/gwtw.jpg"},
    {title: "Sunset Boulevard", image: "images/sunsetblvd.png"},
    {title: "Vertigo", image: "images/vertigo.jpg"},
    {title: "The Silence of the Lambs", image: "images/lambs3.jpg"},
    {title: "Rocky", image: "images/rocky.jpg"},
    {title: "The Deer Hunter", image: "images/deerhunter.jpg"},
    {title: "Platoon", image: "images/platoon.jpg"},
    {title: "Fargo", image: "images/fargo.jpg"},
    {title: "North by Northwest", image: "images/north.jpg"},
    {title: "Rear Window", image: "images/rear.jpg"},
    {title: "The Treasure of the Sierra Madre", image: "images/treasure.jpg"},
    {title: "2001: A Space Odyssey", image: "images/2001.jpg"},
    {title: "Chinatown", image: "images/Chinatown.jpg"},
    {title: "Drive", image: "images/drive.jpg"},
    {title: "The Departed", image: "images/departed.jpg"},
    {title: "Apocalypse Now", image: "images/apocalypse.jpg"},
    {title: "There Will Be Blood", image: "images/twbb.jpg"},
    {title: "Boogie Nights", image: "images/boogienights.jpg"},
    {title: "Casino", image: "images/casino.jpg"},
    {title: "Kill Bill", image: "images/killbill.jpg"},
    {title: "Death Proof", image: "images/deathproof.jpg"},
    {title: "Once Upon a Time in America", image: "images/outa.jpg"},
    {title: "A Bronx Tale", image: "images/bronxtale.jpg"},
    {title: "The Shining", image: "images/shining.jpg"},
    {title: "The Fly", image: "images/fly.jpg"},
    {title: "The Color of Money", image: "images/color.jpg"},
    {title: "Inglourious Basterds", image: "images/basterds.jpg"},
    {title: "American Beauty", image:"images/american.png"},
    {title: "Full Metal Jacket", image:"images/fmj.jpg"},
    {title: "Moonlight", image: "images/moonlight.jpg"},
    {title: "Gangs of New York", image: "images/gangs.jpg"},
    {title: "The Master", image: "images/master.jpg"},
    {title: "Inherent Vice", image: "images/inherentvice.png"},
    {title: "True Romance", image: "timages/rueromance.jpg"},
    {title: "Seven", image: "images/seven.jpg"},
    {title: "Fight Club", image: "images/fightclub.jpg"}
];

const choice = [
    {title: "Raging Bull", image: "images/raging bull.png"}, 
    {title: "Star Wars", image: "images/starwars.jpg"}, 
    {title: "Goodfellas", image: "images/goodfellaspic.jpg"}, 
    {title: "Taxi Driver", image: "images/taxidriver.jpg"},
    {title: "Pulp Fiction", image: "images/pulpfiction.jpg"},
    {title: "A Clockwork Orange", image: "images/clockwork.jpg"},
    {title: "Jaws", image: "images/jaws.jpg"},
    {title: "King Kong", image: "images/kingkong.jpg"},
    {title: "Psycho", image: "images/psycho.png"},
    {title: "The Godfather", image: "images/thegodfather.jpeg"},
    {title: "Gone With the Wind", image: "images/gwtw.jpg"},
    {title: "Sunset Boulevard", image: "images/sunsetblvd.png"},
    {title: "Vertigo", image: "images/vertigo.jpg"},
    {title: "The Silence of the Lambs", image: "images/lambs3.jpg"},
    {title: "Rocky", image: "images/rocky.jpg"},
    {title: "The Deer Hunter", image: "images/deerhunter.jpg"},
    {title: "Platoon", image: "images/platoon.jpg"},
    {title: "Fargo", image: "images/fargo.jpg"},
    {title: "North by Northwest", image: "images/north.jpg"},
    {title: "Rear Window", image: "images/rear.jpg"},
    {title: "The Treasure of the Sierra Madre", image: "images/treasure.jpg"},
    {title: "2001: A Space Odyssey", image: "images/2001.jpg"},
    {title: "Chinatown", image: "images/Chinatown.jpg"},
    {title: "Drive", image: "images/drive.jpg"},
    {title: "The Departed", image: "images/departed.jpg"},
    {title: "Apocalypse Now", image: "images/apocalypse.jpg"},
    {title: "There Will Be Blood", image: "images/twbb.jpg"},
    {title: "Boogie Nights", image: "images/boogienights.jpg"},
    {title: "Casino", image: "images/casino.jpg"},
    {title: "Kill Bill", image: "images/killbill.jpg"},
    {title: "Death Proof", image: "images/deathproof.jpg"},
    {title: "Once Upon a Time in America", image: "images/outa.jpg"},
    {title: "A Bronx Tale", image: "images/bronxtale.jpg"},
    {title: "The Shining", image: "images/shining.jpg"},
    {title: "The Fly", image: "images/fly.jpg"},
    {title: "The Color of Money", image: "images/color.jpg"},
    {title: "Inglourious Basterds", image: "images/basterds.jpg"},
    {title: "American Beauty", image:"images/american.png"},
    {title: "Full Metal Jacket", image:"images/fmj.jpg"},
    {title: "Moonlight", image: "images/moonlight.jpg"},
    {title: "Gangs of New York", image: "images/gangs.jpg"},
    {title: "The Master", image: "images/master.jpg"},
    {title: "Inherent Vice", image: "images/inherentvice.png"},
    {title: "True Romance", image: "timages/rueromance.jpg"},
    {title: "Seven", image: "images/seven.jpg"},
    {title: "Fight Club", image: "images/fightclub.jpg"}
];

const img = $("#image")
const $buttons = $(".guess")
const $button = $(".btn")
const $money = $("#money span")
const $text = $("#textbox")
const $difficulty = $("#difficulty")
const $easy = $("#easy")

const player = {
    money: 20,
    question: [],
}

function init() {
        let index = Math.floor(Math.random() * movies.length)
        player.question = []
        player.question.push(movies[index])
        movies.splice([index], 1)
        console.log(`Player was given ${player.question[player.question.length-1].title}`);
        makeChoices();
        render();
        gameOver();
}

function render () {
    img.attr("src", player.question[player.question.length-1].image);
    for (let i = 0; i < $buttons.length; i++){
      $($buttons[i]).text(choices[i].title)
      gameOver();
    }
}

init();

function checkToSeeIfMovieIsInArray(choices, movie) {
    return choices.some((c) => c.title === movie.title)
}

function makeChoices () {
    choices = []
   for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * choice.length)
    if(choice[random].title !== player.question[player.question.length-1].title && !checkToSeeIfMovieIsInArray(choices, choice[random] )) {
        choices.push(choice[random])
    } else {
        i--
    }
   }
   choices.splice(Math.floor(Math.random() * 4), 0, player.question[player.question.length-1])
   gameOver();
 }

$buttons.on("click", (e) => {
    clearInterval(interval);
    if (e.target.innerText === player.question[0].title) {
         $money.text(player.money += 5);
         render();
         init();
         timeLeft = 10;
         timer();
         $(e.target).css("backgroundColor", "green");
         window.setTimeout (function() {
             $(e.target).css("backgroundColor", "");
         }, 400);
    } else {
        $money.text(player.money -= 5);
        render();
        init();
        timeLeft = 10;
        timer();
        $(e.target).css("backgroundColor", "red");
        window.setTimeout (function() {
            $(e.target).css("backgroundColor", "");
        }, 400);
        gameOver();
    }
})

 timer();
 let timeLeft = 10;

 function timer () {
    interval = window.setInterval(function() {
        timeLeft -= 1;
        if (timeLeft <= 0){
            $money.text(player.money -= 5)
            clearInterval(interval)
            render();
            init();
            timeLeft = 10;
            timer();
            $buttons.css("backgroundColor", "red");
            window.setTimeout (function() {
                $buttons.css("backgroundColor", "");
            }, 400);
            gameOver();
            return;
        }
        $('.timer').text("Timer: "+ timeLeft)
        }, 1000)
}

$text.hide();
$easy.hide();

$difficulty.on("click", (e) => {
    clearInterval(interval);
    timeLeft = 15;
    timer();
    $text.show();
    $buttons.hide();
    $difficulty.hide();
    $easy.show();
});

$easy.on("click", (e) => {
    clearInterval(interval);
    timeLeft = 10;
    timer();
    $buttons.show();
    $text.hide();
    $difficulty.show();
    $easy.hide();
});

$("form").on("submit", (e) => {
    clearInterval(interval);
    e.preventDefault();
    const valueOfInput = $("#txt").val();
    if (valueOfInput.toLowerCase() === player.question[player.question.length-1].title.toLowerCase()){
        $money.text(player.money += 5);
        render();
        init();
        timeLeft = 15;
        timer();
        $("#txt").val("");
    } else {
        $money.text(player.money -= 5);
        render();
        init();
        timeLeft = 15;
        timer();
        $("#txt").val("");
    }
});

function gameOver() {
    if (player.money === 0 || movies.length === 0) {
        clearInterval(interval);
        img.attr("src", "gameover.jpg");
        $buttons.hide();
    }
}













 














 









