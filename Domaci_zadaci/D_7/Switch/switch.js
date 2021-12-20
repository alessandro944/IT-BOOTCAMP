//1. Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda.
switch(2) {
    case 1:
      console.log(`Danas je Ponedeljak`);
      break;
    case 2: 
      console.log(`Danas je utorak`);
      break;
    case 3: 
      console.log(`Danas je sreda`);
      break;
    case 4:
      console.log(`Danas je cetvrtak`);
      break;
    case 5:
      console.log(`Danas je petak`);
      break;
    case 6:
      console.log(`Danas je subota`);
      break;
    case 7:
      console.log(`Danas je nedelja`);
      break;
    default:
      console.log(`Pogresan unos`);
}

//2. Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov uspeh te školske godine (nedovoljan, …, odličan).

let m = 1;
switch(1) {
  case 1:
    console.log(`Ucenik je nedovoljan`);
    break;
  case 2:
    console.log(`Ucenik je dovoljan`);
    break;
  case 3:
    console.log(`Ucenik je dobar`);
    break;
  case 4:
    console.log(`Ucenik je vrlo dobar`);
  case 5:
    console.log(`Ucenik je odlican`)
    break;
    default:
      console.log(`Ucenik je nedovoljan`) 
}

//3. Za uneti paran broj manji od 10 ispitati da li je uneti broj nula, dvojka, četvorka, šestica, osmica ili je unos pogrešan.
//koristis switch za stvari za koje znas da hoces da ispises n = 2;
n = 2;
if(n % 2 == 0 && n < 10){
switch(2) {
    case 1:
      console.log(`Broj je 0`)
      break;
    case 2:
      console.log(`Broj je 2`)
      break;
    case 3:
      console.log(`Broj je 4`);
      break;
    case 4:
      console.log(`Broj je 6`);
      break;
    case 5:
      console.log(`broj je 8`);
      break;
    default:
      console.log(`Pogresan unos`);
}
//4.Za uneta dva broja i karakter napraviti kalkulator koji vrši množenje ta dva broja ukoliko je uneto slovo ’m’, deljenje ukoliko je uneto slovo ’d’, sabiranje ukoliko je uneto slovo ’s’ ili oduzimanje ukoliko je uneto slovo ’o’.

let a = 2;
let b = 5;
let kalkulator = "p"

switch (`m`){
  case "m":
    console.log(a * b);
    break;
  case "M":
    console.log(a * b);
    break;
  case "s":
    console.log(a + b);
    break;
  case "S":
    console.log(a + b);
    break;
  case "o":
    console.log(a - b);
    break;
  case "O":
    console.log(a - b);
    break;
  case "p":
    console.log(a / b);
  case "P":
    console.log(a / b);
    break;
    default:
      console.log(`Pogresan unos`);
}
//5.Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda

let datum = new Date();
let vikend = 6;
let vreme = datum.getDay() + 1;

switch(vreme) {
  case 1:
    console.log( vikend - vreme);
    break;
  case 2:
    console.log(vikend - vreme);
    break;
  case 3:
    console.log( vikend - vreme);
    break;
  case 4:
    console.log( vikend - vreme);
    break;
  case 5:
    console.log( vikend - vreme);
    break;
  case 6:
    console.log(`Vikend je`);
    break;
  case 7:
    console.log(`Vikend je`);
    break;
  default:
    console.log(`Pogresan unos`);
    break;
}


//6.Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini.

let meseci = datum.getMonth()+1;
switch(meseci) {
  case 1:
    console.log(`Januar je`);
    break;
  case 2:
    console.log(`Februar je`);
    break;
  case 3:
    console.log(`Mart je`);
    break;
  case 4:
    console.log(`April je`);
    break;
  case 5:
    console.log(`Maj je`);
    break;
  case 6:
    console.log(`Jun je`);
    break;
  case 7:
    console.log(`Jul je`);
    break;
  case 8:
    console.log(`Avgust je`);
    break;
  case 9:
    console.log(`Septembar je`);
    break;
  case 10 :
    console.log(`Oktobar je`);
    break;
  case 11:
    console.log(`Novembar je`);
    break;
  case 12   :
    console.log(`Decembar je`);
    break;
    default:
      console.log(`Pogresan unos`);
}




//7.Preuzeti redni broj meseca sa računara i ispisati koliko taj mesec ima dana. Ukoliko je u pitanju mesec februar, preuzeti i godinu sa računara, ispitati da li je godina prestupna i na osnovu toga ispisati broj dana meseca februara.
/*let date = new Date(); // izbrisi kad sve odkomentarises
mesec = date.getMonth() + 1;
godina = date.getFullYear();
let Brdana;
mesec = 1;
godina = 2021;
switch(mesec) {
  case 1:
    brDana = 31;
    console.log(`boj dana u mesecu je ${brDana}`);
    break;
  case 2:
    if (godina % 4 && godina % 100 != 0 || 400 == 0) {
      brDana = 29;
    
      break;//mozes i consolelog
    }
    else{
      brDana = 28;
      break;
    }
  case 3: 
    brDana = 31;
    break;
    case 4:
      brDana = 30;
      break;
    default:
}
//zavrsi*/


//8.Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, tekst paragrafa obojiti u žuto.

/*let boja = "red";
switch(boja){
  case red:
    document.body.innerHTML += <p style ="color:red;">lorem </p>
  case green:
    document.body.innerHTML += <p style ="color:red;">lorem </p>
  case blue:
    document.body.innerHTML += <p style ="color:red;">lorem </p>
    document.body.innerHTML += <p style ="color:red;">lorem </p>*/
}



/*
let vreme = new Date();
let vikend = 6;
let datum = vreme.getDay()+1;
console.log(datum);

switch(datum) {
  case 1:
    console.log(vikend - datum);
    break;
  case 2:
    console.log(vikend - datum);
    break;
  case 3:
    console.log(vikend - datum);
    break;
  case 4:
    console.log(vikend - datum);
    break;
  case 5:
    console.log(vikend - datum);
    break;
  case 6:
    console.log(`Trenutno je vikend`);
    break;
  case 7:
    console.log(`Trenunto je vikend`);
    break;
    default:
      console.log(`Pogresan unos`);


}*/




