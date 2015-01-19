var button = document.getElementById('check-valid');

var fields = {
  "phone" : function(value){
    return (value.charAt(3) == '-' && value.charAt(7) == '-');
  },
  "birth-date" : function(value){
    return (value.charAt(3) == '-' && value.charAt(7) == '-');
  },
  "postal-code" : function(value){
    return (value.charAt(3) == '-' && value.charAt(7) == '-');
  },
  "state" : function(value){
    return (value.charAt(3) == '-' && value.charAt(7) == '-');
  },
  "married" : function(value){
    return (value.charAt(3) == '-' && value.charAt(7) == '-');
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
