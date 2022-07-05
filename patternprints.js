//Print the pattern.

//Write a program which ask user for no of lines and print a pattern using an asterik .

const Print_pattern = (N) => 
{
for(let i = 0 ; i <= N ;i++){
  let star= '';
  for(let j = 0 ; j < i ; j++){
  star = star + '*';
}
  console.log(star);     
}
};