function convertToRoman(num) {
  let roman = '';
  let number = num;
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  Object.keys(lookup).map(key => {
    while (number >= lookup[key]) {
      roman += key;
      number -= lookup[key];
    }
    return roman;
  });

  return roman;
}

convertToRoman(36);
