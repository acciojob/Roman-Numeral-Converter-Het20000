function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

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