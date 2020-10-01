module.exports = function toReadable (number) {
    let res = '';
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 
                 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
                 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 
                  'sixty', 'seventy', 'eighty', 'ninety'];

  if (Math.floor(number / 100) !== 0) {
    res += `${units[Math.floor(number / 100)]} hundred `;
    if(number % 100 === 0){
        return res.trim();
      } else {
        number %= 100;
      }
  }

  if (Math.floor(number / 10) !== 0) {
    if (Math.floor(number / 10) === 1) {
      res += `${teens[Math.floor(number % 10)]} `;
      return res.trim();
    } else {
      res += `${dozens[Math.floor(number / 10)]} `;
    }
    if( number % 10 === 0){
      return res.trim();
    } else {
      number %= 10;
    }
  }
  
  if (number === 0 && res.length === 0) {
    res = units[0];
  } else {
    res += units[number];
  }
  return res.trim();
}
