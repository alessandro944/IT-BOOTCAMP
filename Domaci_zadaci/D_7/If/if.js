//1.Zadatak 1
//Naći i ispisati najveći od tri uneta broja a, b i c korišćenjem logičkih operatora.
/*let a = 33;
let b = 20;
let c = 25;

if (a > b && a > c) {
  document.body.innerHTML += `Najveci broj je ${a}`;
}
else if(b > a && b > c) {
  document.body.innerHTML += `Najveci broj je ${b}`;
}
else {
  document.body.innerHTML += `Najveci broj je ${c}`;
}*/


 //2. Zadatak
 /*Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15
stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.*/

 /*let temp = 45;

 if (temp < -15 || temp > 40) {
   document.body.innerHTML += `<p style =" color: red;">Temperatura je ekstremna</p>`;
 }
 else {
   document.body.innerHTML += `<p style =" color: blue;"> Temperatura je normalna</p>`;
 }*/
//3 .Zadatak 3
/*Ispitati da li je uneta godina prestupna. Godina je prestupna ako je deljiva sa 4 i važi
jedno od sledeća dva pravila: godina nije deljiva sa 100 ili je deljiva sa 400.*/

/*let godina = 2001;
if (godina % 4 == 0 ) {
  if (godina % 100 != 0 || godina % 400 == 0 ) {
    document.body.innerHTML += `<p>Godina ${godina} je prestupna`;
  }
}
else {
  document.body.innerHTML += `Godina ${godina} nije prestupna`;
}*/

//4. Zadatak 4
/*Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do
18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.*/

let vreme = new Date();
/*let dan = vreme.getDay();
console.log(dan);
let trenutnoVreme = vreme.getHours();


const prvoVreme = 9;
const drugoVreme = 20;
const treceVreme = 10;
const cetvrtoVreme = 18;
if (dan > 0 && dan <= 5) {
  if (trenutnoVreme >= prvoVreme && trenutnoVreme < drugoVreme) {
    console.log(`Trenunto je butik otvoren i radni je dan`);
  }
  else {
    console.log(`Trenutno je radni dan a butik je zatvoren`);
  }
}
if (dan == 0 && dan == 6) {
  if (trenutnoVreme >= treceVreme && trenutnoVreme < cetvrtoVreme) {
    console.log(`Trenutno je butik otvoren i vikend je`);
  }
  else {
    console.log(`Trenutno je butik zatvoren a vikend je`);
  }
}*/

//5. Zadatak 5
/*Za preuzeti datum i mesec sa računara, odrediti koliko dana ima do kraja tekućeg
meseca. Rezultat ispisati na ekranu i u konzoli.*/


let datum = vreme.getDate();
console.log(datum);


let danaUMesecu = new Date(vreme.getFullYear(), vreme.getMonth()+1, 0).getDate();//[povlacimo ]
console.log(danaUMesecu);
let preostaloDana = danaUMesecu - datum;
console.log(`Preostalo je jos ${preostaloDana} dana do kraja meseca`);


//6. Zadatak 6
/*Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo
meru da za svakog čoveka mora biti obezbeđeno 3m površine lokala. Za 2
posmatrani kafić su dati podaci da ima v m i da je u njemu trenutno n gostiju. Brojeve v i n određujete sami.
Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema
unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne
pridržava propisane mere.
Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal
da bi mera bila zadovoljena.*/


/*let v = 120;
let n = 60;
let metara = 3;
let maksLjudi = v / metara;
if (n * metara <= v) {
  document.body.innerHTML += `<p style= "background-color: green; color:white;">DA</p>`;
}
else {
  document.body.innerHTML += `<p style= "background-color: red; color:white; text-align: center;">NE</p>`;
  let suvisanBroj = n - maksLjudi;
  document.body.innerHTML += `<p style="background-color: red; color: white; margin-top: -16px; text-align: center;">Potrebno je da lokal napusti ${suvisanBroj} ljudi</p>`;
}
*/

