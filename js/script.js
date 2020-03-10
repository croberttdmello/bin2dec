const validateInput = () => {
  let value, message;
  value = document.getElementById("value").value;
  if (value !== '') {
    if (isZeroOrOne(value)) {
      document.getElementById('msg').innerHTML = '';
      convertToDecimal(value);
    }
    else {
      document.getElementById('result').innerHTML = '';
      message = 'The entry is not a valid binary number!';
      document.getElementById('msg').innerHTML = message;
    }
  }
  else {
    document.getElementById('result').innerHTML = '';
    message = 'Please, enter a binary number!';
    document.getElementById('msg').innerHTML = message;
  }
}

const convertToDecimal = (value) => {
  let decimalValue = 0;
  value = value.split('').reverse().join('');
  for (let i = value.length - 1; i >= 0; i--) {
    decimalValue += (Number(value[i]) * (Math.pow(2, i)));
  }
  document.getElementById('result').innerHTML = `${decimalValue}`;
}

const isZeroOrOne = (str) => {
  for (const s of str) {
    if ((s !== '0') && (s !== '1')) {
      return false;
    }
  }
  return true;
}

const clearAllData = () => {
  document.getElementById("value").value = '';
  document.getElementById('msg').innerHTML = '';
  document.getElementById('result').innerHTML = '';
}