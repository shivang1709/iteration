//Find Sum

//You are given an integer N,and your task is to find the sum of all the even integers starting from 1 upto N (Ninclusive).


const findSum = (n) => {
    let sum = 0;
    for (let i = 2; i<=n;i+=2){
      sum = sum+i;
    }
    return (sum);
};