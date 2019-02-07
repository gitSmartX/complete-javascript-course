/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice1 as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

newGame();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        // 2. Display the result
        var dice1DOM = document.getElementById('dice1');
        var dice2DOM = document.getElementById('dice2');
        dice1DOM.style.display = 'block';
        dice1DOM.src = 'dice-' + dice1 + '.png'
        dice2DOM.style.display = 'block';
        dice2DOM.src = 'dice-' + dice2 + '.png'

        // 3. Update the round score IF the score number was NOT a ONE
        if (dice1 === 6 && dice2 === 6){
            //Add score
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }
        else if (dice1 !== 1 && dice2 !== 1){
            //Add score
            roundScore += dice1 + dice2;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            //Next Player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        // Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        // Check if player won the game
        var winscore = (document.querySelector(".final-score").value != "") ? document.querySelector(".final-score").value : 100;
        if(scores[activePlayer] < winscore) nextPlayer()
        else 
        {
            document.getElementById('name-' + activePlayer).textContent = "Winner!";
            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', newGame);



function nextPlayer() {
    //Next Player
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    document.querySelector('.player-'+ activePlayer +'-panel').classList.toggle('active');
    activePlayer = 1 - activePlayer;
    document.querySelector('.player-'+ activePlayer +'-panel').classList.toggle('active');
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
}

function newGame() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}