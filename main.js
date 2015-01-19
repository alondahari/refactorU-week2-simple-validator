var button = document.getElementById('check-valid');

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

function validate(elId, validator) {
  var value = document.getElementById(elId).value;
  return validator(value);
}

function feedback(elId, value) {
  var p = document.getElementById('feedback-' + elId);
  p.textContent = p.className = value ? 'valid' : 'invalid';
}

button.onclick = function (){
  var field, isValid;
  for (field in fields) {
    isValid = validate( field, fields[field] );
    feedback(field, isValid);
  }

};
