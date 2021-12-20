let cars = [`Toyota`, `Bmw`, `Volvo`];

console.log(cars);

let numbers = [6, -7, 0, 5.5, -3.14];//za brojeve ne trebamo navodnike
console.log(numbers);

let random = [6, `Stefan`, -8.8, true, [1,2,3]];//mozemo razlicite stvari da imamo u nizu kao i realan broj (-8.8)
console.log(random);

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

console.log(random[4][1]);

cars[0] = `Peugeot`;
console.log(cars); //.length duzina niza


for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

//2.Zadatak 
//Odrediti zbir elemenata celobrojnog niza.
let niz =[1, 2, 3]
let suma = 0;
for(let i = 0; i < niz.length; i++){
  suma = suma + niz[i];
}
console.log(suma);
//////////////////////////////////////
//kada imamo vise niza , najbolje je ovako preko funkcija i fora

let niz1 =[1, 2, 3];
let niz2 =[3,5,7,9];
let niz3 =[1,4];

let sumaElemenata = niz => {
  let suma = 0;//suma mora biti u funkciji ali izvan for petlje
  for(let i = 0; i < niz.length; i++)
  {
    suma = suma + niz[i];
  }
  return suma; 

  //moze i return `suma elemenata je: ${suma}
  //ali ce dole izvan funkcije da bude console.log(sumaElemenata(niz));
}

console.log(`Suma elemenata prvog niza je:` + sumaElemenata(niz1));
console.log(`Suma elemenata drugog niza je:` + sumaElemenata(niz2));
console.log(`Suma elemenata treceg niza je:` + sumaElemenata(niz3));


//3. Zadatak
//Odrediti proizvod elemenata celobrojnog niza.
let elementiNiza = niz => {//povlacimo niz sa zadatka iznad
  let proizvod = 1;
  for(let i = 0; i < niz.length; i++){
    proizvod = proizvod * niz[i];
  }
  return proizvod;
}
console.log(elementiNiza(niz1));
console.log(elementiNiza(niz2));
console.log(elementiNiza(niz3));

//4.Odrediti srednju vrednost elemenata celobrojnog niza ili aritmeticku sredinu.
//moramo prvo da odredimo sumu i broj svih elemenata i da podelimo ta 2 broja
let arSr = niz => {
  let suma = 0;
  let broj = 0;

  for(let i = 0; i < niz.length; i++){
    suma = suma + niz[i];
    broj++;
  } 
  return  (broj != 0)? suma / broj : 0;
}//ovaj zadatak je najuniverzalniji, tako radi

let arSr2 = niz => {
  let suma = sumaElemenata(niz);
  let broj = niz.length;
  return (broj != 0) ? suma / broj : 0;//da li je suma elemenata razlicita od nule, ako jeste vrati broj, ako nije onda vrati nulu
  //moze i krace
  return (niz.length != 0) ? sumaElemenata(niz) / niz.length : 0;
}

console.log(arSr(niz1));//povlacimo niz 1 sa prethodnih zadataka
console.log(arSr(niz2));
console.log(arSr(niz3));
console.log(arSr([]));


//ODrediti srednju vrednost parnih elemenata niza(Primer)

let arSrParnih = niz =>{
  let suma = 0;
  let broj = 0;
  for(i = 0; i < niz.length; i++){
    if (niz[i] % 2 == 0) {
      suma = suma + niz[i];
      broj++;
    }
  }
  return broj == 0 ? 0 :suma / broj;
}
console.log(arSrParnih(niz));


//5.Zadatak- Odrediti maksimalnu vrednost u celobrojnom nizu.

