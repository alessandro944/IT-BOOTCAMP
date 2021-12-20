//9. Zadatak 9
//Ispisati dvostruku vrednost brojeva od 5 do 15.

let a = 5;
let b = 15;
let i = a;
let dvostrukaVrednost = 2;
for (i <= b; i++;) {
  a = i + i;  


}
console.log(`dvostruka vrednost je ${a}`);

//10. Zadatak 10
//Odrediti sumu brojeva od n do m.

/*let n = 5;
let m = 10;
i = n;
let suma = 0;
while (i <= m) {
  suma = suma + i;
  i++;
}
document.body.innerHTML = `Suma brojeva od ${n} i ${m} je ${suma}`;*/
/*11. Zadatak 11
Odrediti sumu kvadrata brojeva od n do m.*/

/*n = 12;
m = 33;
i = n;
let sumaKvadrata = 0;
while(i <= m) {
  if (i % 2 == 0) {
    sumaKvadrata = sumaKvadrata + i * i;
  }
  i++;
} 
console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${sumaKvadrata} `);
//12. Zadatak 12
//Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.
let brojJedan = 5;
let brojDva = 10;
i = brojJedan;
proizvod = 1;
while(i <= brojDva) {
  if (i % 11 == 0) {
    proizvod = proizvod * i;
  }
  i++;
}
console.log(`proizvod brojeva od ${brojJedan} do broja ${brojDva} je ${proizvod}`);*/
//13.Zadatak
//Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.

let g = -5;
let l = 15;
i = g;
let br = 0;
let brPozitivni = 0;
for(i; i <= l; i++){
  if (i < 0)
   {
     br++;
  }
  else if (i > 0){
    brPozitivni++;
  }
}
  console.log(`Broj negativnih brojeva je ${br}`);
  console.log(`Broj pozitivnih brojeva je ${brPozitivni}`);

// 14.Zadatak
//Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.
let brojPet = 5;
let brojPedeset = 50;
let broj = 0;
for(i = brojPet; i <= brojPedeset; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    broj++;
  }
}
console.log(`U intervalu brojeva od 5 do 50 ima ${broj} brojeva koji su deljivi sa 3 ili sa 5`);

//15.Zadatak
//Odrediti proizvod brojeva od n do m koji su deljivi brojem a.
let d = 25;
let s = 50;
let o = 5;
proizvod = 1;
for(i = d; i <= s; i++) {
  if (i % 5 == 0) {
    proizvod = proizvod * i;
    
  }
}
console.log(`Proizvod brojeva od ${d} do ${s} koji je deljiv sa ${o} je ${proizvod} `);

/*16.Zadatak
Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.
Npr. za broj 15, delioci su 1, 3, 5 i 15, što znači da ima 2 delioca koji su deljivi brojem
3 i neparni su (to su brojevi 3 i 15)
Npr. za broj 6, delioci su 1, 2, 3, 6, što znači da ima 2 delioca koji su deljivi brojem 3
(3 i 6), ali samo jedan od njih je neparan (broj 3), te je rešenje ovog primera 1.*/

/*let unetiBroj = 9;
i = 1;
let zbir = 0;
let brojac = 0;
while(i <= unetiBroj) {
  if (i % 3 == 0 && i % 2 != 0 && unetiBroj % i == 0) {
    brojac++;
  } 
  i++;
}
zbir += i;


document.body.innerHTML += `<p>${brojac} Ovde ima ${number} cela broja koja su deljiva sa 3 i neparna su</p>`;*/
//16.Zadatak - Drugi nacin
let unetiBroj = 15;
i = 1;
let zbir = 0;
let brojac = 0;
for(i; i <= unetiBroj; i++) {
  if (i % 3 == 0 && i % 2 != 0 && unetiBroj % i == 0) {
      brojac++;
  }
}
zbir = zbir + i;
document.body.innerHTML += `<p> Ovde ima ${brojac} cela broja koja su deljiva sa 3 i neparna su.</p>`



//17.Zadatak 
//Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu.
/*let ceoBroj = 178;
let zamena = ceoBroj;
let suma2 = 0;
while (zamena) {
    suma2 += zamena % 10; //suma = suma + n%10;
    zamena = Math.floor(zamena / 10); // n je sad manji broj nego sto je bio, oduzme mu se zadnja cifra
}
document.body.innerHTML += `Zbir cifara u broju ${ceoBroj} iznosi ${suma2}`;
console.log(sumaKvadrata);*/


//18;
/*Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je
prikazano na slici.*/
let lista = `<ul>`;
for(i = 1; i <=10; i++) {
  if (i %3 == 0) {
    lista += `<li style="color:purple"> class="purple">
    <li>Element 3</li>
    <li>Element 6</li>
    <li>Element 9</li>`;
  }
  else {
    `<ul>
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 4</li>
    <li>Element 5</li>
    <li>Element 7</li>
    <li>Element 8</li>
    <li>Element 10</li>
    </ul>`  
  }
}
lista += `</ul>`;


 
/*19.Zadatak 19.
Kreirati 64 span elemenata i rasporediti ih kao na slici, tako da elementi izgledaju
kao polja šahovske table.
U realizaciji ovog zadatka koristiti for petlju.*/

let tabla = `<div class ="tabla">`; 
let p = 1;
  for(i = 1; i <= 8; i++){    
   if(i%2 == 1){               
    tabla += `<div class="belo"><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span></div>`
       }
       else if(i%2 == 0){ 
      tabla += `<div class="crno"><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span><span>${p++}</span></div>`   
      } 
}   
    tabla +=`</div>`;
    document.body.innerHTML += tabla;
    