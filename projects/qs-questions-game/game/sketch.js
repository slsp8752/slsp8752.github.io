/*TODO/*
* Add more info to results screen
*/

var timer_draw = '20';
var timer_min = 0;
var timer_sec = 20;
var timer_text;
var time_start = false;
var question_count = 0;
var question_text;
var questions = [];
var left = [];
var right = [];
var q_nums = [];
var percent_acc = 0;
for(var i = 0; i < q_json.length; i++){

    questions.push(q_json[i].question_text);
    left.push(q_json[i].question_left);
    right.push(q_json[i].question_right);
    q_nums.push(q_json[i].question_number);
}

var mock_answers = {
    1: "A",
    2: "B",
    3: "A",
    4: "A",
    5: "B",
    6: "B",
    7: "A",
    8: "B",
    9: "A",
    10: "B",
    11: "B",
    12: "B",
    13: "A",
    14: "A",
    15: "B",
    16: "B",
    17: "A",
    18: "B",
    19: "B",
    20: "A",
    21: "A",
    22: "B",
    23: "B",
    24: "A",
    25: "B",
    26: "B",
    27: "A",
    28: "A",
    29: "A",
    30: "B",
    31: "B",
    32: "A"
};
var percent = 0;
var results_timer;
var prog_done = false;
var y_velocity = 0;
var y2_velocity = 0;
var acceleration = 10;
var left_choice;
var right_choice;
var start = false;
var end = false;
var wrong_prompt = false;
var wrong_count = 0;
var answers_ten = [];
var answers_twenty = [];
var to_ask_index = 0;
var myTimer;


var gameState = 0;

var myR1;
var myR2;
var myR3;
var myTrans;
var timerinterval;


function preload(){
    podium = loadImage("static/img/podium.png");
    overlay = loadImage("static/img/Tree_Overlay.png")
}

function setup() {

    myTimer = createP();
    myTimer.hide();
    question_text = createDiv('Press ENTER to Begin'); //dummy, so that we can have remove() as the first line of the newquestion function
    question_text.class("questionText");
    var canv = createCanvas(windowWidth,windowHeight);
    canv.parent("bgCanvas");
    background("#8bc4b6");
    stroke(255);
    left_choice = createImg("blank.png");
    right_choice = createImg("blank.png");
    pod_width = width * 0.75;
    pod_height = podium.height/(podium.width/(pod_width))
    textFont("Exo 2");

}

