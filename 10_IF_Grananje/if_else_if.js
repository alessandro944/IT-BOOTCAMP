console.log("IF - ELSE IF");

let ocena = -4;
if(ocena == 5) {
  console.log("Odlican 5");
}
else if(ocena == 4) {
  console.log("Vrlo dobar 4");
}
else if (ocena == 3) {
  console.log("Dobar 3");
}
else if (ocena == 2) {
  console.log("Dovoljan 2");
}
else if (ocena == 1) {
  console.log("Nedovoljan 1"); 
}
else {
  console.log("Pogresan unos");
}
console.log("Kod nakon if - else if");

//kad ima if if if uvek, if samo pita da li je to tacno i ako je tacno, nastavlja se pitanje , if else kada bude tu se zavrsava, nema sta dalje da ispituje

/////////////////////////////////////

//Zadatak 7
let poeni = 60;
if (poeni >= 50) {
  console.log("Ocena je 6");
}
else if (poeni > 60) {
  console.log("Ocena je 7");
}
else if (poeni > 70) {
  console.log("Ocena je 8");
}
else if (poeni > 80) {
  console.log("Ocena je 9");
}
else if (poeni > 90) {
  console.log("Ocena je 10");
}
else if (poeni == 100) {
  console.log("Imate maksimalan broj poena i ocenu 10");
}
else {
  console.log("Ocena je 5");
}

//Zadatak 8 ,proveriti zadatak

let date = new Date();
let dan = date.getDay();
if (dan == 1 ) {
  console.log("danas je nedelja vikend");
}
else if(dan == 2) {
  console.log("Dan je  subota vikend"); 
}
  else {
    console.log("Danas je radni dan");
  }

//zadatak 9
let vreme = date.getHours();
if (vreme < 12) {
  console.log("Dobro jutro");
}
else if (vreme < 18) {
  console.log("Dobar dan");
}
else {
  console.log ("Dobro vece");
}
//Vise resenja if, if ,if, jedno resenje if, else
    
//Zadatak 10
let d1 = 1;
let m1 = 5;
let g1 = 2000;

let d2 = 3;
let m2 = 9;
let g2 = 2000;

if (g1 < g2 ) {
  console.log(` ${g1}/${m1}/${d1} je ranija od ${g2}/${m2}/${d2}`);
}
else if (g1 > g2) {
  console.log(` ${g2}/${m2}/${d2} je ranija od ${g1}/${m1}/${d1}`);
}
else if (m1 < m2) {
  console.log(`${g1}/${m1}/${d1} je ranija od ${g2}/${m2}/${d2}`);
}
else if (m1 > m2) {
  console.log(` ${g2}/${m2}/${d2} je ranija od ${g1}/${m1}/${d1}`);
}
else if (d1 < d2) {
  console.log(` ${g1}/${m1}/${d1} je ranija od ${g2}/${m2}/${d2}`);
}
else if (d1 > d2) {
  console.log(` ${g2}/${m2}/${d2} je ranija od ${g1}/${m1}/${d1}`);
}
else {
  console.log(`Datumi se poklapaju`);
}
  
//zadatak 11 //bitno
let sati2 = date.getHours();

let pocetakRada = 9;
let krajRada = 17;
if (sati2 < pocetakRada) {
  console.log("Firma ne radi");
}
else if(sati2 > krajRada){
console.log("Firma ne radi");
}
else {
  console.log("firma radi");
  //zadatak 11 drugi nacin
  let sati = 15;
  if (sati < 9) {
    console.log("Firma ne radi");
  }
  else if (sati >= 17) {
    console.log("Firma ne radi");
  }
  else {
    console.log("Firma radi");
  }
}
//Zadatak 12 Doktori
let p1 = 14;
let k1 = 22;
let p2 = 7;
let k2 = 12;

if (k1 < p2) {
  console.log("Ne preklapaju se");
}
else if(k2 < p1) {
  console.log("Ne preklapaju se");
}
else {
  console.log("Preklapaju se");
}

//zadata 13
//Za uneti broj ispitati da li je paran ili nije
let k = 8;
if (k % 2 == 0) {
  console.log(`broj ${k} je paran`);
}

//14 zadatak
// nesto / 0 = beskonacno
// 0 / nesto = 0
if(k % 3 != 0) {
  console.log(`Broj ${k} nije deljiv sa brojem 3`);
}
else {
  console.log(`Broj ${k} je deljiv brojem 3`);
}
//15 zadatak za vezbanje

//zatadak 16
broj = 0;
if (broj <= 0) {
  broj = broj -1;// brojj ++ ili broj += 1 je moglo da se stavi
  console.log(broj);
}
else {
  broj = broj +1;
  console.log(broj);//broj ++ ili broj += 1 je moglo da se stavi
}
//zadatak 17
let a1 = 45;
let a2 = 65;
let a3 = 35;

let maks =a1;
if (maks < a2) {
  maks = a2;
} 
if (maks < a3) {
  maks = a3;
}
console.log(`Najvec broj je ${maks}`);
  
//najmanji broj
let min = a1;
if (min > a2) {
  min = a2;
}
if (min > a3) {
  min = a3;
}
console.log(`Najmanji broj je ${min}`);

//Srednji broj
let srednji = a1 = a1 + a2 - min - maks;
console.log(`Srednji broj je ${srednji}`);

//zadatak 18

// 1.nacin
let s = 15.3;
console.log(s%1);
if (s%1 == 0) {
  console.log(`Broj ${s} je ceo broj`);
}
else {
  console.log(`Broj ${s} nije ceo broj`);
}
//2.nacin
//math.floor je zaokrizavanje brojeva
s = 14.5;
console.log(Math.floor(s));
if (Math.floor(s) == s) {
  console.log(`Broj ${s} je ceo broj`);
}
else {
  console.log(`Broj ${s} nije ceo broj`);
}

//Ugnjezdavanje uslova i grananja

