let a="Привет, Simbirsoft";
let b=2022;
let c=true;
let d="false";
console.log(typeof a, typeof b, typeof c, typeof d);

let str1 = "Привет,"; let str2 = " Мир!";
console.log(str1+str2);

let name = "Татьяна";
console.log(`Привет, ${name}!`);

let age=18;
console.log(`Мне ${age} лет!`);

let str='abcde';
console.log(str[0], str[2], str[4]);

let now=new Date();
let hour=now.getHours();
let minute=now.getMinutes();
let sec=now.getSeconds();
console.log(`${hour}:${minute}:${sec}`);

let g = 54;
console.log(+(Math.sqrt(g)).toFixed(3));
