//Find the Fives.

//Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.

const Find_Five = (N) => 
{
	 let a = 0;
	 while (N>0){
	   remainder = N % 10 ;
	   N = parseInt(N/10);
	   
	   if (remainder == 5){
	     a++;
	   }
	 }
	 return a;
};