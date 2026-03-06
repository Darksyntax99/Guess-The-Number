$(document).ready(function() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 10;
    let gameOver = false;
    $(".attempts").text(`Attempts: ${attempts}`);
    $("#checkBtn").click(function() {
        if (gameOver) return;
        let userGuess = Number($("#guessInput").val());
        if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
            $(".result").text("Please enter a number between 1 and 100.");
            return;

        }
        if (userGuess === randomNumber) {
            $(".result").text("Congratulations! You guessed the number!");
            gameOver = true;
        }
        else {

            attempts--;
            $(".attempts").text(`Attempts: ${attempts}`);

            if(attempts === 0) {
                $(".result").text("💀 Game Over!");
                gameOver = true;
            } 
            else if(userGuess > randomNumber) {
                $(".result").text("Too High!");
            } 
            else {
                $(".result").text("Too Low!");
            }

        }

    });

    $("#resetBtn").click(function() {

        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 10;
        gameOver = false;

        $(".attempts").text(`Attempts: ${attempts}`);
        $(".result").text("Start guessing...");
        $("#guessInput").val("");

    });

});