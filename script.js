function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  const subtractive = {
    900: 'CM',
    400: 'CD',
    90: 'XC',
    40: 'XL',
    9: 'IX',
    4: 'IV'
  };

  let ans = "";

  // Add subtractive cases first
  for (let value of Object.keys(subtractive).sort((a, b) => b - a)) {
    while (num >= parseInt(value)) {
      ans += subtractive[value];
      num -= value;
    }
  }

  // Add remaining Roman numerals from obj
  while (num !== 0) {
    for (let i in obj) {
      let symbol = obj[i][0];
      let value = obj[i][1];

      if (value <= num) {
        ans += symbol;
        num -= value;
        break;
      }
    }
  }

  return ans;
}

