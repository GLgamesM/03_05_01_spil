window.addEventListener("load", titleLoad)

let showSettingsEffektSound = true;
let showSettingsMusic = true;

function titleLoad() {
    //loads titlescreen
    console.log("titleLoad");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#questions").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#pige_sprite").classList.add("hide");
    document.querySelector("#questionbox").classList.add("hide");
    document.querySelector("#reaktioner").classList.add("hide");
    document.querySelector("#jail").classList.add("hide");

    /*document.querySelector("#replay").classList.add("hide");
    document.querySelector("#timer").classList.add("hide");
    document.querySelector("#settings").classList.add("hide");


    document.querySelector("#right1").classList.add("hide");
    document.querySelector("#wrong1").classList.add("hide");
    document.querySelector("#right2").classList.add("hide");
    document.querySelector("#wrong2").classList.add("hide");
    document.querySelector("#right3").classList.add("hide");
    document.querySelector("#wrong3").classList.add("hide");
    document.querySelector("#right4").classList.add("hide");
    document.querySelector("#wrong4").classList.add("hide");
    document.querySelector("#right5").classList.add("hide");
    document.querySelector("#wrong5").classList.add("hide");
    document.querySelector("#right6").classList.add("hide");
    document.querySelector("#wrong6").classList.add("hide");*/


    document.querySelector("#points1").classList.add("hide");
    document.querySelector("#points2").classList.add("hide");
    document.querySelector("#points3").classList.add("hide");
    document.querySelector("#points4").classList.add("hide");
    document.querySelector("#points5").classList.add("hide");
    document.querySelector("#points6").classList.add("hide");
    //document.querySelector("#energy").classList.add("hide");


    document.querySelector("#menu_background").classList.remove("hide");
    document.querySelector("#menu_background").classList.add("show");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);
}




////////////////// SETTINGS ////////////////////////////////////////////////////

document.querySelector("#settings").addEventListener("click", showSettings());

document.querySelector("#settingsbutton_game").addEventListener("click", showSettings);

function showSettings() {
    console.log("showSettings");
    document.querySelector("#settings").classList.remove("hide");

}

document.querySelector("#back").addEventListener("click", hideSettings);


function hideSettings() {
    console.log("hideSettings");
    document.querySelector("#settings").classList.add("hide");


}

document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);
document.querySelector("#setting_music").addEventListener("click", toggleMusic);

function toggleSounds() {
    console.log("toggleSounds");

    if (showSettingsEffektSound == false) {
        showSettingsEffektSound = true;
        //soundsOff();
        console.log("tænd for sfx");
        //tænd for sfx
        document.querySelector("#sfx_sprite").classList.add("off_on");
        document.querySelector("#sfx_sprite").classList.remove("off");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOn);

    } else {
        showSettingsEffektSound = false;
        //soundsOn();
        console.log("sluk for sfx");
        //sluk for sfx
        document.querySelector("#sfx_sprite").classList.add("on_off");
        document.querySelector("#sfx_sprite").classList.remove("on");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOff);

    }
}

function soundsOff() {
    console.log("soundsOff");
    //ryd op
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOff);
    document.querySelector("#jail_door").muted = true;
    document.querySelector("#police_siren").muted = true;
    document.querySelector("#texting").muted = true;
    document.querySelector("#facebbok_notification").muted = true;
    document.querySelector("#sad").muted = true;
    document.querySelector("#tada").muted = true;

    //skift grafik fra grøn til rød
    document.querySelector("#sfx_sprite").classList.add("off")
    document.querySelector("#sfx_sprite").classList.remove("on")

    //gå til state of off
    document.querySelector("#sfx_sprite").classList.remove("on_off");
    document.querySelector("#sfx_sprite").classList.add("off");

}

function soundsOn() {
    console.log("soundsOn");
    //ryd op
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOn);
    document.querySelector("#jail_door").muted = false;
    document.querySelector("#police_siren").muted = false;
    document.querySelector("#texting").muted = false;
    document.querySelector("#facebbok_notification").muted = false;
    document.querySelector("#sad").muted = false;
    document.querySelector("#tada").muted = false;
    //skift grafik fra rød til grøn 
    document.querySelector("#sfx_sprite").classList.remove("off")
    document.querySelector("#sfx_sprite").classList.add("on")

    //gå til state of on
    document.querySelector("#sfx_sprite").classList.remove("off_on");
    document.querySelector("#sfx_sprite").classList.add("on");
}