let maksVrednost = [55, 8, 15]
  if (maksVrednost[0] > maksVrednost[1] && maksVrednost[0] > maksVrednost[2]) {
    console.log(`Maksimalna vrednost je ${maksVrednost[0]} `);
  }
  else if (maksVrednost[1] > maksVrednost[0] &&maksVrednost[1] > maksVrednost[2]) {
    console.log(`Maksimalna vrednost je ${maksVrednost[1]}`);
  }
  else if (maksVrednost[2] > maksVrednost[0] && maksVrednost[2] > maksVrednost[1] ) {
    console.log(`MAksimalna vrednost je ${maksVrednost[2]}`);
  }
  else{
    console.log(`Pogresan unos`);
  }
////////////////////////////////////
//5.Drugi nacin //bitno
let maxVrednost = niz => {
  let max = niz[0];//nije greska i da je i = 0, samo sto bi morali da proveravamo kasnije i taj prvi element
  for(let i = 1; i < niz.length; i++){
    if(niz[i] > max){
      max = niz[i];
    }
    
  }
  return max;
}
console.log(maxVrednost(niz));
 
//Obrazlozenje
//niz = [1, 2, 3]
  /*
  Ulaz: niz = [1, 2 ,3]

  max = 1

  i | niz[i]  | max  ce da bude
  --------------------------
  1 | 2    | 2 
  2 | 3    | 3 da li je 3 vece od 2, jeste
  
  */
/* 
ako je niz = [1,11,6,11]
i |  niz[i]  | max
-----------------------------
1 | 11       | 11
2 | 6        | 11 dali je6 vece od 11, nije, ostaje 11  
3 | 11       | 11 

*/

//6. Zadatak-Odrediti minimalnu vrednost u celobrojnom nizu.
 /* let minVrednost = [50, 855, 15]
  if(minVrednost[0] < minVrednost[1] && minVrednost[0] < minVrednost
    [2]){
      console.log(`Minimalna vrednost je ${minVrednost[0]}`);
    }
    else if (minVrednost[1] < minVrednost[0] && minVrednost[1] < minVrednost
      [2]) {
      console.log(`Minimalna vrednost je ${minVrednost[1]}`);
    }
    else if(minVrednost[2] < minVrednost[0] && minVrednost[2] < minVrednost
      [1]){
        console.log(`Minimalna vrednost je ${minVrednost[2]}`);
      }
    else{
      console.log(`Pogresan unos`);
    }


//6.Drugi nacin

/*let minVrednost = niz => {
  let min = niz[0];//nije greska i da je i = 0, samo sto bi morali da proveravamo kasnije i taj prvi element
  for(let i = 1; i < niz.length; i++){
    if(niz[i] > max){
      min = niz[i];
    }
    
  }
  return min;
}
console.log(minVrednost(niz));*/

//7. Zadatak-Odrediti indeks maksimalnog elementa celobrojnog niza.
/*let celBrNiz = [5, 15, 20, 10];
let indeksMaksEl = celBrNiz => {
  let maksEl = celBrNiz[0];
  let maxIndex = 0;
  for(let i = 1; i < celBrNiz.length; i++){
    if(celBrNiz[i] > maksEl){ 
      maksEl = celBrNiz[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}
console.log(indeksMaksEl(celBrNiz));

//8. Odrediti indeks minimalnog elementa celobrojnog niza.

let indeksMinEl = celBrNiz => {
  let minEl = celBrNiz[0];
  minEl = celBrNiz[0];
  let minIndex = 0;
  for(let i = 1; i < celBrNiz.length; i++){
    if(celBrNiz[i] < minEl){
      minEl = celBrNiz[i];
      minIndex = i;
    }
  }
  return minIndex;
}
console.log(indeksMinEl(celBrNiz));


//8.Odrediti indeks minimalnog elementa celobrojnog niza.

let nizElement = [25, 10, 15, 20];
//indeksi   0,  1,  2,  3

let minElement = niz1 => { 
  let min = niz1[0];
  let minIndeks = 0;
  for(let i = 1; i < niz1.length; i++){
    if (min > niz1[i]) {
      min = niz1[i];
      minIndeks = i;
    }
  }
  return minIndeks;
}
console.log(minElement(nizElement));



let niz = [1, 5, -4, 8];
console.log(niz[1]);//ovo je element
function testFunkcija(niz){
  let suma = 0;//uvek pre  petlje a u funkciji
  for(let i = 0; i<niz.length; i++){
    if (i % 2 != 0)//ovo je neparan indeks , nema nikakvih zagrada
    //kada kaze ispisati sve elemente niza, ne sme u if, vec u for petlji konzole.log, jer ako je u if u ispisivace samo te elemente koji ispunjavaju taj if
    {
      
    }
    if (niz[i % 2 != 0]) {
      //neparan element, ovo je element(0, 1, 2 ,3)
    }
    //ne moze niz[i] * -1 vec -1 u zagradi
  }
}



//Zadaci za vezbu
/*1.Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m.
Pozvati funkciju i njen rezultat ispisati u konzoli.*/

