//1. Zadatak
/*Zadatak
Napisati funkciju množi koja određuje proizvod brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.*/

function mnozi(n , m){
  let proizvod = 1;
  for(i = n; i <= m; i++){
    proizvod = proizvod * i;
  }
  console.log(`Proizvod brojeva od ${n} do ${m} iznosi ${proizvod}`);
}
mnozi(3, 5);



//2. Zadatak
/*Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.*/

function aritmetickaSredina(n, m){
  let suma = 0;
  let brojac = 0;
  let sredina;
  for(i = n; i <= m; i++){
    suma = suma + i;
    brojac++;
  }
  sredina = suma / brojac;
  //console.log(`Sredina brojeva izmedju ${n} i ${m} je ${sredina}`);
  return sredina;
}
console.log("Aritmeticka sredina iznosi " + aritmetickaSredina(1,5));


//3.Zadatak
/*Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.*/

function aritmetickaSredina1(n , m){
  let suma = 0;//Aritmeticka sredina se racuna tako sto saberemo sve sto imamo i podelimo sa brojem elemenata(suma/brojac)
  let brojac = 0;
  for(i = n; i<= m; i++){
    if(i % 10 == 3) {
      brojac++;//ovim brojimo koliko njih se zavrsava cifrom 3;
      suma = suma + i;//ovim sabiramo sve one brojeve koji se zavrsavaju trojkom;
    }
  }
  console.log(`Postoji ${brojac} brojeva koji se zavrsavaju cifrom tri u intervalu od ${n} do ${m}`);
  let sredina;
  if(brojac != 0){//brojac nikad ne sme biti nula kada je u pitanju aritmeticka sredina, koristi ovaj uslov;
    sredina = suma / brojac;//Brojac ne sme biti nula, jer je rezultat beskonacno (NaN)
  }
  else {
    sredina = `Beskonacno`;//Bilo koji broj kroz 0 je beskonacno;
  }
  return sredina;
}


console.log(`Aritmeticka sredina brojeva koji se zavrsavaju cifrom tri iznosi ${aritmetickaSredina1(8,12)}`);

//4. Zadatak
/*Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.*/
//<p style="font-size: 20px;"> Tekst tekst</p>
function velicina (n) {

  document.body.innerHTML += `<p style="font-size:${n}px;"> Tekst tekst</p>`;
}
velicina(100);
