// Make sure you change all your variable names, set the correct ids etc etc //



/* overall rundown of how it works, user starts at the home page, they click on the button with the id, "button2" to move on to screen 4, where they select which team they want to score 4, upon choosing, they get sent to screen 2, where they 
chose how many points to score and the total score of their team compared to the other team, once they choose a single value they get sent to screen 3, where the report and the winning team is written
*/

// a link to understand my program more is here https://studio.code.org/projects/applab/5sjd2O9CPTYboDBGpghNSytSSRS-KlK15i2W3-WpdKU //


var touchdown = 6;
var twoPoint = 2;
var fieldGoal = 3;
var safety = 2;
var score = 0;
var scoreSummary = "";
var teamName = "";
var scoreH = 0;
var scoreV = 0;

setProperty("scoreLabel", "text", score);

onEvent("homeTeam", "click", function( ) {
  setScreen("screen2");
  teamName = "Home Team";
  setProperty("teamName", "text", "You are scoring for the: " + teamName + "\n The " + teamName + "'s Score is: " + scoreH + "\n The Visitor Team's score is " + scoreV);
});
onEvent("visitorTeam", "click", function( ) {
  setScreen("screen2");
  teamName = "Visitor Team";
  setProperty("teamName", "text", "You are scoring for the: " + teamName + "\n The " + teamName + "'s Score is " + scoreV + "\n The Home Team's score is " + scoreH);
});

onEvent("twoPoint", "click", function( ) {
  if (teamName == "Home Team") {
    scoreH = scoreH+twoPoint;
  } else {
    scoreV = scoreV+twoPoint;
  }
	score = score+twoPoint;
	setProperty("scoreLabel", "text", score);
	scoreSummary += "Two Point, +2 " + teamName;
  scoreSummary += "\n";
  setProperty("currentScore3", "text", "Total Score: " + score);
  setProperty("scoreSummary", "text", scoreSummary);
  setScreen("screen3");
  visitorWin();
	homeWin();
});
onEvent("touchdownButton", "click", function( ) {
  if (teamName == "Home Team") {
    scoreH = scoreH+touchdown;
  } else {
    scoreV = scoreV+touchdown;
  }
	score = score+touchdown;
	setProperty("scoreLabel", "text", score);
	scoreSummary += "Touchdown, +6 " + teamName;
	scoreSummary += "\n";
	setProperty("currentScore3", "text", "Total Score: " + score);
  setProperty("scoreSummary", "text", scoreSummary);
	setScreen("screen3");
	visitorWin();
	homeWin();
});
onEvent("safetyButton", "click", function( ) {
  if (teamName == "Home Team") {
    scoreH = scoreH+safety;
  } else {
    scoreV = scoreV+safety;
  }
  score = score+safety;
	setProperty("scoreLabel", "text", score);
	scoreSummary += "Safety, +2 " + teamName;
	scoreSummary += "\n";
	setProperty("currentScore3", "text", "Total Score: " + score);
  setProperty("scoreSummary", "text", scoreSummary);
	setScreen("screen3");
	visitorWin();
	homeWin();
});

onEvent("fieldButton", "click", function( ) {
  if (teamName == "Home Team") {
    scoreH = scoreH+fieldGoal;
  } else {
    scoreV = scoreV+fieldGoal;
  }
	score = score+fieldGoal;
	setProperty("scoreLabel", "text", score);
	scoreSummary += "Field Goal, +3 " + teamName;
	scoreSummary += "\n";
	setProperty("currentScore3", "text", "Total Score: " + score);
  setProperty("scoreSummary", "text", scoreSummary);
	setScreen("screen3");
	visitorWin();
	homeWin();
});


onEvent("button2", "click", function( ) {
	setScreen("screen4");
	visitorWin();
	homeWin();
});
onEvent("backButton", "click", function( ) {
	setScreen("screen1");
	visitorWin();
	homeWin();
});

onEvent("reset", "click", function( ) {
	setScreen("screen1");
	score = 0;
	scoreH = 0;
	scoreV = 0;
	scoreSummary = "";
	setProperty("winningTeam", "text", "");
	setProperty("scoreLabel", "text", score);
});

function homeWin() {
  if (scoreH > scoreV) {
    setProperty("winningTeam", "text", "The winning team is The Home Team with a score of " + scoreH + " to " + scoreV);
  } 
}

function visitorWin() {
  if (scoreV > scoreH) {
    setProperty("winningTeam", "text", "The winning team is The Visitor Team with a score of" + scoreV + " to " + scoreH);
  }
}