function toggleMusic() {
    console.log("toggleMusic");

    if (showSettingsMusic == false) {
        showSettingsMusic = true;
        //musicOff();
        console.log("tænd for music");
        //tænd for music
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").classList.remove("off");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);
    } else {
        showSettingsMusic = false;
        //musicOn();
        console.log("sluk for music");
        //sluk for music
        document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").classList.remove("on");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);

    }
}


function musicOff() {
    console.log("musicOff");
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);

    document.querySelector("#piano").muted = true;


    //skift grafik fra grøn til rød
    document.querySelector("#music_sprite").classList.add("off")
    document.querySelector("#music_sprite").classList.remove("on")
    //gå til state of off
    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");

}

function musicOn() {
    console.log("musicOn");
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOn);
    document.querySelector("#piano").muted = false;

    //skift grafik fra rød til grøn  
    document.querySelector("#music_sprite").classList.remove("off")
    document.querySelector("#music_sprite").classList.add("on")
    //gå til state of on
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");
}





////////////////// SETTINGS SLUT ///////////////////////////////////////////////

function hideStart() {
    console.log("hideStart");
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#play").classList.add("fade_out");
    document.querySelector("#play").addEventListener("animationend", startGame());
}

function startGame() {
    console.log("startGame");
    document.querySelector("#menu_background").classList.add("hide");
    document.querySelector("#menu_background").classList.remove("show");
    document.querySelector("#play").classList.add("hide");


    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#pige_sprite").classList.remove("hide");
    document.querySelector("#questionbox").classList.remove("hide");
    document.querySelector("#points3").classList.remove("hide");
    //document.querySelector("#game").classList.add("show");

    /*document.querySelector("#heart").play();
    document.querySelector("#bg").play();
    document.querySelector("#bg").currentTime = 1.4;*/

    randHint();
    //countdown();

}
var questionArray = [
    1,
    2,
    3,
    4,
    5,
    6];

//value of question
var a = []

//value of clicked button
var b = "0";


function randHint() {
    console.log("randHint");
    //hide all previous hints
    document.querySelector("#questions1").classList.remove("show");
    document.querySelector("#questions2").classList.remove("show");
    document.querySelector("#questions3").classList.remove("show");
    document.querySelector("#questions4").classList.remove("show");
    document.querySelector("#questions5").classList.remove("show");
    document.querySelector("#questions6").classList.remove("show");

    //hide all previous answers
    document.querySelector("#svar1_1").classList.add("hide");
    document.querySelector("#svar1_2").classList.add("hide");
    document.querySelector("#svar1_3").classList.add("hide");
    document.querySelector("#svar2_1").classList.add("hide");
    document.querySelector("#svar2_2").classList.add("hide");
    document.querySelector("#svar2_3").classList.add("hide");
    document.querySelector("#svar3_1").classList.add("hide");
    document.querySelector("#svar3_2").classList.add("hide");
    document.querySelector("#svar3_3").classList.add("hide");
    document.querySelector("#svar4_1").classList.add("hide");
    document.querySelector("#svar4_2").classList.add("hide");
    document.querySelector("#svar4_3").classList.add("hide");
    document.querySelector("#svar5_1").classList.add("hide");
    document.querySelector("#svar5_2").classList.add("hide");
    document.querySelector("#svar5_3").classList.add("hide");
    document.querySelector("#svar6_1").classList.add("hide");
    document.querySelector("#svar6_2").classList.add("hide");
    document.querySelector("#svar6_3").classList.add("hide");
    /*document.querySelector("#svarmuligheder1").classList.add("hide");
    document.querySelector("#svarmuligheder2").classList.add("hide");
    document.querySelector("#svarmuligheder3").classList.add("hide");
    document.querySelector("#svarmuligheder4").classList.add("hide");
    document.querySelector("#svarmuligheder5").classList.add("hide");
    document.querySelector("#svarmuligheder6").classList.add("hide");*/

    //random from questionArray
    a = questionArray[Math.floor(Math.random() * questionArray.length)];

    console.log("hint Number " + a);
    let question = "#questions" + a;
    document.querySelector(question).classList.add("show");

    //assign answers for the question
    let answers = "#svarmuligheder" + a;
    document.querySelector(answers).classList.add("show");

    //remove the randomed question from array to avoid repeat
    if (a == 1) {
        questionArray.splice(questionArray.indexOf(1), 1);
    }
    if (a == 2) {
        questionArray.splice(questionArray.indexOf(2), 1);
    }
    if (a == 3) {
        questionArray.splice(questionArray.indexOf(3), 1);
    }
    if (a == 4) {
        questionArray.splice(questionArray.indexOf(4), 1);
    }
    if (a == 5) {
        questionArray.splice(questionArray.indexOf(5), 1);
    }
    if (a == 6) {
        questionArray.splice(questionArray.indexOf(6), 1);
    }

    let svarnummer1 = "#svar" + a + "_1";
    console.log("hint Number " + svarnummer1);
    let svarnummer2 = "#svar" + a + "_2";
    console.log("hint Number " + svarnummer2);
    let svarnummer3 = "#svar" + a + "_3";
    console.log("hint Number " + svarnummer3);

    //assign answers for the question
    //let answers = "#svarmuligheder" +a;
    document.querySelector(svarnummer1).classList.remove("hide");
    document.querySelector(svarnummer2).classList.remove("hide");
    document.querySelector(svarnummer3).classList.remove("hide");

    //reports which button was clicked
    document.querySelector(svarnummer1).addEventListener("click", clickOne);
    document.querySelector(svarnummer2).addEventListener("click", clickTwo);
    document.querySelector(svarnummer3).addEventListener("click", clickThree);
    /*document.querySelector("#color4").addEventListener("click", click);
    document.querySelector("#color5").addEventListener("click", clickYellow);
    document.querySelector("#color6").addEventListener("click", clickPurple);*/

}


