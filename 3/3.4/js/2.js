let arr = [1, -4, 2, -3, 5, -6]

let filteredArr = arr.filter(n=> n<0 && n%2==0)
console.log(filteredArr.reduce((prev, current)=> prev+=current));

console.log(`Кол-во положительных: ${(arr.filter(n=>n>0)).length} 
Кол-во отрицательных: ${(arr.filter(n=>n<0)).length}`);

console.log(arr.find(n=> n==n));
