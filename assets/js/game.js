$(document).ready(function() {
    /* Generate a random number between 1 and 100 */
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    /* Number of attempts */
    let attempts = 10;

    /* Game state (true if game is over) */
    let gameOver = false;
    /* Display the number of attempts on the page */
    $(".attempts").text(`Attempts: ${attempts}`);

    /* When the check button is clicked */
    $("#checkBtn").click(function() {
        /* If the game is over, do nothing */
        if (gameOver) return;
        /* Get user input and convert to number */
        let userGuess = Number($("#guessInput").val());

        /* Validate input */
        if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
            $(".result").text("Please enter a number between 1 and 100.");
            return;

        }
        /* Check if the guess is correct */
        if (userGuess === randomNumber) {
            $(".result").text("Congratulations! You guessed the number!");
            gameOver = true;
        }
        else {
            /* Decrease attempts */
            attempts--;
            $(".attempts").text(`Attempts: ${attempts}`);
        /* Check if attempts have run out */
            if(attempts === 0) {
                $(".result").text("💀 Game Over!");
                gameOver = true;
            } 
            /* Give a hint if the guess is too high or too low */
            else if(userGuess > randomNumber) {
                $(".result").text("Too High!");
            } 
            else {
                $(".result").text("Too Low!");
            }

        }

    });
    /* When the reset button is clicked */
    $("#resetBtn").click(function() {
        /* Regenerate random number and reset attempts and game state */
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 10;
        gameOver = false;
        /* Update the UI */
        $(".attempts").text(`Attempts: ${attempts}`);
        $(".result").text("Start guessing...");
        $("#guessInput").val("");

    });
    /* Accessibility improvement: allow pressing Enter key to submit guess */
    $("#guessInput").keypress(function(e) {
        if (e.which === 13) { 
            $("#checkBtn").click();
        }

});
});