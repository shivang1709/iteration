const Find_Digits = (N) => 
{
	let a = 0;
	 while (N !== 0){
	   N = parseInt(N / 10);
	   a++;
	 }
	 return a;
};