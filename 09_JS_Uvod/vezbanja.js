"use strict"; //mora da se pravilno kuca kod
//Zadatak 1
let s = 15;
let m = 21;

let odPonoci = s * + m;
console.log("Od ponoci je proslo " + odPonoci + " minuta");
/*Kad stavimo navodnike onda to deklarisemo kao string i ne mozemo da mnozi i sakuplja, brojevi se ne navode medju navodnicima */
let doPonoci = 24 * 60 - odPonoci;
console.log("Do ponoci je ostalo: " + doPonoci + " minuta");
//moze i ovako 1 zadatak

//Zadatak 2
//Prvi nacin
let minOdPonoci = 921; 
//minOdPonoci = --- * 60 + ---
//minOdPonoci - minSada = --- +60
//(minOPonoci - minSada) /6- = 
let minSada = minOdPonoci % 60;
/*kada uvedemo promenljivu , koristite je do kraja */
let minSada = minOdPonoci % 60;
let satSada = (minOdPonoci - minSada) / 60;
console.log("Sada je " + satSada + ":" + minSada);

//Drugi nacin
console.log(minOdPonoci / 60);
Math.floor() 
console.log(Math.floor(minOdPonoci /60));

/*kada delimo dva broja i imamo ostatak, ostatak se brise, uzimamo prvi manji ceo broj, tj. vraca ceo braj manji ili jednak od rez*/
//Math.ceil()
//console.log(Math.ceil(minOdPonoci / 60));/*Uzimamo prvi vec ceo broj, tj. vraca ceo broj veci ili jednak od rez*/
//console.log(Math.round(minOdPonoci / 60)); /*Ovo je zaokruzivanje brojeva*/
let satSada2 = Math.floor(minOdPonoci /60);
let minSada2 = minOdPonoci % 60;
console.log("Sada je " + satSada2 + ":" + minSada2);
/*let je promenljiva*/
/*Treba da se stavlja var/let pre deklaracije.*/

//Zadatak 3
let cenaRobe = 1750;
let novcanica = 2000;

let kusur = novcanica - cenaRobe;
console.log("Kusur koji treba da se vrati je " + kusur + " dinara");

//zadatak 6

let brojEvra = 250;
let trenutniKurs = 117; 

let konverzija = brojEvra * trenutniKurs;
console.log("Broj dinara koji posedujemo je " + konverzija + " dinara");

let novacDinari = 10000;
let dinariUEvre = novacDinari / trenutniKurs;
console.log("Imamo " + dinarUEvre + " evra nakon razmene");





//zadatak 7

let iznosEvra = 550;
let trenutniKursDinara = 117;
let trenutniKursDolara = 100;

let konverzija = iznosEvra * trenutniKursDinara;

let trenutniIznosDolara = konverzija / trenutniKursDolara;
console.log("Ukupan iznos dolara koji imamo je "= + trenutniIznosDolara + " dolara");
let novacDolari = 200;
let k3

//Trenutno vreme i datum
let datum = new Date(); //datum = objekat koji sadrzi inf.o trenutnom vremenu

let godina = datum.getFullyear();
console.log(godina);
let mesec = datum.getMonth();
console.log(mesec, godina);
let datumUMesecu = datum.getDate(); //datum u mesecu
let danUNedelji = datum.getDay(); //dan u nedelji
console.log("Danas je " + "." + mesec + "." + godina);