/*/*let sumaA = (n, m) => {
  let sumaK = 0;
  for(i = n; i <= m; i++){
  sumaK = sumaK + i ** 3;
}
return sumaK;
}
console.log(sumaA(1 ,5));

//2.Zadatak
/*Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba. 
Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara. 
Pozvati funkciju i dobijeni rezultat ispisati u konzoli.*/

//4.zadatak
/*let srVr = arsr(niz);
for(let i = 0; i < niz.length; i++){
  if(niz[i] >srVr)
  suma += novNiz[i];
}
return suma;


//7.Zadatak Odrediti  broj maksimalnih elemenata celobrojnog niza//i ovaj zadatak mora uz 2 prolaza tj.petlje da se uradi

let brMax = [1, 2, 3, 4, 5];
let neZnam = niz =>{
  let maxi = niz[0];
  let brojac = 0;
  for(let i = 1; i < niz.length; i++){
    if (niz[i] > maxi) {
      maxi = niz[i];
      brojac++;
    }
  }
  for(let i = 0; i < niz.length; i++){
    if (niz[i] == maxi) {
      brojac++;
    }
  }
  return brojac;
}
console.log(brMax(neZnam));



//9.zadatak
//imas sumu i dva broajaca, pa ako je suma , mora 2 x da se prodje kroz niz

let brElemenata = niz =>{
let suma = 0;
let br = 0;
let broj = 0;
for (let i = 0; i< niz.length; i++) {
suma += niz[i];
br++;
}


let srVr = suma /br;
for( let i = 0; i < niz.length; i++) {
  suma += niz[i];
  br++;
  if (niz[i] > srVr) {
    broj++;
  }

  return broj;
}
}
//11.Zadatak
/*
let parniElementi = novNiz =>{
  let br = 0;
  for (let i= 0; i< noviNiz.length; i++) {
    if (novNiz % 2 == 0) {
      br++;
    }
    
  }
  return br;
}*/

//16.Zadatak
/*Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
*/
/*let lista = [`Mleko`, `Hleb`, `Slatkisi`, `secer`, `bras0`];

let ispisLista = niz => {
  let rezultat = ``;
  rezultat += `<ul>`;
  for(let i = 0; i < niz.length; i++){
    rezultat +=`<li> ${niz[i]} </li>`;
  }
  rezultat += `</ul>`;
  return rezultat;
}

//document.body.innerHTML += ispisLista(lista);
document.getElementById(`d1`).innerHTML += ispisLista(lista);*/
//17.Zadatal
/*Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
*/

let kosTim = [`Crvena Zvezda`,`Cska`, `Monako`, `Portland`, `La Clippers`];

let ispistTima = niz1 =>{
  let kosRezultat = ``;
  kosRezultat += `<table style ="border:1px solid black"`;
  for(let i = 0; i < niz1.length; i++){
    kosRezultat +=`<tr><td style ="border: 1px solid black"; ${niz[i]}</td></tr>`;
  }
  kosRezultat += `</table>`;
  document.body.innerHTML += kosRezultat;
}


