// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i++), 1000);
// }

for (var i = 0; i < 5; i++) {
  (function(x){
    console.log(x++);
  })(i);
}

console.log(i);