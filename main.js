$(document).ready(() => {
  const $minRange = $('#min-range-js');
  const $maxRange = $('#max-range-js');
  $('#clear-btn-js').prop('disabled', true);
  $('#reset-btn-js').prop('disabled', true);

$('.text-input').on('keyup', () => {
  $('#clear-btn-js').prop('disabled', false);
  $('#reset-btn-js').prop('disabled', false);
})

  $('#clear-btn-js').on('click', () => {
    $('.text-input').val('');
  })

  $('#udpate-btn').on('click', () => {
    let min = $minRange.val();
    let max = $maxRange.val();
    $('.minimum-display').text(min);
    $('.maximum-display').text(max);
    generateRandomNumber(min, max);
  })

  $('#submit-btn-js').on('click', () => {
    let challengerOneName = $('#challenger-one-name').val();
    let challengerOneGuess = $('#challenger-one-guess').val();
    let challengerTwoName = $('#challenger-two-name').val();
    let challengerTwoGuess = $('#challenger-two-guess').val();
    $('#challenger-one-name-js').text(challengerOneName);
    $('#challenger-one-guess-js').text(challengerOneGuess);
    $('#challenger-two-name-js').text(challengerTwoName);
    $('#challenger-two-guess-js').text(challengerTwoGuess);
  })



  // $updateBtn.on('click', (event) => {
  //   $(event.currentTarget).toggleClass('text-input-error');
  // })

});

// function generateRandomNumber(min, max) {
//   console.log(math.random());
//     // Math.floor(Math.random() * (max - min)) + min);
//   console.log(min);
//   console.log(max);
// }

function generateRandomNumber(min, max) {
  console.log(min);
  console.log(max);
  console.log(Math.floor(Math.random() * (max - min) + min));
}

// $('.login-button').on('click', () => {
//   $('.login-form').show();
// })
