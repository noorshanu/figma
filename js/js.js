function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10)
  value = isNaN(value) ? 0 : value
  value++
  document.getElementById('number').value = value
  document.getElementById('num').innerHTML = value * 0.07
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10)
  value = isNaN(value) ? 0 : value
  value < 1 ? (value = 1) : ''
  value--
  document.getElementById('number').value = value
  document.getElementById('num').innerHTML = value * 0.07
}

/*scroll to section*/

$('nav')
  .find('a')
  .click(function (e) {
    e.preventDefault()
    var section = $(this).attr('href')
    $('html, body').animate({
      scrollTop: $(section).offset().top,
    })
  })
