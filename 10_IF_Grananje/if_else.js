console.log("If-else grananje");

if(true) {
  console.log("Uslov je ispunjen")
    
}
else {
  console.log("Uslov nije ispunjen");
}


if(false) {
  console.log("Uslov je ispunjen")
    
}
else {
  console.log("Uslov nije ispunjen");
}
 
//////////////////////////////////

a = 10;
b = 7;
if(a < b) {
  console.log("Broj " + a +" je strogo manji od broja" + b );
}
else {
  console.log(`Broj ${a} a je veci ili jednak broju ${b}`);// ako zelimo da ispisujemo vrednosti promenljivih preko brojeva preko ``
}

////////////////////////////////////////

let god = 27;
if(god >= 18) {
  console.log("osoba je punoletna")
}
else{
  console.log("Osoba je maloletna")//mogu se koristiti i bektikovi unutar ()
}


//Zadatak 1
 let br1 = 11;
 let br2  = 10;
 if(br1 > br2) {
   console.log(`Broj ${br1} je veci od broja ${br2}`);
}
else {
  console.log(`Broj ${br2} je manji od broja ${br1}`);
}

//zadatak 2
let temp =25;
if(temp >= 0) {
  console.log(`Temperatura ${temp} je veca od 0 `)// moze i document.body.innerHTML = `<p style="color: red;"> Temperatura $(temp) je u plusu</p>
}
else {
  console.log(`Temperatura ${temp} je manja od 0`) //document.body.innerHTML = `<p style="color:blue>"Temperatura $(temp) je u minusu</p>`
}
//Zadatak 3 
//U odnosu na pol koje je kroisnik uneo prikazazi odgovarajuci avatar.
let pol = "m";
if (pol == "m") {
  //prikazi avatar muskarca
  document.body.innerHTML += `<img src="ubaci adresu slicice obavezno uz putanju ./"`;
} 
else {
  //prikazi avatar zene
  document.body.innerHTML += `<img src="ubaci adresu slicice uz putanju"`;
}

//Zadatak 6 ******vazan koncept
//odrediti najveci od tri uneta broja(samo uz pomoc if naredbi, bez koriscenja logickih operatora)
let b1 = 5;
let b2 = 9;
let b3 = 7;

let maks = b1;
//ako je pretpostavka losa, uradim njen update
if(maks < b2) {
    maks = b2;
}
if (maks < b3) {
  maks = b3;
}
 document.body.innerHTML += `<p> ${maks} </p>`;
 // += jeste dodavanje na prethodni sadrzaj elementa, a kada je jednako samo prelepimo na sadrzaj elementa
 
 //zadatak 4
 //U odnosu na preuzeto trenunto vreme sa racunara, ispisati da li je trenutno jutro ili popodne

 let date = new Date();
  let sati = date.getHours();
  if(sati > 12) {
    console.log("trenutno je popodne");
  }
  else {
      console.log("trenutno je jutro");
  }
  //zadatak 5 ***

  let year = date.getFullYear();
  let myage = 1994;
  if (year - myAge >=) {
    console.log("Osoba je punoletna");
  }
  else {
    console.log("Osoba je maloletna");
  }