function clickOne() {
    console.log("clicked Blue button");

    /*//remove frmo array
    questionArray.splice(questionArray.indexOf(1), 1);*/

    b = "1";

    console.log("a " + a, "b " + b);
    checkAnswer();
}

function clickTwo() {
    console.log("clicked black button")
    b = "2";

    /*//remove frmo array
    questionArray.splice(questionArray.indexOf(2), 1);*/

    console.log("a " + a, "b " + b);
    checkAnswer();
}

function clickThree() {
    console.log("clicked pink button")
    b = "3";

    /*//remove from array
    questionArray.splice(questionArray.indexOf(3), 1);*/

    console.log("a " + a, "b " + b);
    checkAnswer();
}

/*function clickWhite() {
    console.log("clicked White button")
    b = "4";

    //remove frmo array
    questionArray.splice(questionArray.indexOf(4), 1);
    console.log("a " + a, "b " + b);
    checkAnswer();
}

function clickYellow() {
    console.log("clicked yellow button")
    b = "5";

    //remove from array
    questionArray.splice(questionArray.indexOf(5), 1);

    console.log("a " + a, "b " + b);
    checkAnswer();
}

function clickPurple() {
    console.log("clicked purple button")
    b = "6";

    //remove from array
    questionArray.splice(questionArray.indexOf(6), 1);

    console.log("a " + a, "b " + b);
    checkAnswer();
}*/

function checkAnswer() {
    console.log("checkAnswer");
    if (a == 1 && b == 1) { //correct answer
        /*document.querySelector("#color1").classList.add("hide");
        document.querySelector("#right1").classList.add("show");*/
        clickButtonRight();
    } else if (a == 1 && b == 2) { //jail
        /*document.querySelector("#color2").classList.add("hide");
        document.querySelector("#right2").classList.add("show");*/
        jail();
    } else if (a == 2 && b == 2) { //correct answer
        /*document.querySelector("#color2").classList.add("hide");
        document.querySelector("#right2").classList.add("show");*/
        clickButtonRight();
    } else if (a == 2 && b == 3) { //jail
        /*document.querySelector("#color2").classList.add("hide");
        document.querySelector("#right2").classList.add("show");*/
        jail();
    } else if (a == 3 && b == 3) { //correct answer
        /*document.querySelector("#color3").classList.add("hide");
        document.querySelector("#right3").classList.add("show");*/
        clickButtonRight();
    } else if (a == 3 && b == 1) { //jail
        /*document.querySelector("#color2").classList.add("hide");
        document.querySelector("#right2").classList.add("show");*/
        jail();
    } else if (a == 4 && b == 1) { //correct answer
        /*document.querySelector("#color4").classList.add("hide");
        document.querySelector("#right4").classList.add("show");*/
        clickButtonRight();
    } else if (a == 4 && b == 2) { //jail
        /*document.querySelector("#color2").classList.add("hide");
        document.querySelector("#right2").classList.add("show");*/
        jail();
    } else if (a == 5 && b == 2) {
        /*document.querySelector("#color5").classList.add("hide");
        document.querySelector("#right5").classList.add("show");*/
        clickButtonRight();
    } else if (a == 5 && b == 3) { //jail
        /*document.querySelector("#color2").classList.add("hide");
        document.querySelector("#right2").classList.add("show");*/
        jail();
    } else if (a == 6 && b == 3) { //correct answer
        /*document.querySelector("#color6").classList.add("hide");
        document.querySelector("#right6").classList.add("show");*/
        clickButtonRight();
    } else if (a == 6 && b == 1) { //jail
        /*document.querySelector("#color2").classList.add("hide");
        document.querySelector("#right2").classList.add("show");*/
        jail();
    } else {
        //hide which button was clicked
        /*let clickedButton = ("#color" + b);
        document.querySelector(clickedButton).classList.add("hide");
        //show red button of same color
        let redButton = ("#wrong" + b);
        document.querySelector(redButton).classList.add("show");*/
        clickButtonWrong();
    }
}



