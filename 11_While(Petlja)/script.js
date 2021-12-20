
let i = 1;
console.log(i); // 1
i++;
console.log(i);//2
i++;
console.log(i);//3
i++;
console.log(i);//4
i++;
console.log(i);//5
i++;

//Umesto ovoga gore :
/*/let i = 1;
while(i <= 5){
  console.log(i);
i++;
}*/

//Vezba 1

//Svi brojevi u istom redu;
/*let rez = "";
let i = 1;*/
/*while(i <= 20)
{
  rez += i + " ";
  i++;
} */


//svi bojevi u istom redu;
while(i <=20) {
console.log(i);
i++;
}
//Vezba 2  Isipisati brojeve od 20 do 1

i = 20;
while(i >= 1) {
  console.log(i);
  i--;
}

//Vezba 3  Ispisati parne brojeve od 1 do 20

i = 1;
while(i <= 20) {
  if (i % 2 == 0) {
    
    console.log(i);
  }
  i++; //mora ovde u prvim viticastim zagradama, inace ti ne gine beskonacna petlja
}

//Drugi nacin
i = 2;
while(i <= 20)
{
  console.log(i);
  i +=2; //povecava se svaki broj za 2, to je parno;
  //i + 2; ne moze, to je vrednost, inace ode u beskonacnu petlju

}

//Dodavanje paragrafa kroz JS

document.body.innerHTML += "<p style='color: red;'>1. Prvi paragraf</p>";
document.body.innerHTML += "<p style='color: red;'>2.Drugi paragraf</p>";//tacka zarez mora ako ima jos nesto pored boje npr.
document.body.innerHTML += "<p style='color: red;'>3.Drugi paragraf</p>";//tacka zarez mora ako ima jos nesto pored boje npr.
document.body.innerHTML += "<p style='color: red;'>4.Drugi paragraf</p>";//tacka zarez mora ako ima jos nesto pored boje npr.
document.body.innerHTML += "<p style='color: red;'>5.Drugi paragraf</p>";//tacka zarez mora ako ima jos nesto pored boje npr.
//+= da bi dodavali paragraf po paragraf

i = 1;
let n = 5;
while(i <= n)
{
  if (i % 3 == 1) {
    document.body.innerHTML += `<p style ='color:red;'>${i}, paragraf jedan </p>`;
  }
  else if (i % 3 == 2) {
    document.body.innerHTML += `<p style='color: green;'>${i} paragraf dva`;
  }
  else {
    document.body.innerHTML += `<p style ='color:purple'>${i}paragraf tri`;
  }
  //Doda se paragraf
  i++;
}

// 6. Odrediti sumu brojeva od 1 do 100;
i = 1;
let suma = 0;
while(i <= 100){
  suma = suma + 1;
  i++;
  //Iskorist i tako da se odredi suma
}
console.log(`Suma brojeva od 1 do 100 jednaka je ${suma}`);


//////////////////////////////////////
//#Iteracije , pogledati

// 7. Odrediti sumu brojeva od 1 do n

n = 18;
i = 1;
suma = 0; //mora pre same petlje pocetna vrednost petlje i sume
while( i <= n) 
{
  suma += i; // moze i suma = suma + i;
  i++; 
}
console.log(`suma brojeva od 1 do ${n} jednaka je ${suma}`);

// 9. zadatak ODrediti proizvod brojeva od n do m

n = 4;
let m = 6;

i = n;
let proizvod = 1;
while(i <= m) 
{

  proizvod = proizvod * i;
  i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} jednak je ${proizvod}`);


// 10. Zadatak  Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 1;
m = 3;
i = n;
let sumaKvadrata = 0;
 suma = 0;
while(i <= m) {
  if (i % 2 == 0) {
    sumaKvadrata = sumaKvadrata + i * i;
  }
  else {
    suma = suma + (i * i * i)
  }
  i++;
}
console.log(sumaKvadrata);
console.log(suma);




/*let n = 1
let m = 10
let proizvod

i = n;
proizvod = 1;


//domaci zadatak 1
while (n <= m) {
  if(n % 7 === 0 && n % 3 !== 0)  {
    proizvod = proizvid * i;
    console.log(`proizvod brojeva ${n} i ${m} jednak je ${proizvod} `);
  }
  i++;
}



//domaci zadatak 2
let n = 1
let m = 10
i = n;
proizvod = 1;

while (n <= m) {
  if(n % 3 === 0 && n % 7 !== 0)  {
    proizvod = proizvod + i;
    console.log(`proizvod brojeva ${n} i ${m} jednak je ${proizvod} `);
  }
  i++;
}*/