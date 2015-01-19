var button = document.getElementById('check-valid');

function validatePhone() {
  var p = document.getElementById('feedback-phone');
  phoneNumber = document.getElementById('phone-number');
  phoneNumber = phoneNumber.value;
  var feedback = (phoneNumber.charAt(3) == '-') && (phoneNumber.charAt(7) == '-') ? 'valid' : 'invalid' ;
  p.textContent = p.className = feedback;
}

button.onclick = function (){
  validatePhone();
}
