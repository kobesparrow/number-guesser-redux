$(document).ready(() => {
  const $minRange = $('#min-range-js');
  const $maxRange = $('#max-range-js');
  $('#clear-btn-js').prop('disabled', true);
  $('#reset-btn-js').prop('disabled', true);
  $('#submit-btn-js').prop('disabled', true);
  var randomNumber = generateRandomNumber();

  
  $('#udpate-btn').on('click', () => {
    let min = parseInt($minRange.val());
    let max = parseInt($maxRange.val());
    $('.minimum-display').text(min);
    $('.maximum-display').text(max);
    randomNumber = generateRandomNumber(min, max);
  })
  
  $('#submit-btn-js').on('click', () => {
    let challengerOneName = $('#challenger-one-name').val();
    let challengerOneGuess = parseInt($('#challenger-one-guess').val());
    let challengerTwoName = $('#challenger-two-name').val();
    let challengerTwoGuess = parseInt($('#challenger-two-guess').val());
    $('#challenger-one-name-js').text(challengerOneName);
    $('#challenger-one-guess-js').text(challengerOneGuess);
    $('#challenger-two-name-js').text(challengerTwoName);
    $('#challenger-two-guess-js').text(challengerTwoGuess);
    checkEmptyTextBoxes();
    playerOneGuessOutcome(challengerOneGuess);
    playerTwoGuessOutcome(challengerTwoGuess);
  })   
  
  function playerOneGuessOutcome(playerOneGuess) {
    if (playerOneGuess === randomNumber) {
      $('#player-one-guess-assessment-js').text('BOOM!');
      winnerCardApend();
    } else if (playerOneGuess < randomNumber) {
      $('#player-one-guess-assessment-js').text('that\'s too low');
    } else {
      $('#player-one-guess-assessment-js').text('that\'s too high');
    }
  }

  function playerTwoGuessOutcome(playerOneGuess) {
    if (playerOneGuess === randomNumber) {
      $('#player-two-guess-assessment-js').text('BOOM!');
      winnerCardApend();
    } else if (playerOneGuess < randomNumber) {
      $('#player-two-guess-assessment-js').text('that\'s too low');
    } else {
      $('#player-two-guess-assessment-js').text('that\'s too high');
    }
  }

  function winnerCardApend() {
    `
      <article class=game-end-card>
        <div class="game-end-card-header">
          <span class="game-end-card-name">CHALLENGER 1 NAME</span>
          <p>VS</p>
          <span class="game-end-card-name">CHALLENGER 2 NAME</span>
        </div>
        <hr>
        <div class="game-end-card-champion-name">
          <span class="winner-name">WINNING CHALLENGER</span>
          <p class="winner">WINNER</p>
        </div>
        <hr>
        <div class="game-end-card-footer">
          <div><span id="winner-guesses">47</span> GUESSES</div>
          <div><span id="winner-time">1.35</span> MINUTES</div>
          <input type="image" class="dlt-btn" src="assets/delete.svg">
        </div>
      </article>
    `
    console.log('more to come');
  }
  
  function checkEmptyTextBoxes() { 
    $('.btn').on('click', event => {
      $(event.currentTarget).closest('.text-input').toggleClass('text-input-error');
      // $(event.currentTarget).toggleClass('text-input-error');
      // traverse DOM with .closest('text-input')w/''
    });
  }
  
  $('#reset-btn-js').on('click', () => {
    $('.text-input').val('');
    $('#clear-btn-js').prop('disabled', true);
    $('#reset-btn-js').prop('disabled', true);
    generateRandomNumber();
  })
  
  $('#clear-btn-js').on('click', () => {
    $('.text-input').val('');
    $('#clear-btn-js').prop('disabled', true);
  })

  $('.text-input').on('keyup', () => {
    $('#clear-btn-js').prop('disabled', false);
    $('#reset-btn-js').prop('disabled', false);
    $('#submit-btn-js').prop('disabled', false);
  })
  
  function generateRandomNumber(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
});