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


let n=798;
let ans="";
while(n!=0){
   
   for(leto i in romanMap){

       let value=romanMap[i][0];
       let num=romanMap[i][1];


        if(num<=n){

           ans=ans+value;
            n=n-num;
             break;
            
}
        



}



}