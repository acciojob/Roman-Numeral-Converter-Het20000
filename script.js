function convertToRoman(num) {
  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let ans = "";
  for (let i = 0; i < romanMap.length; i++) {
    const [roman, value] = romanMap[i];
    while (num >= value) {
      ans += roman;
      num -= value;
    }
  }
  return ans;
}
