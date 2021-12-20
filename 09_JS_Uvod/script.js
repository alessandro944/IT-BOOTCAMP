console.log("Pozdrav iz JS datoteke!");

let a = 3, b = 6;
console.log(a * b);
console.log("Pera" + "Stankovic");//ne moze da se mnoze stringovi

b = b / a;
console.log(a, b);//a =? , b =?
a = b * a + a; // 2 * 3 + 3
console.log(a, b); //a = 9, b = 2
b = (a - 2 *b)/ b; // (9 - 2 * 2) / 2 = (9 - 4) / 2 = 5 / 2 = 2.5
console.log(a, b);

//a = a + 10;  // 9 + 10 = 19
a += 10; //ovako je okej da se pise
console.log(a); // a = 19
b /= a;
console.log(b);

a = a + 1;
console.log(a); //nova vrednost a je 20

//a += 1;
//a = =+ 1;
a++; //uvecanje za jedan
console.log(a);


++a; //takodje uvecava vrednost promenljive za jedan
console.log(a);


let c = 5;
console.log(c++); //prvo se iskoristi stara vrednost promenljive, pa se onda vrednost promenljive poveca
console.log(c);


let d = 3;
console.log(++d); //prvo se vrednost promenljive poveca za 1, a onda se nova vrednost koristi u izrazu
console.log(d);

c = 4;
d = 3;
x = (c++) * (--d); //4(prov se iskoristi stara vrednost pa se poveca za 1) * 2 = 8
console.log(c, d, x); // c=5, d=2, x = 8 (Nove vrednosti)

//Ostatak pri deljenju
console.log(7 % 2); //7 = 3 * 2 + 1 console.log(9 % 2); // 9 = 4 * 2 + 1

console.log(180 % 60) // 180 = 3 * 60 +0
console.log(365 % 7); //ostatak 1, trazis koliko se celih sedmica ostane, i ostatak trazis
//parni brojevi uglavnom vracaju 0, dok neparni 1


console.log(4 ** 3);

 c = 3;
 d = 1 = (c ** 3); // 1 + ( 3 * 3) = 1 + 27 = 28
 // nisu potrebne zagrade, ali moze
 


a = 20;
b = 45;
c = x;
console.log(a * 60 + b);
console.log(20 * 60 + 45);