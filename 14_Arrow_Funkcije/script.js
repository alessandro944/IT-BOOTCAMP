/*function suma(a, b)//kako izgleda funkcija, a pozivom definisemo tu funkciju
{
  return a +b;
}
console.log(suma(4, 5));//Poziv funkcije

//Anonimne funkcije
let paran = n => {
  if (n % 2 == 0) {
  }




//3.Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

let ceoBroj = => {
  if (n % 2 == 0) {
    return `Tacno`;
  }
  else {
    return `Netacno`;
  }
}


//Napisat funkciju koja prikazuje sliku za prosledjenu adresu slike

let slika = (putanja) => {
  return `<img src="${putanja} ">`;
}
let slika2 = (putanja) => `<img src="${putanja}"`;//kada imate parametar obavezno (), jedino nisu potrebne ako je jedan parametar samo

let slika3 = putanja => `<img src="${putanja}"`;

document.body.innerHTML += slika(`url slike`);
document.body.innerHTML += slika2(`url slike`);
document.body.innerHTML += slika3(`urlslike`);


//4. Napisati funkciju maks2 koja vraca veci od dva prosledjena realna broja.zatim napisati funkciju maks4 koja vraca najveci od cetiri prosledjena realna broja.

let maks2 = (a, b) => {
  if (a > b) {
    return a;
  }
  else {
    return b;
  }
}
/*max4 = (a, b ,c ,d) => {
  let m1 = maks2(a, b);
  let m2 = maks2(c, d)
  let m = maks2(m1, m2);
  return m;

  console.log(maks4(1, 5, 6, 9));
  //moze i kao let max4 = (a, b ,c ,d) => {
  let m1 = max2(a, b);
  let m2 = max2(c, d)
  return max2 (max2( a, b), max2(c, d));*/


//drugi nacin - ternarni nacin

/*let max2 = (a, b) => (a > b) ? a : b;
let max4 = (a, b ,c ,d) => { max2(max2( a, b), max2(c, d));
  
//treci nacin

let max4DN = (a, b ,c ,d) => max2(max2(max2(a, b), c), d);


  
  
}
console.log(max2(16, 9));
console.log(max4(6, 19, -5, 5));
console.log(max4DN(6, 19, -5, 5));

//da li je broj paran ili ne

let paran = n => {
  if (n % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

//drugi nacin
let paran = n => (n % 2 == 0);
console.log(paran(5));*/

/* 7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?*/
/*let sedmiDan = (n) => {
  let dan = n % 7;
  if (dan == 0) {
    return `Nedelja`;
  }
  else if( dan == 1){
    return `Ponedeljak`;
  }
  else if(dan == 2){
    return `Utorak`;
  }
  else if(dan == 3){
  return `Sreda`;
  }
  else if (dan == 4) {
    return `Cetvrtak`;
}
else if (dan == 5) {
  return `Petak`;
}
else  {
  return `Subota`;
}
}
*/



//drugi nacin- ternarni nacin(gde postoji uglavnom if i switch koristiti ternarni)
let sedmiDan = n => (n % 7 == 0)? `Ned` :(n % 7 == 1) ? `Pon` : (n % 7 == 2) ? `Utorak`:(n % 7 == 3) ? `Sreda` :(n % 7 == 4) ? `Cetvrtak` :(n % 7 == 5) ? `Petak`: `Sub`;

console.log(sedmiDan(8));

//treci nacin

/*for(i = 0; i < 7; i++)
{
  console.log(sedmiDan(i));
}*/

//8. Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
//Prebrojati koliko ima ovakvih brojeva od n do m.

let deljivSaTri = (n , m) => {
  let brojac = 0;//van funkcije ne vazi, moramo funkciju
  for(let i = n; i <= m; i++){
    if (i % 3 == 0) {
      document.body.innerHTML += `${i}`;
      brojac++;
    }
  }
  //console.log(brojac);//console.log mora da bude uvek van petlje, jer ce uvek da ga stampa, ukoliko zelimo da stavimo van funkcije
  return brojac;
}

/*deljivSaTri(1, 9); */
//console.log(deljivSaTri(1,9));//ukoliko zelimo da stavimo van funkcije console.log, onda moramo da gadjamo ime promenljive koja nosi naziv funkcije, u ovom slucaj `deljivSaTri`, i da mu dodelimo vrednost parametra
document.body.innerHTML += `${deljivSaTri(1, 24)}`;//moze i ovako

//9.Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
//Brojeve n i m proslediti kao parametre funkciji.

let sumiraj = (n, m) => {
  let suma = 0;  
  for(i = n; i <= m; i++){
    suma = suma + i;
  }
  return suma;//return mora uvek biti van petlje, jer ce nakon sto jednom izvrti ,odmah da je prekine, fakticki bice 1 u ovom slucaju
}

console.log(sumiraj(1, 10));