let point = 3;


function clickButtonRight() {
    //Sounds
    //document.querySelector("#beep3").play();

    point++;

    //hide old score
    document.querySelector("#points1").classList.remove("show");
    document.querySelector("#points1").classList.add("hide");
    document.querySelector("#points2").classList.remove("show");
    document.querySelector("#points2").classList.add("hide");
    document.querySelector("#points3").classList.remove("show");
    document.querySelector("#points3").classList.add("hide");
    document.querySelector("#points4").classList.remove("show");
    document.querySelector("#points4").classList.add("hide");
    document.querySelector("#points5").classList.remove("show");
    document.querySelector("#points5").classList.add("hide");

    let points = "#points" + point;

    document.querySelector(points).classList.add("show");
    console.log("select #points" + point + " og add -effekt-");

    if (point == 6) {
        winGame();
    } else {
        //reset b
        b = "0";
        //nyt spørgsmål
        randHint();
    }

}

//let life = 0;

function clickButtonWrong() {
    /*document.querySelector("#heart").pause();
    document.querySelector("#fastheart").play();
    document.querySelector("#fastheart").volume = 1;
    if (life == 0) {
        document.querySelector("#buzz").play();
    }
    life++;

    let energy = "#energy" + life;
    document.querySelector(energy).classList.add("show");
    console.log("select #energy" + life + " og add -effekt-");
*/

    point--;

    //hide old score
    document.querySelector("#points1").classList.remove("show");
    document.querySelector("#points1").classList.add("hide");
    document.querySelector("#points2").classList.remove("show");
    document.querySelector("#points2").classList.add("hide");
    document.querySelector("#points3").classList.remove("show");
    document.querySelector("#points3").classList.add("hide");
    document.querySelector("#points4").classList.remove("show");
    document.querySelector("#points4").classList.add("hide");
    document.querySelector("#points5").classList.remove("show");
    document.querySelector("#points5").classList.add("hide");

    let points = "#points" + point;

    document.querySelector(points).classList.add("show");
    console.log("select #points" + point + " og add -effekt-");
    if (point == 1) {
        gameOver();
    } else {
        //reset b
        b = "0";
        //nyt spørgsmål
        randHint();
    }

}

function jail() { //instant game over
    console.log("you are going to jail, you criminal!");

    document.querySelector("#svar1_1").classList.add("hide");
    document.querySelector("#svar1_2").classList.add("hide");
    document.querySelector("#svar1_3").classList.add("hide");
    document.querySelector("#svar2_1").classList.add("hide");
    document.querySelector("#svar2_2").classList.add("hide");
    document.querySelector("#svar2_3").classList.add("hide");
    document.querySelector("#svar3_1").classList.add("hide");
    document.querySelector("#svar3_2").classList.add("hide");
    document.querySelector("#svar3_3").classList.add("hide");
    document.querySelector("#svar4_1").classList.add("hide");
    document.querySelector("#svar4_2").classList.add("hide");
    document.querySelector("#svar4_3").classList.add("hide");
    document.querySelector("#svar5_1").classList.add("hide");
    document.querySelector("#svar5_2").classList.add("hide");
    document.querySelector("#svar5_3").classList.add("hide");
    document.querySelector("#svar6_1").classList.add("hide");
    document.querySelector("#svar6_2").classList.add("hide");
    document.querySelector("#svar6_3").classList.add("hide");

    //hide all previous hints
    document.querySelector("#questions1").classList.remove("show");
    document.querySelector("#questions2").classList.remove("show");
    document.querySelector("#questions3").classList.remove("show");
    document.querySelector("#questions4").classList.remove("show");
    document.querySelector("#questions5").classList.remove("show");
    document.querySelector("#questions6").classList.remove("show");

    document.querySelector("#game").classList.add("hide");
    document.querySelector("#pige_sprite").classList.add("hide");
    document.querySelector("#questionbox").classList.add("hide");
    document.querySelector("#points3").classList.add("hide");
    document.querySelector("#questions").classList.add("hide");

    document.querySelector("#jail").classList.remove("hide");

}

