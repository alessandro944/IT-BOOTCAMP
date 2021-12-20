console.log("Logicki operatori");

//1. true or false
//2. and  && -moraju sve da budu tacni
//3. or || , moze samo jedno da bude tacno, tj jedan uslov
let pol = "z";
let god = 27;

if (pol=="m" &&god>=18) {
  console.log("Osoba je muskog pola i punoletna je"); //kad je jedno od dva false, nece da prodje, mora oba
}
else if (pol=="m" && god && god>=0) {
  console.log("Osoba je muskogp ola i maloletna je");
}
else if (pol=="z" && god>=18 ) {
  console.log("Osoba je zenskog pola i punoletna je");
}
else if (pol=="z" && god<18 && god>=0) {
  console.log("Osoba je zenskog pola i maloletna je");
}
else {
  console.log("Pogresan unos");
}
/*else if mora, zato sto se uslovi iskljucuju, ne moze 2 uslova, vec kada bude ispunjen prvi uslov, tu se zavrsava, da je bilo if, onda bi isli i na drugi, treci uslov iako je prvi uslov ispunjen*/

///////////////////////////////////////
pol = "Z";
if (pol=="z" || pol=="Z" || pol=="ž" || pol=="Ž") {
  document.body-inneHTML = `<img src=".slike/z.png">` //dovoljno je da makar jedno bude tacno; 
}
else if (pol=="m" || pol=="M") {
  document.body.innerHTML = `<img src="slike/m.png">`
}
else {
  documment.body.inneHTML == `<p>Pogresan unos</p>`; //mora  da bude dva == , da hoces preko pogresnog unosa da bude dole jos nesto onda ide +=
}
///////////////////////////////////////////////////
pol = "Z";
god = 15;
if ( (pol=="z" || pol=="Z" || pol=="ž" || pol=="Ž") && god>=18 ) {
  console.log("Osoba je zenskog pola i punoletna je");
}
// 0<=god<18 NEEEE!!!! moze ovako: 0<=god && god<18 ili obrnuto
else if( ( pol=="z" || pol=="Z" || pol=="ž" || pol=="Ž") && god>= 0 && god<18) {
  console.log("Osoba je zenskog pola i maloletna je");
}
else if( (pol=="m" || pol=="M") && god>18) {
  console.log("Osoba je muskog pola i punoletna je");
}
else if( (pol=="m" || pol=="M") && god>=0 && god<18) {
  console.log("Pogresan unos");
}