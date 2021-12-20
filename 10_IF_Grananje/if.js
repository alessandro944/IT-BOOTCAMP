console .log("IF-naredba grananja");

if(true) {
  console.log("USlov je ispunjen");
}
console.log("Neki kod...");

//Operatori poredjenja://==, !=, <, >, <=, >=
let a = 5;
let b = 7;
if(a==b) {
  console.log("a i b su jednake vrednosti");
}

a = 18;
b = 15;
if(a != b); {
  console.log("a i b nisu jednake vrednosti");
}

if(a < b) {
  console.log("a je strogo manje od b")
  
}
if(a <= b) {
  console.log("a je manje ili jednako b");
}
//== proverava samo jednakos po vrednosti(nije bitan tip)
a = "5";
b = "5";
if(a == b) {
console.log("a i b su jednake vrednosti");
}
// === proverava jednokost i po tipu i po vrednosti(bitni su oboje)
if(a === b) {
  console.log("a i b su jednaki po vrednosti i po tipu")
}



// !== da li su dve promenljive razlicite bilo po tipu, bilo po vrednosti

a = 7;
b = 7;
if(a !== b) {
  console.log("a i b nisu jednaki bilo po tipu, bilo po vrednosti");
} /*da li su razliciti postavlja se pitanje*/

// != da li su razliciti samo po vrednosti
a = 7;
b = 8;
if(a != b);
console.log("Brojevi su jednaki")




/////////////////////////////////////

let x = 3;
let y = 4;
let z = 5;
if(x+y == z+2) {
  console.log("x+y je jednako sa z+2");
}