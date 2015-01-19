var form = document.getElementsByTagName('form');

var fields = {
  "phone" : /^\d{3}-\d{3}-\d{4}$/,
  "birth-date" : /^\d{2}\/\d{2}\/\d{2}$/,
  "postal-code" : /^\d{5}$|^\d{5}-\d{4}$/,
  "state" : /^[A-Z]$/,
  "married" : /^yes$|^no$/i
};

function validate(el, rule) {
  return el.value.match(rule);
}

function feedback(elId, value) {
  var p = document.getElementById('feedback-' + elId);
  p.textContent = p.className = value ? 'valid' : 'invalid';
}

window.addEventListener('input', function (e){
  var field = e.target, isValid;
  isValid = validate( field, fields[field.id] );
  feedback(field.id, isValid);
}, false);
