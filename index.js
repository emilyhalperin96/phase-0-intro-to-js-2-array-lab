// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats;
//is assigned an initial value of ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats
}
// ✓ appends a cat to the end of the cats array

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats
}
//  prepends a cat to the beginning of the cats array

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats
}
// removes the last cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats
}
// removes the first cat from the cats array
function appendCat(name){
    var name_1= [...cats,name];
    return name_1;
  }
  //  appends a cat to the cats array and returns a new array, leaving the cats array unchanged

  function prependCat(name){
    var name_2=[name, ...cats];
    return name_2
  }
  // prepends a cat to the cats array and returns a new array, leaving the cats array unchanged

  function removeLastCat(){
    var catsnew= cats.slice(0,cats.length-1);
    return catsnew;
  }
  // removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
  function removeFirstCat(){
    var catneww= cats.slice(1)
    return catneww
  }
  //removes the first cat from the cats array and returns a new array, leaving the cats array unchanged