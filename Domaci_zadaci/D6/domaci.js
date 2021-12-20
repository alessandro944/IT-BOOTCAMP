//Domaci zadatak 1
let n = 1
let m = 10
let proizvod;

i = n;
proizvod = 1;



while (n <= m) {
  if(n % 7 === 0 && n % 3 !== 0)  {
    proizvod = proizvod * i;
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
}