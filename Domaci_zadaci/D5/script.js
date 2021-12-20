//Zadatak 1
/*Pera i Mika su kupili dva ista džempera. Pera je dao p dinara, Mika je dao m dinara i dobili su kusur od k dinara. Brojeve p, m i k odredite proizvoljno.
Na osnosvu unetih vrednosti, u konzoli ispisati koliki kusur treba da dobije Pera, a koliki kusur treba da dobije Mika, da bi jednako platili svako svoj džemper. */

let p = 3000; //750
let m = 2500;//250
let kusur = 1000;
let petrovKusur = p - ((p + m - kusur) / 2); 
let mikinKusur = m - ((p + m - kusur) / 2);

  console.log(`Petrov kusur iznosi ${petrovKusur}`); 
  console.log(`Mikin kusur iznosi ${mikinKusur}`);

  //Zadatak 2
  /*
  Knjiga ima n poglavlja (broj n unosite sami). 
Čitalac je prvog dana pročitao a poglavlja, a drugog dana dva poglavlja više nego prvog dana.
Na osnovu dodeljenih vrednosti, u konzoli ispisati koliko poglavlja je preostalo čitaocu da pročita do kraja knjige. Pretpostaviti da su vrednosti promenljivih n i a ispravno unete.
Ako je čitaocu ostalo da pročita manje od polovine ukupnog broja poglavlja, u konzoli ispisati poruku “Ostalo je da se procita još manje od polovine knjige”.*/

let n = 35;
let a = 5;
let d = a + 2;
let preostalaPoglavlja = n - a - d;
console.log(`Citalacu je ostalo jos ${preostalaPoglavlja} poglavlja do kraja knjige`);
if (preostalaPoglavlja > (n / 2)) {
  console.log("Ukupno je procitano vise od polovine svih poglavlja");
} else {
  console.log("Ukupno je procitano manje od polovine svih poglavlja");
}
 //Zadatak 3 
/*Neka je u dnevni kalorijski unos neke osobe zadat u kilo džulima (kJ). Izvršiti konverziju te vrednosti u kalorije (kcal), ako se konverzija vrši po formuli: 1 kcal = 4.1868 kJ. Ukoliko je dobijena vrednost manja od 2000 kcal, ispisati u konzoli poruku “​potrebno je povećati dnevni unos”. U suprotnom, ispisati u konzoli poruku  “​nije potrebno povećati dnevni unos”.*/

const kjOneKcal = 4.1868;
const kjLimit = 2000;
let dailyKj = 5000000; 
let calculation = dailyKj / kjOneKcal;

if(calculation < kjLimit) {
  console.log("Potrebno je povećati dnevni unos");
} else {
  console.log("Nije potrebno povećati dnevni unos");
}