let numOrStr = prompt('Input natural number');
let counter = 0;

switch (numOrStr) {
  case '':
    console.log('Empty string.');
    break;
  case null:
    console.log('Canceled.');
    break;
  default:
    if (isNaN(numOrStr)) {
      console.log('Not a Number!');
    } else {
      console.log('OK!')
    }
}

switch (true) {
  case isNaN(+numOrStr):
    console.log('Not a Number!');
    break;
  default:
    switch (numOrStr) {
      case null:
        console.log('Canceled.');
        break;
      case '':
        console.log('Empty string.');
        break;
      default:
        console.log('OK!');
    }
}