var Round1 = function () {
    this.QR1 = [];
    this.q_num = 0;
    this.ready = false;
    this.question;

    this.createQuestions = function () {
        for (i=0; i<10; i++) {
            var num = _.random(0, q_json.length - 1);
            var myQues = q_json[num]
            this.QR1.push(myQues);
            _.remove(q_json, function (n) {
                return n["question_number"] == myQues['question_number'];
            });
        }

    }

    this.start= function () {
        this.createQuestions();
        this.drawCanvas();
        this.questionTime(gameState);
    }

    this.questionTime= function (state) {
        if (this.q_num < 10) {
            this.askQuestion()
        } else {
            transitionGame(state+1);
        }
    }

    this.askQuestion= function () {
        this.input = true;
        update_timer();
        timerinterval = setInterval(update_timer, 1000);
        question_text.remove();
        left_choice.remove();
        right_choice.remove();
        this.question = this.QR1[this.q_num];
        //Increment for next pass
        this.q_num += 1;
        left_text = this.question['question_left'];
        right_text = this.question['question_right'];
        question_text = this.question['question_text'];
        left_choice = createElement('h2',left_text);
        right_choice = createElement('h2',right_text);
        left_choice.position((width/3) - (left_choice.width/2), pod_height+100);
        right_choice.position((2*width/3) - (right_choice.width/2), pod_height+100);
        question_text = createDiv(this.question['question_text']);
        question_text.class("questionText");
        question_text.class("noselect");  
    }

    this.leftFire= function ( round ) {
        this.input = false;
        me = this;
        myq = parseInt(this.question["question_number"]);
        mya = mock_answers[myq];
        if(round == 1){
            answers_ten.push({myq: myq + 'A'});
            left_choice.style('background-color', 'green');
            setTimeout(function () {me.questionTime(gameState)}, 200);
        }
        else{
            answers_twenty.push({myq: 'A'});
            if ('A' == mya) {
                left_choice.style('background-color', 'green');
                setTimeout(function () {me.questionTime(gameState)}, 200);
            } else {
                left_choice.style('background-color', 'red');
                wrong_count++;
                setTimeout(function () {me.wrongDisplay(gameState)}, 200);   
            }
        }


    }

    this.rightFire = function ( round ) {
        this.input = false;
        me = this;
        myq = parseInt(this.question["question_number"]);
        mya = mock_answers[myq];
        if(round == 1){
            answers_ten.push({myq: myq + 'B'});
            right_choice.style('background-color', 'green');
            setTimeout(function () {me.questionTime(gameState)}, 200);
        }
        else{
            answers_twenty.push({myq: 'B'});
            if ('B' == mya) {
                right_choice.style('background-color', 'green');
                setTimeout(function () {me.questionTime(gameState)}, 200);
            } else {
                right_choice.style('background-color', 'red');
                wrong_count++;
                setTimeout(function () {me.wrongDisplay(gameState)}, 200);
            }
        }
    }

    this.wrongDisplay = function () {
        me = this;
        imageMode(CORNER);
        image(overlay, 0, 0, width, height);

        if(gameState == 3){
            var random = _.random(0, wrong_messages_round2.length - 1);
            var message = wrong_messages_round2[random];
            _.remove(wrong_messages_round2, function (n){
                return n == message;
            });
        }
        else if(gameState == 5){
            var random = _.random(0, wrong_messages_round3.length - 1);
            var message = wrong_messages_round3[random];
            _.remove(wrong_messages_round3, function (n){
                return n == message;
            });
        }        

		textSize(42);
        text(message, width/2, 300);
        left_choice.class("hide");
        right_choice.class("hide");
        question_text.class("hide");
        setTimeout(function () {me.endWrong()}, 5000);
    }

    this.endWrong = function () {
        left_choice.removeClass("hide"); 
        right_choice.removeClass("hide"); 
        question_text.removeClass("hide");
        this.drawCanvas();
        this.questionTime(gameState);
    }

    this.drawCanvas = function () {
        clear();
        myTimer.show();
        myTimer.html(timer_draw)
        background("#8bc4b6");
        imageMode(CENTER);
        rectMode(CENTER);
        fill(255);
        rect(width/2, height-pod_height-400, width*0.75, pod_height+600);
        image(podium, width/2, height - (pod_height/2), pod_width, pod_height);
        textSize(32);
        fill(0);
        textAlign(CENTER);
        fill("#483d39");
        stroke(255);
    }
}
// END OF ROUND 1 OBJECT

function make_AJAX_call(data, transition, tryCount, retryLimit){
    $.ajax({
        type: 'POST',
        url: "http://quantifiedselfbackend.local:6060/recommend_processor/recommend",
        data: data,
        success: function(resp) {
            mock_answers = resp.data.recommendations.map(function(e){ return e.replace(/[0-9]/g, '');});
            text("Ready!", width/2, 400);
            transition.done = true;
            return true;
        },
        error: function(resp) {
            tryCount++;
            if (tryCount >= retryLimit){
                text("Ready!", width/2, 400);
                transition.done = true;
                return true;
            }
            else { //Try again with exponential backoff.
                setTimeout(function(){ 
                    return make_AJAX_call(data, transition, tryCount, retryLimit);
                }, Math.pow(2, tryCount) * 1000);
                return false;
            }
        }
    });
    return false;
}

var Transition = function ( state ) {
    this.myState = state;
    this.done = false;

    this.start = function () {
        if (gameState == 2){ //If ready for round 2...
            data = getURLParams()
            data = {userid: "b9bef55d-e1c2-418b-979d-62762902ee38"}
            data["answers"] = JSON.stringify(answers_ten.map(function(e){ return e.myq;}));
            var me = this;
            me.done = true;
        }
        else
            this.done = true;
	}

    this.finisher = function (state) {
        if (this.done == true) {
            transitionGame(state + 1);
            //Recognize the key press
        }
    }

    this.display = function () {
        if (this.myState == 1){ //Round 1
            timer_sec = 20;
            myR1 = new Round1();
            myR1.start();        
        }
        else if(this.myState == 2){ //Round 2 Transition Screen
            question_text.remove();
            left_choice.remove();
            right_choice.remove();
			textFont("Exo2");
			textSize(36);
			strokeWeight(0);
            text("Press ENTER to continue", width/2, 300);   
        }
        else if(this.myState == 3){ //Round 2
            timer_sec = 20;
            myR2 = new Round1();
            myR2.start();
        }
        else if(this.myState == 4){ //Round 3 Transition Screen
            question_text.remove();
            left_choice.remove();
            right_choice.remove();
			strokeWeight(0)
            text("When you're ready, press ENTER to begin the last round.", width/2, 300);
        }
        else if(this.myState == 5){ //Round 3
            timer_sec = 10;
            myR3 = new Round1();
            myR3.start();
        }
        else if(this.myState == 6){ //Results Transition Screen
            question_text.remove();
            left_choice.remove();
            right_choice.remove();
            text("Press ENTER to view your results!", width/2, 300);
        }
        else if(this.myState == 7){ //Results Screen
            //draw results screen
            myTimer.hide();
			if(prog_done == false) results_timer = setInterval(results, 10);
            
        }

    }
}

