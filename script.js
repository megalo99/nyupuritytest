//Hides refresh button on load, could be optimized in the future
window.onload = function() {
    document.getElementById("refresh").style.display="none";
};

//Clears all the check boxes
function clearBoxes(){
    var checkedBoxes = document.querySelectorAll('input:checked') //Get all the boxes that are checked
    for (var i = 0; i < checkedBoxes.length; i++) { //Run through each checked box and uncheck it
        checkedBoxes[i].checked = false;
    }
}

//Calculates your score
function calculateScore() {
    var totalChecked = document.querySelectorAll('input[type="checkbox"]:checked') //Gets all the boxes that were checked
    var score = 100 - totalChecked.length //Subtracts the amount of boxes checked from 100, which results in the score

    //Associates your score with what it says about you
    var meaning;
    if (score >= 98) {
        meaning = "You&#39re pure, uncontaminated, distilled, and undiluted. Or a liar"
    } else if (score >= 94) {
        meaning = "Hmm are you sure you go to NYU?"
    } else if (score >= 77) {
        meaning = "The city is your campus! A typical NYU purity score."
    } else if (score >= 45) {
        meaning = "Way to show NYU Pride!"
    } else if (score >= 9) {
        meaning = "Are you doing okay? The Wellness Exchange is your greatest mental health resource at NYU. "
    } else {
        meaning = "Congratulations"
    }

    var scoreDiv = document.getElementById("score"); //Gets the score div which is where the score is displayed
    var meaningDiv = document.getElementById("meaning"); //Gets the score div which is where the score is displayed
    scoreDiv.innerHTML = "Your Score: " + score.toString() //Sets the div text to your score
    meaningDiv.innerHTML = meaning //Sets the div text to your meaning
    scoreDiv.style.padding = "20px"
    scoreDiv.style.fontFamily = "GothamMedium"
    meaningDiv.style.padding = "10px"
    //document.getElementById("refresh").style.display="inline"; //Reveals the refresh page button
    document.body.scrollTop = 0; // Scrolls to top of the page for Safari
    document.documentElement.scrollTop = 0; // Scrolls to the top of the page for Chrome, Firefox, IE, and Opera
}

//Clears the page (clear page button)
function clearPage() {
    clearBoxes() //Calls the clearBoxes function to clear all the boxes
    var scoreDiv = document.getElementById("score"); //Gets the score div which is where the score is displayed
    var meaningDiv = document.getElementById("meaning"); //Gets the score div which is where the score is displayed
    scoreDiv.innerHTML = "" //Makes the score div blank
    meaningDiv.innerHTML = "" //Makes the meaning div blank
    document.getElementById("refresh").style.display="none"; //Hides the clear page button button
}
