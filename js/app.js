/*----- constants -----*/ 
let choices = []
const movies = [
    {title: "Raging Bull", image: "raging bull.png"}, 
    {title: "Star Wars", image: "starwars.jpg"}, 
    {title: "Goodfellas", image: "goodfellas_poster.jpg"}, 
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
    {title: "Once Upon a Time in America", iage: "outa.jpg"},
    {title: "A Bronx Tale", image: "bronxtale.jpg"},
    {title: "The Shining", image: "shining.jpg"},
    {title: "The Fly", image: "fly.jpg"},
    {title: "The Color of Money", image: "color.jpg"},
    {title: "Inglourious Basterds", image: "basterds.jpg"}
];

const img = $("#image")
const $next = $("#next")
const $btnA = $("#a")
const $btnB = $("#b")
const $btnC = $("#c")
const $btnD = $("#d")
const $buttons = $(".guess")
const $button = $(".btn")

const player = {
    money: 10,
    question: [],
}


/*----- app's state (variables) -----*/ 
/*----- cached element references -----*/ 
/*----- event listeners -----*/ 
/*----- functions -----*/

function init() {
        let index = Math.floor(Math.random() * movies.length)
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
    let random = Math.floor(Math.random() * movies.length)
    choices.push(movies[random])
   }
   choices.splice(Math.floor(Math.random() * 4), 0, player.question[player.question.length-1])
 }

$next.on("click", (e) => {
    render();
    init();
})

$buttons.on("click", (e) => {
    if (e.target.innerText === player.question[0].title) {
        $("#myModal").modal("show")
    } else {
        $("#wrongModal").modal("show")
    }
 })













 