var transitionGame = function (state) {
    gameState = state;
    myTrans = new Transition(gameState);
    myTrans.start();
    myTrans.display();
};

function keyPressed () {
    if (gameState == 0) { //Initial Screen
        if (keyCode === ENTER) {
            //gameState = 1;
            transitionGame(1);
        }
    } else if (gameState == 1) { //Round 1
        clearInterval(timerinterval);
        timer_sec = 20;
        if (keyCode === LEFT_ARROW && myR1.input === true) {
            myR1.leftFire(1);
        } else if(keyCode === RIGHT_ARROW && myR1.input === true) {
            myR1.rightFire(1);
        }

    } else if (gameState == 2) { //Transition 1
        if (keyCode === ENTER) {
            myTrans.finisher(gameState);
        }
        
    } else if (gameState == 3) { //Round 2
        clearInterval(timerinterval);
        timer_sec = 20;
        if (keyCode === LEFT_ARROW && myR2.input === true) {
            myR2.leftFire(2);
        } else if(keyCode === RIGHT_ARROW && myR2.input === true) {
            myR2.rightFire(2);
        }
        
    } else if (gameState == 4) {
        if (keyCode === ENTER) {
            myTrans.finisher(gameState);
        }        
    } else if (gameState == 5) {
        clearInterval(timerinterval);
        timer_sec = 10;
        if (keyCode === LEFT_ARROW && myR3.input === true) {
            myR3.leftFire(3);
        } else if(keyCode === RIGHT_ARROW && myR3.input === true) {
            myR3.rightFire(3);
        }
        
    } else if (gameState == 6) {
        if (keyCode === ENTER) {
            myTrans.finisher(gameState);
        }
    }

}

function update_timer(){
	if(gameState == 1) myTimer.hide();
	else{
		timer_draw = ('0' + timer_sec).slice(-2);
		console.log(timer_draw);
		myTimer.html(timer_draw)
		if( timer_min == 0 && timer_sec == 0){    
			// Reset the timer value for the next question, and stop it from counting.
			if(gameState == 3){
				timer_sec = 20;
				myq = parseInt(myR2.question["question_number"]);
				r = 2;
				robj = myR2;
			}
			else if(gameState == 5){
				timer_sec = 10;
				myq = parseInt(myR3.question["question_number"]);
				r = 3;
				robj = myR3;
			}
			clearInterval(timerinterval);
			//TODO: Choose "correct" answer on timeout
			mya = mock_answers[myq];
			if ('A' == mya) robj.leftFire(r);
			else if ('B' == mya) robj.rightFire(r)
			// This is where we'll choose the "correct" answer.

		} else if(timer_sec == 0){
			timer_min--;
			timer_sec = 59;
		} else{
			timer_sec--;
		}
	}
}

function results(){

    clear();
    background("#8bc4b6");
    imageMode(CENTER);
    rectMode(CENTER);
    fill(255);
    stroke(255);
    rect(width/2, height-pod_height-400, width*0.75, pod_height+600);
    image(podium, width/2, height - (pod_height/2), pod_width, pod_height);
	percent = ((20 - wrong_count)/20)*100;	
	console.log(percent);	
    if(percent_acc < percent) percent_acc++;
    else{
        clearInterval(results_timer);
        prog_done = true;
    }
    rectMode(CORNER);
    bar_width = 800;
    bar_height = 50;
    bar_x = (width/2) - (bar_width/2);
    fill(75,66,59);
    textAlign(CENTER);
    textSize(40);
    text("Results", width/2, 100);
    rect(bar_x, height/2, bar_width, bar_height);
    fill(139,196,182);
    rect(bar_x, height/2, ((percent_acc * bar_width)/(100)), bar_height);
    textSize(32);
    fill(42,56,47);
    stroke(139,196,182);
    strokeWeight(3);
    text(percent_acc + "%", width/2, height/2+35);
	strokeWeight(0);

    if(prog_done){
		if(percent == 0) var message = results_messages[0];
		else if(percent > 0 && percent < 60) var message = results_messages[1];
		else if(percent >= 60 && percent < 100) var message = results_messages[2];
		else if(percent == 100) var message = results_messages[3];
        strokeWeight(0);
        text(message, width/2, 300);
    } 
}
