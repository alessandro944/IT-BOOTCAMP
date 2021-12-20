/*console.log(`Funkcije`);

function zdravo() //parametar je ovo u funkciji (), a argument je kada pozivamo funkciju
{
   console.log(`Zdravo svete`);
} // funkcija se ne izvrsava dok je ne pozovemo po imenu, u ovom slucaju `zdravo `
zdravo();
console.log(`Hello`);//sve se ispisuje
zdravo();//svaki put kad pozovemo function `zdravo` ona izvrsi svoje telo, a to je ono sto je izmedju {}
let $tekst = `Jelena`;

function stampaj($tekst)//moramo da koristimo u malim zagradama varijable, da bi dobro gadjali sta zelimo
{
  console.log($tekst);
}*/


/*stampaj(`Jelena`);//Prosledjujemo sta zelimo od stampaj da ispisemo
stampaj(`Stefan`);
$ime = `Sofija`;
stampaj($ime);//$ nema nikakvu svrhu, moze samo ime a moze i let ime;


////////////////////////////////////

function korisnik//ime funkcije*/
/*(ime, prezime)//imamo dva parametra u funckiji, odvajamo ih zarezom
{
console.log(`Ulogovani korisnik je ${ime} ${prezime}`);
}

korisnik(`Stefan`, `Stanimirovic`); //kada pozivamo funkciju preko argumenta, parametri dobijaju vrednost argumenta.
korisnik(`Jelena`,`Matejic`);

//////////////////////////////////////

function korisnikGodine(ime, prezime, godine) {
  console.log(`Ulogovani korisnik je ${ime} ${prezime} i ima ${godine} godina`);
}

korisnikGodine(`Jelena`, `Matejic`, 27);
korisnikGodine(`Pera`,`Peric`, 17);

//////////////////////////////////



function zbirDvaBroja(x, y) {
  let zbir = x + y;
  console.log(zbir);//ispisuje vrednost
}
zbirDvaBroja(15, 12);
zbirDvaBroja(3, 9);//x dobija vrednost prvog , tj. 3 , a y dobija vrednost 9

////////////////////////////////////////

function vratiZbirDvabroja(a, b)//,mogu da se opet pozovu x i y
{
  let zbir = a + b;
  return zbir;//vracanje zbira ili rezultata iz funckije, a moze samo jedna promenljiva da se vrati, i funkcija se prekida,ne kuca se nista vise posle return. i ne moze dva puta return u {}
}//ono sto je definisano u let u vazi samo u telu funkcije, a telo je izmedju {}
let rez = vratiZbirDvabroja(50, 70);//a dobija vrednost 50, a b 70;
console.log(rez);
rez = vratiZbirDvabroja(15, 14);
console.log(rez);//funkcija ispisuje, to je console.log
// a vraca, return zbir;


let rez1 = vratiZbirDvabroja(4, 6);//rez1 = 10, jer vraca
let rez2 = vratiZbirDvabroja(5, 7);//rez2 = 12, vracanje zibra 2 broja ovde
let rez3 = vratiZbirDvabroja(rez1, rez2)// rez3 = 22;
console.log(rez3);

let rez4 = vratiZbirDvabroja(4+5, 1+3);
console.log(rez4);//moze i ovako

let rez5 = vratiZbirDvabroja(vratiZbirDvabroja(7, 9), 3)
console.log(rez5);

let rez6 = vratiZbirDvabroja(vratiZbirDvabroja(1,2), vratiZbirDvabroja(5,3));


/////////////////////////////////////
//Ako je temperatura ispod nule ,voda se ledi, ako je izmedju 0 i 100, ona je u gasovitom agregatnom stanju

function voda(temperatura) {
  console.log(`Uneli ste temperaturu od ${temperatura} stepeni celzijusa`);
  if (temperatura <= 0) {
    console.log(`Voda je u cvrstom agregatnom stanju`);
  }
  else if (temperatura >= 100){
    console.log(`Voda je u gasovitom agregatnom stanju`);

  }
  else{
    console.log(`Voda je u tecnom stanju`);
  }
   
    
}
  voda(-3);//temperatura dobija vrednost 3
  //voda(100);
  //moramo da idemo preko if i else if, nikako preko if i if


  //2. Napisati funkciju zbir koja računa zbir dva realna broja.
//Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function racunaj(br1, br2, operacija) {
  if (operacija == `+`) {
    let rezultat = br1 + br2;
    console.log(rezultat);
  }
  else if(operacija == `-`) {
    let rezultat = br1 - br2;
    console.log(rezultat);
  }
  else if(operacija == `*`) {
    let rezultat = br1 * br2;
    console.log(rezultat);
  }
  else if(operacija == `/`) {
    if (br2 == 0) 
    {
      console.log(`Deljenje nulom nije dozvoljeno`);
    }
      else
    {
      let rezultat = br1 / br2;
      console.log(rezultat);}//takodje moze i rezultat umesto console.log
    }
  else
  {
    console.log(`Pogresan unos`);//console.log mora biti u svom bloku, ne moze dole, tako da za svaki blok mora console.log ako pise da moramo da ispisemo
  }
 // console.log(rezultat);//ali na kraju moramo da stavimo ovde u console.log rezultat
}
racunaj(5, 4, `+`);
racunaj(5, 4, `-`);
racunaj(5, 4, `*`);
racunaj(5, 4, `/`);
racunaj(5, 0, `/`);
//za return funkciju moramo da vratimo sa let, ovako ne

///////////////////////////////////////////

//primer:1 za scope i let

if (true) {
  let test =`Zdravo`;
  if (true) {
    console.log(test);
  }//moze da vidi ono sto je ugnjezdeno u skoupu, ali ne i van njega
}
//console.log(test);//ovde ne vidi test, jer je definisan sa let koji je vidljiv samo u if skoupu jer je tu i definisan

//Primer 2: za scope i let
if (true) {
  let test =`Zdravo`;
  console.log(test);
  if (true) {
    let test =`Hello`;
    console.log(test);//ovde vidi novi test i nestaje zdravo, ali to vazi samo u tim viticastim zagradama, tako da ovo ispod console.log ocitava zato sto ispisuje zdravo za ceo scope, ali takodje ispisuje i ovo hello
  }
  console.log(test);//vidi test iz zdravo jer je u tom skoupu
}
//console.log(test);
//***Let vidimo samo u okviru scope, dok var vidimo i van scopa, ako nista ne stavimo ni let ni var ispred promenljive ,ona se racuna kao var */
/*if (true) {
  var proba =`proba`;
}
console.log(proba);


if(true) {
  var promenljiva =`promenljiva`;
  if(true){
    var promenljiva = `hmmm`;
    console.log(promenljiva);
  }*/
  /*console.log(promenljiva);}*///ovde dodeljuje hmmm, bolje koristiti let, jer ide linijia po liniju,var promenljiva se posmatra na globalnom nivou;


