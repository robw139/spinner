let str = "\r|  \r/  \r-  \r\\  \r|  \r/  \r-  \r\\  \r|  "
for (let i = 0; i<2;i++){
  let count = 100;
  let d = str.split(" ");
  for (let char of d){
    setTimeout(() => {
      process.stdout.write(char);
    }, count += 200);
  }
}
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);
// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);

// // ... fill in the rest yourself ...