ispistTima(kosTim);


//18.zadatak 
/*Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
*/
let niz6 =[`url neki`];
let rezultat = []
let slika = niz =>{
  for(let i = 1; i < niz.length; i++){
    document.body.innerHTML += "<img src= `${niz[i]}`>"
  }
  
return rez;
}//proveri


//19.Zadatak -Ispisati duzinu svakog elementa u nizu stringova
let duzinaStringova =[`aleksandar`, `stefan`, `marko`];

let duzinaEl = duzinaStringova =>{
  for(let i = 0; i < duzinaStringova.length; i++){
    console.log(duzinaStringova[i].length);
  }

}
duzinaEl(duzinaStringova);

//20.Zadatak  Odrediti element u nizu stringova sa najvecom duzinom.
let duzinaStringova1 =[`aleksandar`, `stefan`, `marko`];

let elementiStr =niz =>{
  let maxDuzina = niz[0].length;
  let maxString = niz[0];
  for(let i = 0; i < niz.length; i++){
  if(niz[i].length > maxDuzina)  {
    maxDuzina = niz[i].length;
    maxString = niz[i];
  }
}
return maxString;
}
console.log(elementiStr(duzinaStringova1
  ));

//21.Zadatak  Odrediti broj elemenata u nizu stringova cija je duzina veca od prosecne duzine svih stringova u nizu.
/*prvim prolaskom treba da odredimo koja je prosecna duzina, a u drugom da uporedimo sa tom prosecnom, mozemo u dve funkcije*/

let duzina = [`aleksandar`, `marko`, `stefan`,`Djordje`]

let prosDuzina = niz =>{
  let suma = 0;
  let broj = 0;
  for(let i = 0; i < niz.length; i++){
    suma = suma + niz[i].length;
    broj++;
  }
  return broj != 0 ? suma / broj : 0;//ako imamo elemente u nizu, ako nemamo onda vracamo 0
}
let brojVeciProsDuz = niz =>{
  let broj = 0;//ovaj broj nema veze sa onim gore
  let pd = prosDuzina(niz);//smestamo vrednost prosDuzine u pd;
  for(let i = 0; i< niz.length; i++){
    if (niz[i].length > pd)  {
      broj++;
    }
  }
  return broj;//vraca broj iz ove funkcije
}
console.log(prosDuzina(duzina));
console.log(brojVeciProsDuz(duzina));
//22.Zadatak - Odrediti broj elemenata u nizu stringova koji sadrze slovo a;

let brojSadrziA = niz => {
  let broj = 0;//kada treba broj stringova uvek broj
  for(let i = 0; i < niz.length; i++){
    if (niz[i].includes(`a`)) {
      broj++;
    }
  }
  return broj;
}
console.log(brojSadrziA(duzina));


//22. Odrediti broj pojavljivanja slova `a` u nizu stringova.

let brojKarakteraA = niz => {
  let broj = 0;//kada treba broj stringova uvek broj
  for(let i = 0; i < niz.length; i++){
  //niz[i] je string
  let element = niz[i];
  //Sada trebamo da prodjemo kroz sve karaktere stringa element
  for(let j = 0; j < element.length; j++){
    if (element [j] == `a`) {
      broj++;
    }
  }
  }
  return broj;
}
console.log(brojKarakteraA(duzina));//obrati paznju na velika i mala slova u strinu;




//7.Zadatak iz Funkcija
/* Programirati funkciju za mašinu za izradu nogara za stolove u jednoj fabrici drveta. Prva noga stola je duža druge noge stola isto koliko druga noga stola od treće noge stola, isto kao i treća noga stola od četvrte noge stola. Dužina prve noge stola i još dve noge stola su poznate, a četvrta nije poznata. Funkcija fabrika određuje i vraća dužinu izostale noge stola ako se funkciji prosleđuju poznate dužine ostale tri noge stola (dužina prve noge stola i dužine neke dve noge stola).
*/ 