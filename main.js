var form = document.getElementsByTagName('form');

var fields = {
  "phone" : function(value){
    return value.match(/^\d{3}-\d{3}-\d{4}$/);
  },
  "birth-date" : function(value){
    return value.match(/^\d{2}\/\d{2}\/\d{2}$/);
  },
  "postal-code" : function(value){
    return value.match(/^\d{5}$|^\d{5}-\d{4}$/);
  },
  "state" : function(value){
    return value.match(/^[A-Z]$/);
  },
  "married" : function(value){
    return value.match(/^yes$|^no$/i);
  }
};

function validate(el, validator) {
  return validator(el.value);
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
