let userArray = [4, 14, 12, 27, 'hello', 'lorem', 'ford', 'zxc', 'bye', 'welcome'];
console.log(userArray);

function compare(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  }
userArray.sort(compare);
console.log(userArray);

userArray.splice(2, 3);
console.log(userArray);