//7. Zadatak 7
/*Za uneto početno i krajnje radno vreme dva lekara, ispitati koliko sati i minuta se
njihove smene preklapaju.
Ulaz (vrednosti koje samostalno dodeljujete promenljivama) :
● Početak radnog vremena u satima i minutima za prvog lekara (pocSatLek1 i
pocMinLek1)
● Kraj radnog vremena u satima i minutima za prvog lekara (krajSatLek1 i
krajMinLek1)
● Početak radnog vremena u satima i minutima za drugog lekara (pocSatLek2 i
pocMinLek2)
● Kraj radnog vremena u satima i minutima za drugog lekara (krajSatLek1 i
krajMinLek1)
Izlaz (vrednosti koje treba ispisati na ekranu i proizvoljno ih stilizovati) :
● Početak radnog vremena prvog lekara (izraženo u satima i minutima)
● Kraj radnog vremena prvog lekara (izraženo u satima i minutima)
● Početak radnog vremena drugog lekara (izraženo u satima i minutima)
● Kraj radnog vremena drugog lekara (izraženo u satima i minutima)
● Vreme koje su prvi lekar i drugi lekar zajedno proveli na poslu (izraženo u
satima i minutima). Ukoliko nema preklapanja u radnim vremenima ova dva
lekara, na ekranu ispisati da nema preklapanja.*/
/*pocSatiLek1 = 10;
pocMinLek1 = 30;
document.body.innerHTML += `<p>Pocetak radnog vremena lekara 1 je u ${pocSatiLek1} sati i ${pocMinLek1} minuta</p>`;
krajSatiLek1 = 16;
krajMinLek1 = 30;
document.body.innerHTML += `<p>Kraj radnog vremena lekara 1 je u ${krajSatiLek1} casova i ${krajMinLek1}</p>`;

pocSatLek2 = 13;
pocMinLek2 = 30;
document.body.innerHTML += `<p>Pocetak radnog vremena lekara 2 je u ${pocSatLek2} casova i ${pocMinLek2} minuta</p>`;
krajSatiLek2 = 20;
krajMinLek2 = 0;
document.body.innerHTML += `<p>Kraj radnog vremena lekara 2 je u ${krajSatiLek2} casova i ${krajMinLek2} minuta</p>`;

let pocetak1 = pocSatiLek1 * 60 + pocMinLek1;
let kraj1 = krajSatiLek1 * 60 + krajMinLek1;
let pocetak2 = pocSatLek2 * 60 + pocMinLek2;
let kraj2 = krajSatiLek2 * 60 + krajMinLek2;
let zajedno;
if (pocetak2 < kraj1 && pocetak1 < pocetak2) { //ovo je i za gornju levu i za donju levu sliku isto
  if (kraj1 < kraj2) {     //Po ovome se gornja slika razlikuje od donje
    zajedno = kraj1 - pocetak2; //ovo je zuta linija za gornju levu sliku
    
  }
  else {                                 
    zajedno = kraj2 - pocetak2;    //Ovo je zuta linija za donju levu
  }
}
else if(pocetak2 < pocetak1 && pocetak1 < kraj2) { //ovo je samo desna strana
  if (kraj2 < kraj1) {  
    zajedno = kraj2 - pocetak1;   //ovo je zuta linija za gornju desnu sliku
  }
  else {
    
    zajedno = kraj1 - pocetak1; //ovo je zuta linija za donju desnu sliku
}
}
else{
  document.body.innerHTML += `<p>Smene lekara 1 i lekara 2 se ne preklapaju</p>`;
}





if (zajedno > 0) {    //Uvodimo uslov da imamo vreme doktora  koji su proveli zajedno na poslu, cim je vece od nule , znaci da su proveli vreme zajedno 
  let zajednoSati = Math.floor(zajedno / 60);

  let zajednoMinuti = zajedno % 60; //ostatak kada se odbiju sati
  document.body.innerHTML += `<p>Vreme koje su proveli zajedno iznosi ${zajednoSati} sati i ${zajednoMinuti} minuta </p>`;
}

*/







//8. Zadatak 8
/*Za uneta dva broja i karakter napraviti kalkulator koji vrši:
● Množenje ta dva broja ukoliko je uneto slovo ’m’
● Deljenje ukoliko je uneto slovo ’d’
● Sabiranje ukoliko je uneto slovo ’s’
● Oduzimanje ukoliko je uneto slovo ’o’*/
/*let brojJedan = 5;
let brojDva = 3;
let m = "s";

if(m == "m" || m == "M" ) {
  console.log(brojJedan * brojDva);
}
else if(m == "d" || m == "D"){
console.log(brojJedan / brojDva); 
}
else if(m == "s" || m == "S"){
console.log(brojJedan + brojDva); 
}
else if (m == "o" || m == "O") {
  console.log(brojJedan - brojDva)
}
else {
  console.log(`Pogresan unos`)
}
*/
