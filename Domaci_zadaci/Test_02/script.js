/*Zadatak 1
➢ Cvećara radi svakim danom od 9:00h do 17:00h. Vaš zadatak je da za
vreme koje ste preuzeli sa računara izračunate koliko sati i minuta je
ostalo cvećarki do kraja radnog vremena. Dobijeni rezultat ispisati u
konzoli.
Ukoliko je vreme koje ste preuzeli pre 9:00h, ispisati tekst
„Radno vreme još uvek nije počelo“.
Ukoliko je vreme koje ste preuzeli nakon 17:00h, ispisati tekst
„Radno vreme je već završeno“.*/

let vreme = new Date();
let pocetak = 9;
let min1 = 0;
let kraj = 17;
let min2 = 0;
let sati = vreme.getHours();
let minuti = vreme.getMinutes();
if (pocetak < sati) {
  document.body.innerHTML += `Radno vreme jos uvek nije pocelo`;
}
else if (sati > kraj) {
  document.body.innerHTML += `Radno vreme je zavrseno`;
}
let preostaloVreme = kraj - sati;
document.body.innerHTML += `Preostalo je ${preostaloVreme} do kraja radnog vremena`;


/*Zadatak 2
➢ Prilikom transporta buketa cveća u drugi grad, potrebno je platiti
poštarinu. Poštarina košta 5 dinara po gramu pošiljke. Pošto cveće
sadrži dosta vode, koja ispari prilikom transporta, pošta daje popust na
cenu izračunate poštarine po sledećoj tarifi:
➢ Za pošiljku težine između 1kg i 2kg, pošta daje popust od 5%, dok na
pošiljku preko 2kg pošta daje popust od 10%.
➢ Za unetu težinu pošiljke u gramima, u konzoli u dva reda ispisati kolika
je cena poštarine bez popusta i sa popustom.
Ispis treba da bude u formatu:
Cena bez popusta je _____ dinara.
Cena sa popustom je _____ dinara.*/
let cveceKg = 3000;
let postarinaPoGramu = 5;
let popust1 = 5;
let popust2 = 10;
let tezina1 = 1;
let tezina2 = 2;

if (cveceKg > tezina1 && cveceKg <= tezina2) {
  iznosPopust1 = (cveceKg * postarinaPoGramu * popust1) / 100;
  cenaBezpopusta = cveceKg * postarinaPoGramu;
    document.body.innerHTML += `<p>Cena bez popusta ukoliko je tezina cveca izmedju ${tezina1} kg i ${tezina2} kg je ${cenaBezPopusta} dinara </p>`;
  cenaSaPopustom = cveceKg * postarinaPoGramu - iznosPopust1;
    document.body.innerHTML += `<p>Cena sa popustom ukoliko je tezina cveca izmedju ${tezina1} kg i ${tezina2} kg je ${cenaSaPopustom} dinara</p>`; 
  }
  else if (cveceKg > tezina2) {
    iznosPopust2 = (cveceKg * postarinaPoGramu * popust2) / 100;
    cenaBezPopusta2 = cveceKg * postarinaPoGramu;
    document.body.innerHTML += `<p>Cena bez popusta ukoliko je tezina cveca veca od ${tezina2} kg iznosi ${cenaBezPopusta2} dinara</p>`;
    cenaSaPopustom2 = cveceKg * postarinaPoGramu - iznosPopust2;
    document.body.innerHTML += `<p>Cena sa popustom ukoliko je tezina cveca veca od ${tezina2} kg iznosi ${cenaSaPopustom2} dinara </p>`;
  }

 /*Zadatak 3

➢ Cvećarka želi da pošalje ruže svojim redovnim kupcima. Uneti broj ruža
koje cvećarka trenutno ima u radnji i broj redovnih kupaca. U konzoli
ispisati koliko NAJMANJE ruža cvećarka treba da dokupi da bi svaki
kupac dobio isti broj ruža, a da joj pri tome ne ostane nijedna ruža u
radnji.
➢ Primer 1:
○ Broj ruža u cvećari 101
○ Broj redovnih kupaca 25
○ Broj ruža koje treba da dokupi je 24 (kako bi svaki kupac dobio po
5 ruža).
➢ Primer 2:
○ Broj ruža u cvećari 100
○ Broj redovnih kupaca 25
○ Broj ruža koje treba da dokupi je 0 (kako bi svaki kupac dobio po
4 ruže).*/

let ruzeURadnji = 23;
let brKupaca =  4;
let ruzePotrebne = ruzeURadnji % brKupaca;

if(ruzeURadnji % brKupaca == 0) {
  console.log(`Ne fali nijedna ruza`);}



  else if(ruzeURadnji % brKupaca != 0){
    console.log(`Cvecara mora da dokupi ${brKupaca - ruzePotrebne}`);
  }

//br ruza koje treba da dokupi je 5



/*➢ Odrediti sumu i broj brojeva, u intervalu od n do m (uključujući brojeve
n i m), koji su deljivi sa 7 i neparni su. Vrednosti promenljivih n i m
odredite sami.
U konzoli ispisati:
● U prvom redu ispisati sumu
● U drugom redu ispisati broj brojeva
● U trećem redu ispisati proizvod sume i broja brojeva.*/

/*let n = 5;
let m = 15;
let brojac = 0;
let suma = 0;
let proizvod;
for(n; n <= m, n++;) {
  if (n % 7 == 0 && n % 2 !=0) {
    brojac++;
  
  }
} 

document.body.innerHTML += `<p>Izmedju brojeva ${n} i ${m} imamo ${brojac} broj koji su deljivi sam 7 i neparni su</p>`;

suma = suma + n;
document.body.innerHTML += `<p>Suma brojeva od ${n} do ${m} iznosi ${suma} </p>`;

proizvod = brojac * suma;
document.body.innerHTML += `<p>Proizvod ${brojac} i ${suma} iznosi ${proizvod} </p>`;

*/
/*Zadatak 5
➢ Odrediti razliku zbira parnih brojeva od n do m koji su deljivi sa 3 i broja
brojeva od n do m kojima je poslednja cifra 3 (uključujući i brojeve n i
m).
➢ Rezultat računanja ispisati u konzoli.*/

/*let n = 5;
let m = 25;
let zbir = 0;
for(i = n; i <= m; i++){
  if (i % 2 == 0 && i % 3 == 0) {
    zbir = zbir + i;
  }
  else if(i / 10 && ){
  
  }
}*/
let zbir = 0;
let broj = 0;
let n = 5;
let m = 15;
let i;//ovako treba uvek u for petlji, a ne u let i = n, tako ne treba, dok je u while, i++ van while skoupa
for(i = n; i<=m; i++){
  if(i % 2 == 0 && i % 3 == 0){
    zbir = zbir + i;
  }
  if (i % 10 == 3) {//treba dva if-a zato sto mora da ispita oba slucaja, a ne da ispita prvi, i ako bude prvi ispunjen onda se ne ide na drugi
    broj = broj + i;
  }
}