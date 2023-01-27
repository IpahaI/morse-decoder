const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
     let subStr = '';
  let str = '';
  
    for (let i = 0; i < expr.length; i += 10) {
     let letterCode = '';
     subStr = expr.slice(i, i + 10);
     
      if (subStr == '**********') {
        str += ' ';
      } else {
        
        for (let k = 0; k < 9; k += 2) {
          let bit = subStr.slice(k, k + 2)
               
          switch(bit) {
            case '10':
              letterCode += '.';
              break;
            case '11':
              letterCode += '-';
              break;
            case '00':
               letterCode += '';
              break;
          }
        } 
         for (let key in MORSE_TABLE) {
          if (key == letterCode) {
            str += MORSE_TABLE[key]
          } 
        }
      } 
    } return str; 
}

module.exports = {
    decode
}