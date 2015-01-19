var phoneNumber = prompt('Enter phone number');

alert( ( (phoneNumber.charAt(3) == '-') && (phoneNumber.charAt(7) == '-') ? 'valid' : 'invalid' ) + ' phone number');