//////////////////////////////////////


//3.Napisati funkciju neparan koja za uneti ceo broj n VRACA tačno ukoliko je neparan ili netačno ukoliko nije nepara

/*function neparan(n){
  if (n % 2 != 0) 
  {
    return true;//neparan broj, moze i return `tacno` ili `netacno`; 
    
  }
  else
  {
    return false; //u ovom slucaju je broj paran
  }
}
let nep = neparan(13)
console.log(nep);//treba console.log, da ispisemo promenljivu

//jedan nacin:
function neparan1(n){
  let rez = true;
  if (n%2 == 0) {
    rez = false;
  }
  return rez;
}
let nep1 = neparan1(6);
console.log(nep1);
//drugi nacin

function neparan2(n){
  return n%2 != 0;
}
let nep2 = neparan2(164)
console.log(nep2);*/

//samo jedan return se moze izvrsiti u funkciji, cim se jedan odradi to je to, a mozemo koliko hocemo da ih imamo u posebnom scope u

//////////////////////////////////////

//4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
/*function maks2(a, b){
if (a >= b) {
  return a;
}
else if(b >= a) {
  return b;
}
let maks2 = (15, 5);
console.log(maks2);
////////////////////
function maks4(a, b ,c ,d){
if (a >= b && a >= c && a >= d) {
  return a;
}
else if(b >= a && b >= c && b >= d){
  return b;
}
else if (c >= a && c >= b && c >= d) {
  return c;
}
else if (d >= a && d >= b && d >= c) {
  return d;
}
}
let maks4 = (15, 20, 17, 25)
console.log(maks4);

//Jelenin predlog

function maks4(a, b, c, d){
  let max1 = maks2(a, b);
  //Vracanje koji je veci broj izmedju a i b
  let max2 =maks2(c, d);//vrati koji je veci broj izmedju c i d
  let max = maks2(max1, max2)
  return max;
} //moze da se vidi koji je veci od prva dva, i koji od druga dva

////jos jedan predlog
let maks4broja = maks4_jelena(5, 7, 2, 9);
console.log(maks4broja);

////i jos jedan
function maks4_aleksandar(a, b, c, d){
  let max =maks2(maks2(a,b), maks2(c, d));
  return max
}
let maks4broja = maks4_aleksandar(5,6,8,1)
console.log(maks4broja);
//5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
function slika(putanja) {
  document.body.innerHTML += `${putanja}`
}
 slika ("https://static.nationalgeographic.rs/Picture/31394/jpeg/mesec_snimljen_1_540822360");



/*6.Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.*/
/*function boja(boja){
  document.body.innerHTML += `<p style ="color:${boja};">Tekst</p>`;
}
    
boja("red");*/

