/*let a = 1;
while(a <= 5) {
  console.log(`na redu je broj ${a}`);
  a++;
}*/
// 1
/*for(let i=1; i<=5; i++){ //mora ovako, a posle poslednjeg nema tacka zarez
  console.log(`For petlja iteracija ${i}`);
}*/
//2 Ispisati brojeve od 20 do 1
/*let i;
for(i=1; i<=5; i++){ //mora ovako, a posle poslednjeg nema tacka zarez
  console.log(`For petlja iteracija ${i}`);
for(i=20; i>=1; i--){
    console.log(i);
  } */

  //3.Ispisati parne brojeve od 1 do 20
  //1.nacin
  /*for(i=1; i<=20; i++) {
    if (i%2 == 0) {
      console.log(i);
    }
  }*/
  //2.nacin
 /* for(i=2; i<=20; i+=2) //povecanje za po 2 , mora i+=2, ne samo +
{
  console.log(i);
}*/
/*3.nacin
for(i=2; i<=20; i=i+2) {
  console.log(i);
}*/
/*for (let i=1, k=5; i<=k; i++) {
  console.log(i);
}*/

////////////////////////////////////////

/*console.log("5. Odrediti sumu brojeva od 1 do n");
let n = 100;
let suma = 0;//moze i suma u for samo uz zarez
for(i=1; i<=n; i++) {
  suma += i;//suma = suma + i;
}
console.log(suma);*/
////////////////////////////////////////////
/*console.log("7. ODrediti proizvod vrojeva od n do m");
let n = 2;
let m = 6;
let p = 1;
for(i=n; i<=m; i++) {
  p *= i; //p=p*i;
}
console.log(`Proizvod brojeva od ${n} do ${m} je ${p}`);*/

// 9.Preuzeti proizvoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 ,3. For petljom u Html u ispisati svaku od slicica uz pomoc brojaca (iteratora.)
// <img src="slike/airserbia.png">
// <img src"slike/destinacije.jpg">
// <img src="slike/informacije.jpg">
/*for(let i=1; i<=3; i++) {
document.body.innerHTML +=`<imgsrc="slike/${i}.jpg">`;
}
*/

//11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
let br = 0; //inicijacija petlje koja ce da broji koliko ima brojeva deljivih sa 13
for(let i =5; i<=150; i++) {
  if (i%13 == 0) {
    br++;
  } 
}
console.log(`U intervalu od 5 do 150 ima ${br} brojeva deljivih sa 13`);//kada se sve izvrsi tada idemo na rezultat

/*12.zadatak Ispisati aritmeticku(suma brojeva od m do n podeljeno sa sumu brojeva od m do n, tako da cemo prvo sumu da izracunamo) sredinu brojeva od n do m*/

/*let n = 5;
let m = 10;
let suma = 0;
let br = 0;
for(let i=n; i<=m; i++) {
  suma += i;// suma = suma + i;//lad dodajemo cenu
  br++;// br += 1; //br = br + 1; svaki put za po jedan
}
let arsr = suma / br; // 45 / 6;
console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je ${arsr}`);*/


//15. zadatak - Preobrajati i izracunati sumu brojeva od n do m kojima je poslednja cifra 4
//426 % 10 = 6 to je ostatak po modulu 10
// 9465 % 10 = 5
//41 % 10 = 1
//Provezbaj na ovom primeru
/* n = 3;
let m = 45;
br = 0; //uvek pre petlje
let suma = 0;
for(let i = n; i<=m; i++) {
  if ( i%10 == 4 ) {
    console.log(i);
    suma = suma + i;// suma += i;
    br++; //da prebrojimo koliko ih je
  }
}
console.log(`Broj brojeva izmedju ${n} i ${m} kojima je poslednja cifra 4 je ${br}`);
console.log(`Suma brojeva izmedju ${n} i ${m} kojima je poslednja cifra 4 je ${suma}`);*/
///////////////////////////////////////

//16.zadatak Odrediti sumu brojeva od n do m koji nisu deljivu brojem a

/*let n = 5;
let m = 10;
let a = 3;
let suma = 0;
for(let i=n; i<=m; i++){
  if (i % a != 0) {
    suma += i;
  }
}
console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}`);*/
///////////////////////////////////////

//Zadatak 18. ODrediti sa koliko brojeva je deljiv uneti broj k (preko  preko for i while)
//For petlja;
/*let k = 6;
let br = 0;
for(let i = 1; i<=k; i++) {
if (k%i ==0) {
    br++; //svaki put
    //console.log(i);  
    
  }
}
console.log(`Broj ${k} je deljiv sa ${br} brojeva`);

//While petlja;
br = 4;
i = 1;
while(i <= k) {
  if (k%i ==0) {
    br++; //svaki put ako hoces da se povecava broj
    //console.log(i); 
    
  }
  i++;
}
console.log(`Broj ${k} je deljiv sa ${br} brojeva`);

//19.zadatak Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
//nadovezujemo se na prethodni zadatak
if(br == 1) {
  console.log(`Broje nije ni prost ni slozen`);
}
else if (br == 2) {
  console.log(`Broj je prost`);
}
else {
  console.log(`Broj je slozen`);
}*/

//20. Tabela sa bojama
document.body.innerHTML += `<table border="1">`;
for(let tabela=1; red<=6; i++) {
  if (red%2 == 0) {
    tabela += `tr class="roze">
    <td>Tekst</td>
    <td>Tekst</td>`;
  }
  else {
    tabela +=
    `
    <tr>
      <td>
        Tekst
      </td>
      <td>
        Tekst
      </td>
    </tr>
    `;
  }
}
tabela += "</table>";
document.body.innerHTML += `tabela`;