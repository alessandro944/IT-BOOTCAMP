/*1. Zadatak
Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća sumu elemenata niza sa parnim indeksom*/

let niz = [1, 4, 6]//parni indeksi ukljucuju i nulu; zato se sabira 3 i 6;

let funkcija = niz =>{
  let suma = 0;
  for(let i = 0; i <= niz.length; i++){
    if (i % 2 == 0) {
      suma = suma + niz[i];
    }
  }
  return suma;
}
  console.log(funkcija(niz));

  /*2. Zadatak
  /*Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona menja znak svakom neparnom elementu celobrojnog niza sa parnim indeksom. Nakon promene znaka, funkcija ispisuje niz u konzoli.*/

  let celNiz =[21,11,89];

  let funkcija1 = celNiz => {
    let varijabla;
    for(let i = 0; i < celNiz.length; i++) {
      if(celNiz[i] % 2 != 0 && i % 2 == 0) {
        varijabla = celNiz[i] * (-1);
        console.log(varijabla);
      }
      
    }
    
  }
  //console.log(funkcija1(celNiz));
funkcija1(celNiz);


  //3.Zadatak
  /*Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća broj elemenata niza sa neparnim indeksom.*/

  let funkcija2 = niz =>{
    let brojac = 0;
    for(let i = 1; i <=niz.length; i++){
      if (niz[i] % 2 != 0) {
        brojac++;
      }
    }
    return brojac;
  }
  console.log(funkcija2(niz));
