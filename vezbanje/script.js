//1 Za dva uneta broja ispisati koji je veći a koji je manji.

/*let unos = `m`;//korisnik moze da unese bilo sta i pratimo sta korisnik unosi u ovo polje*/

// ZADATAK 2: Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.

/*let Temp = 24;
if (Temp >= 0) {
    document.body.innerHTML = `<p style="color: red">temperatura od ${Temp} stepeni je u plusu.</p>`
    // console.log("Temperatura je u plusu.");
}
else {
    document.body.innerHTML = `<p style="color: blue">temperatura od ${Temp} stepeni je u minusu.</p>`
    // console.log("Temperatura je u minusu.");
} */

//3 U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar.

/*if (unos == `m` || unos == `M` ) {
  document.body.innerHTML += `<img src="./m.jpg">`;
}
else if(unos == `z` || unos == `Z`) {
  document.body.innerHTML += `<img src ="./z.jpg">`;
}
else {
  document.body.innerHTML += `Pogresan unos`;
}*/

//Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.

/*let poc1 = 9;
let kraj1 = 20;

let poc2 = 10;
let kraj2 = 18;
let datum = new Date();
let dan = datum.getDay();// Nedelja je nula, ponedeljak je jedan;
let vreme = datum.getHours();

if (dan == 0 || dan == 6) {
  if (vreme >= poc2 && vreme < kraj2) {
    
    document.body.innerHTML += `Butik je otvoren i vikend je`;
  }
  else {
    document.body.innerHTML += `Butik trenutno ne radi i vikend je`;
  }
}

else {
  if (vreme >= poc1 && vreme < kraj1) {
    document.body.innerHTML += `Butik je trenutno otvoren i radni je dan`;
  }
  else{
    document.body.innerHTML +=`Radni dan je, a butik je trenutno zatvoren`;
  }

}*/

//26; Napisati program koji za uneta tri realna broja određuje zbir dva najveća.

/*let a1 = 15;
let a2 = 20;
let a3 = 25;

let min = a1;
if (min > a2) {
    min = a2;
}

if (min > a3) {
    min = a3;
}
let zbir = a1 + a2 + a3 - min;

//25 Za tri učitana broja x, y, z ispitati da li je jedan od njih jednak sumi druga dva.

let x = 15;
let y = 35;
let z = 25;
if (x = y + z) {

}
else if (y = z + x) {
  console.log();
}
else if (z + y +x) {
  console.log();
}
else {
  console.log(`Nijedan od uneta tri broja nije jednak zbiru ostala dva broja`);
}*/
//24 Napisati program koji za uneta četiri prirodna broja a,b,c,d određuje koliko njih je deljivo sa 2, koliko sa 5, a koliko sa 2 i 5 i štampa odgovarajuće poruke.

let A = 20;
let B = 40;
let C = 10;
let D = 5;
let br1 = 0;// Broja za brojeve deljivi dvojkom;
let br2 = 0;// Broja za brojeve deljivi peticom;
let br3 = 0;// Broja za brojeve deljive dvojkom i peticom;


if (Math.floor(A) === A && A>0 && A % 2 == 0) {
br1++;
}
if (Math.floor(B) === B && B>0 && B % 2 == 0){
  br1++;
}
if (Math.floor(C) === C && C>0 && C % 2 == 0) {
  br1++;
}
if (Math.floor(D) === D && D>0 && D % 2 == 0) {
  br1++;
}
/*console.log(`Medju cetiri uneta broja njih ${br1} je deljivo dvojkom`);*/
document.body.innerHTML += `<p>Medju cetiri uneta broja njih ${br1} je deljivo dvojkom</p>`;// isto i za ostale brojace;