function winGame() {
    console.log("you win!");

    document.querySelector("#svar1_1").classList.add("hide");
    document.querySelector("#svar1_2").classList.add("hide");
    document.querySelector("#svar1_3").classList.add("hide");
    document.querySelector("#svar2_1").classList.add("hide");
    document.querySelector("#svar2_2").classList.add("hide");
    document.querySelector("#svar2_3").classList.add("hide");
    document.querySelector("#svar3_1").classList.add("hide");
    document.querySelector("#svar3_2").classList.add("hide");
    document.querySelector("#svar3_3").classList.add("hide");
    document.querySelector("#svar4_1").classList.add("hide");
    document.querySelector("#svar4_2").classList.add("hide");
    document.querySelector("#svar4_3").classList.add("hide");
    document.querySelector("#svar5_1").classList.add("hide");
    document.querySelector("#svar5_2").classList.add("hide");
    document.querySelector("#svar5_3").classList.add("hide");
    document.querySelector("#svar6_1").classList.add("hide");
    document.querySelector("#svar6_2").classList.add("hide");
    document.querySelector("#svar6_3").classList.add("hide");

    //hide all previous hints
    document.querySelector("#questions1").classList.remove("show");
    document.querySelector("#questions2").classList.remove("show");
    document.querySelector("#questions3").classList.remove("show");
    document.querySelector("#questions4").classList.remove("show");
    document.querySelector("#questions5").classList.remove("show");
    document.querySelector("#questions6").classList.remove("show");

    document.querySelector("#game").classList.add("hide");
    document.querySelector("#pige_sprite").classList.add("hide");
    document.querySelector("#questionbox").classList.add("hide");
    document.querySelector("#points3").classList.add("hide");
    document.querySelector("#questions").classList.add("hide");

    document.querySelector("#levelcomplete").classList.remove("hide");

    //sounds
    /*document.querySelector("#barking1").play();
    document.querySelector("#heart").pause();

    erSpilletStoppet = true;
    document.querySelector("#replay1").classList.add("show", "pulse");
    document.querySelector("#replay1").addEventListener("click", "fade:out", replay());*/

}

function gameOver() {
    console.log("you lose!");
    //sounds
    /*document.querySelector("#bg").pause();
    document.querySelector("#explosion1").play();
    document.querySelector("#explosion2").play();
    document.querySelector("#ear_ringing").play();
    document.querySelector("#ear_ringing").currentTime = 20;
    document.querySelector("#ear_ringing").volume = 0.1;
    document.querySelector("#dead_dog").play();*/
    //hide all previous hints
    document.querySelector("#questions1").classList.remove("show");
    document.querySelector("#questions2").classList.remove("show");
    document.querySelector("#questions3").classList.remove("show");
    document.querySelector("#questions4").classList.remove("show");
    document.querySelector("#questions5").classList.remove("show");
    document.querySelector("#questions6").classList.remove("show");

    document.querySelector("#svar1_1").classList.add("hide");
    document.querySelector("#svar1_2").classList.add("hide");
    document.querySelector("#svar1_3").classList.add("hide");
    document.querySelector("#svar2_1").classList.add("hide");
    document.querySelector("#svar2_2").classList.add("hide");
    document.querySelector("#svar2_3").classList.add("hide");
    document.querySelector("#svar3_1").classList.add("hide");
    document.querySelector("#svar3_2").classList.add("hide");
    document.querySelector("#svar3_3").classList.add("hide");
    document.querySelector("#svar4_1").classList.add("hide");
    document.querySelector("#svar4_2").classList.add("hide");
    document.querySelector("#svar4_3").classList.add("hide");
    document.querySelector("#svar5_1").classList.add("hide");
    document.querySelector("#svar5_2").classList.add("hide");
    document.querySelector("#svar5_3").classList.add("hide");
    document.querySelector("#svar6_1").classList.add("hide");
    document.querySelector("#svar6_2").classList.add("hide");
    document.querySelector("#svar6_3").classList.add("hide");
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#pige_sprite").classList.add("hide");
    document.querySelector("#questionbox").classList.add("hide");
    document.querySelector("#points3").classList.add("hide");

    document.querySelector("#questions").classList.add("hide");
    document.querySelector("#gameover").classList.remove("hide");
    /*document.querySelector("#replay2").classList.add("show", "pulse");
    document.querySelector("#replay2").addEventListener("click", replay());*/
}
