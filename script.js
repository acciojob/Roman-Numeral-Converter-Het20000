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

	let ans = "";
	while (num !==0){
     for (let i in romanMap) {
		let [symbol, value] = romanMap[i];
		if (value <= num) {
			ans += symbol;
			num -= value;
			break;
		}
	}
}

