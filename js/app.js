let choices = []
const movies = [
    {title: "Raging Bull", image: "raging bull.png"}, 
    {title: "Star Wars", image: "starwars.jpg"}, 
    {title: "Goodfellas", image: "goodfellaspic.jpg"}, 
    {title: "Taxi Driver", image: "taxidriver.jpg"},
    {title: "Pulp Fiction", image: "pulpfiction.jpg"},
    {title: "A Clockwork Orange", image: "clockwork.jpg"},
    {title: "Jaws", image: "jaws.jpg"},
    {title: "King Kong", image: "kingkong.jpg"},
    {title: "Psycho", image: "psycho.png"},
    {title: "The Godfather", image: "thegodfather.jpeg"},
    {title: "Gone With the Wind", image: "gwtw.jpg"},
    {title: "Sunset Boulevard", image: "sunsetblvd.png"},
    {title: "Vertigo", image: "vertigo.jpg"},
    {title: "The Silence of the Lambs", image: "lambs3.jpg"},
    {title: "Rocky", image: "rocky.jpg"},
    {title: "The Deer Hunter", image: "deerhunter.jpg"},
    {title: "Platoon", image: "platoon.jpg"},
    {title: "Fargo", image: "fargo.jpg"},
    {title: "North by Northwest", image: "north.jpg"},
    {title: "Rear Window", image: "rear.jpg"},
    {title: "The Treasure of the Sierra Madre", image: "treasure.jpg"},
    {title: "2001: A Space Odyssey", image: "2001.jpg"},
    {title: "Chinatown", image: "Chinatown.jpg"},
    {title: "Drive", image: "drive.jpg"},
    {title: "The Departed", image: "departed.jpg"},
    {title: "Apocalypse Now", image: "apocalypse.jpg"},
    {title: "There Will Be Blood", image: "twbb.jpg"},
    {title: "Boogie Nights", image: "boogienights.jpg"},
    {title: "Casino", image: "casino.jpg"},
    {title: "Kill Bill", image: "killbill.jpg"},
    {title: "Death Proof", image: "deathproof.jpg"},
    {title: "Once Upon a Time in America", image: "outa.jpg"},
    {title: "A Bronx Tale", image: "bronxtale.jpg"},
    {title: "The Shining", image: "shining.jpg"},
    {title: "The Fly", image: "fly.jpg"},
    {title: "The Color of Money", image: "color.jpg"},
    {title: "Inglourious Basterds", image: "basterds.jpg"},
    {title: "American Beauty", image:"american.png"},
    {title: "Full Metal Jacket", image:"fmj.jpg"},
    {title: "Moonlight", image: "moonlight.jpg"},
    {title: "Gangs of New York", image: "gangs.jpg"},
    {title: "The Master", image: "master.jpg"},
    {title: "Inherent Vice", image: "inherentvice.png"},
    {title: "True Romance", image: "trueromance.jpg"},
    {title: "Seven", image: "seven.jpg"}
];

const choice = [
    {title: "Raging Bull", image: "raging bull.png"}, 
    {title: "Star Wars", image: "starwars.jpg"}, 
    {title: "Goodfellas", image: "goodfellaspic.jpg"}, 
    {title: "Taxi Driver", image: "taxidriver.jpg"},
    {title: "Pulp Fiction", image: "pulpfiction.jpg"},
    {title: "A Clockwork Orange", image: "clockwork.jpg"},
    {title: "Jaws", image: "jaws.jpg"},
    {title: "King Kong", image: "kingkong.jpg"},
    {title: "Psycho", image: "psycho.png"},
    {title: "The Godfather", image: "thegodfather.jpeg"},
    {title: "Gone With the Wind", image: "gwtw.jpg"},
    {title: "Sunset Boulevard", image: "sunsetblvd.png"},
    {title: "Vertigo", image: "vertigo.jpg"},
    {title: "The Silence of the Lambs", image: "lambs3.jpg"},
    {title: "Rocky", image: "rocky.jpg"},
    {title: "The Deer Hunter", image: "deerhunter.jpg"},
    {title: "Platoon", image: "platoon.jpg"},
    {title: "Fargo", image: "fargo.jpg"},
    {title: "North by Northwest", image: "north.jpg"},
    {title: "Rear Window", image: "rear.jpg"},
    {title: "The Treasure of the Sierra Madre", image: "treasure.jpg"},
    {title: "2001: A Space Odyssey", image: "2001.jpg"},
    {title: "Chinatown", image: "Chinatown.jpg"},
    {title: "Drive", image: "drive.jpg"},
    {title: "The Departed", image: "departed.jpg"},
    {title: "Apocalypse Now", image: "apocalypse.jpg"},
    {title: "There Will Be Blood", image: "twbb.jpg"},
    {title: "Boogie Nights", image: "boogienights.jpg"},
    {title: "Casino", image: "casino.jpg"},
    {title: "Kill Bill", image: "killbill.jpg"},
    {title: "Death Proof", image: "deathproof.jpg"},
    {title: "Once Upon a Time in America", image: "outa.jpg"},
    {title: "A Bronx Tale", image: "bronxtale.jpg"},
    {title: "The Shining", image: "shining.jpg"},
    {title: "The Fly", image: "fly.jpg"},
    {title: "The Color of Money", image: "color.jpg"},
    {title: "Inglourious Basterds", image: "basterds.jpg"},
    {title: "American Beauty", image:"american.png"},
    {title: "Full Metal Jacket", image:"fmj.jpg"},
    {title: "Moonlight", image: "moonlight.jpg"},
    {title: "Gangs of New York", image: "gangs.jpg"},
    {title: "The Master", image: "master.jpg"},
    {title: "Inherent Vice", image: "inherentvice.png"},
    {title: "True Romance", image: "trueromance.jpg"},
    {title: "Seven", image: "seven.jpg"}
];

const img = $("#image")
const $next = $("#next")
const $btnA = $("#a")
const $btnB = $("#b")
const $btnC = $("#c")
const $btnD = $("#d")
const $buttons = $(".guess")
const $button = $(".btn")
const $money = $("#money span")

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
}

function render () {
    img.attr("src", player.question[player.question.length-1].image);
    for (let i = 0; i < $buttons.length; i++){
      $($buttons[i]).text(choices[i].title)
    }
}

init();

function makeChoices () {
    choices = []
   for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * choice.length)
    choices.push(choice[random])
   }
   choices.splice(Math.floor(Math.random() * 4), 0, player.question[player.question.length-1])
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
    } else {
        $money.text(player.money -= 5);
        render();
        init();
        timeLeft = 10;
        timer();
        $(e.target).css("backgroundColor", "red");
    }
})
 timer();
 let timeLeft = 10;

 function timer () {
    interval = window.setInterval(function() {
        timeLeft -= 1;
        if (timeLeft <= 0){
            $("#lateModal").modal("show")
            $money.text(player.money -= 5)
            clearInterval(interval)
            render();
            init();
            timeLeft = 10;
            timer();
            return;
        }
        $('.timer').text("Timer: "+ timeLeft)
        }, 1000)
}







 














 