//7.Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
//Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

/*function sedmiDan(n) {
  if (n % 7 == 0) {
    console.log(`Nedelja`);
  }
  else if (n % 7 == 1) {
    console.log(`Ponedeljak`);
  }
  else if (n % 7 == 2) {
    console.log(`Utorak`);
  }
  else if (n % 7 == 3) {
    console.log(`Sreda`);
  }
  else if (n % 7 == 4) {
    console.log(`Cetvrtak`);
  }
  else if (n % 7 == 5) {
    console.log(`Petak`);
  }
  else if () {
    
  }
}
function mesec(n) {
  if (n % 12 == 0) {
    console.log(`Januar`);
  }
  else if(n % 12 == 1) {
    console.log(`Februar`);
  }
  else if (n % 12 == 2) {
    console.log(`Mart`);
  }
  else if (n % 12 == 3) {
    console.log(`April`);
  }
} 
///zavrsi*/


//8/Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
//Prebrojati koliko ima ovakvih brojeva od n do m.

function deljivSaTri(n , m)
let br = 0; 
  for(let i = n; i <= m; i++){
    if (i % 3 == 0) {
      console.log(i);
      br++;//kada hocemo da vidimo koliko imamo brojeva od nekog do nekog
    }
  }
  console.log(`Broj brojeva deljivih sa 3 u intervalu od ${n} do ${m}  je ${br}`);


deljivSaTri(10, 30);


//14.Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 

function petPuta(recenica){
  for(let i = 10; i<=50; i+=10)
  document.body.innerHTML += `<p style="font-size"${i*10}px; color:${boja}">${recenica}</p>`;
}
petPuta(`Neki paragraf`, `boja = plava`)

//15. *Bitno*
/*Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da VRATI vrednosti koliko ćete novca zaraditi poslednjeg meseca, ukoliko svakog meseca budete dobijali povišicu.
Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).*/


function praksa(n, a, d){
  for(let i =2; i<=n; i++)// prvi mesec se ne povecava, vec od drugog zato i krece od 2;
  {
    a += d;
    console.log(a);
  }
  return a;
}
let praksa1 = praksa(3, 1000, 150);
console.log(praksa1);


//za sumu umesto zadnji mesec plata

let n = 3;
let a = 5000;
let d = 200;
//1. mesec 
//2.meec = 5000 + 200
//3.mesec = 5000+200
let ukupno = a*n+d*(n-a);
let ukupno1 = n*(a+d) - d;//racunamo da svakog meseca imamo povisicu i oduzmemo prvi mesec jer tad nismo imali
console.log(ukupno);
let ukupno2 = a + (n-1)*(a+d)//plata za prvi mesec + plata za preostalih n - 1 mesci, ovo je drugi nacin


//16. zadatak
function vreme (t, p , n){
  let cekaj = n + p - t;
  if(p > t || t >= p + n){
    console.log(`Burke samo pici`);
  }
  else{
    console.log(`Burke treba da krene kroz ${cekaj} sek da ne bi cekao most`);
  }
}
vreme(17, 15, 10);