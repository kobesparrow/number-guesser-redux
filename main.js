$(document).ready(() => {
  const $minRange = $('#min-range-js');
  const $maxRange = $('#max-range-js');
  const $rightColumn = $('.right-column');
  let randomNumber = generateRandomNumber();
  buttonsStartDisabled();
  
  $('#udpate-btn').on('click', () => {
    if ($minRange.val() === '' || $maxRange.val() === '') {
      $('.out-of-range').slideDown();
    } else {
      var min = parseInt($minRange.val());
      var max = parseInt($maxRange.val());
      checkMaxMinOnUpdateBtn(min, max);
    }
  })

  function checkEmptyTextBoxes() {
    if ($('#challenger-one-name').val() === '') {
      $('#challenger-one-name').addClass('text-input-error');
    } 
    if ($('#challenger-two-name').val() === '') {
      $('#challenger-two-name').addClass('text-input-error');
    }
  }

  $('.right-column').on('click', event => {
    var test = $(event.currentTarget).closest('.dlt-btn').val();
    console.log(test);
    // $(event.currentTarget).closest('.dlt-btn').addClass('text-input-error');
    // console.log('alert');
    // $(event.currentTarget).closest('.game-end-card').remove();
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
    checkMaxGuessValidity(challengerOneGuess, challengerTwoGuess);
    checkMinGuessValidity(challengerOneGuess, challengerTwoGuess);
  })   

  function checkMaxGuessValidity(pOneGuess, pTwoGuess) {
    let max = parseInt($maxRange.val()) || 100;
    if (pOneGuess > max) {
      $('#challenger-one-guess').addClass('text-input-error').val('');
      $('.out-of-range-player-one').slideDown();
      $('#challenger-one-guess-js').text('??');
      $('#player-one-guess-assessment-js').text('');
    }
    if (pTwoGuess > max) {
      $('#challenger-two-guess').addClass('text-input-error').val('');
      $('.out-of-range-player-two').slideDown();
      $('#challenger-two-guess-js').text('??');
      $('#player-two-guess-assessment-js').text('');
    }
  }

  function checkMaxMinOnUpdateBtn(min, max) {
    if (min > max) {
      $('.out-of-range').slideDown();
      $('.minimum-display').text('??');
      $('.maximum-display').text('??');
    } else {
      $('.out-of-range').slideUp();
      $('.minimum-display').text(min);
      $('.maximum-display').text(max);
      randomNumber = generateRandomNumber(min, max);
    }
  }



  function checkMinGuessValidity(pOneGuess, pTwoGuess) {
    let min = parseInt($minRange.val()) || 1;
    if (pOneGuess < min) {
      $('#challenger-one-guess').addClass('text-input-error').val('');
      $('.out-of-range-player-one').slideDown();
      $('#challenger-one-guess-js').text('??');
      $('#player-one-guess-assessment-js').text('');
    }
    if (pTwoGuess < min) {
      $('#challenger-two-guess').addClass('text-input-error').val('');
      $('.out-of-range-player-two').slideDown();
      $('#challenger-two-guess-js').text('??');
      $('#player-two-guess-assessment-js').text('');
    }
  }

  function playerOneGuessOutcome(playerOneGuess) {
    if (playerOneGuess === randomNumber) {
      $('#player-one-guess-assessment-js').text('BOOM!');
      winnerCardApend($('#challenger-one-name').val());
    } else if (playerOneGuess < randomNumber) {
      $('#player-one-guess-assessment-js').text('that\'s too low');
    } else {
      $('#player-one-guess-assessment-js').text('that\'s too high');
    }
  }

  function playerTwoGuessOutcome(playerOneGuess) {
    if (playerOneGuess === randomNumber) {
      $('#player-two-guess-assessment-js').text('BOOM!');
      winnerCardApend($('#challenger-two-name').val());
    } else if (playerOneGuess < randomNumber) {
      $('#player-two-guess-assessment-js').text('that\'s too low');
    } else {
      $('#player-two-guess-assessment-js').text('that\'s too high');
    }
  }

  function winnerCardApend(winnerName) {
    let card = `
      <article class=game-end-card>
        <div class="game-end-card-header">
          <span class="game-end-card-name">${$('#challenger-one-name').val()}</span>
          <p>VS</p>
          <span class="game-end-card-name">${$('#challenger-two-name').val()}</span>
        </div>
        <hr>
        <div class="game-end-card-champion-name">
          <span class="winner-name">${winnerName}</span>
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
    $rightColumn.prepend(card);
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

  function buttonsStartDisabled() {
    $('#clear-btn-js').prop('disabled', true);
    $('#reset-btn-js').prop('disabled', true);
    $('#submit-btn-js').prop('disabled', true);
    $('.out-of-range-player-one').hide();
    $('.out-of-range-player-two').hide();
    $('.out-of-range').hide();
  }

  $('.text-input').on('keyup', () => {
    $('#clear-btn-js').prop('disabled', false);
    $('#reset-btn-js').prop('disabled', false);
    $('#submit-btn-js').prop('disabled', false);
  })
  
  function generateRandomNumber(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
});