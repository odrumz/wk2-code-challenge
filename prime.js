function Prime(number) {
    // 2 is the 1st prime number so anything below that is not a prime number
  if (number < 2) {
    return false;
  }
//   2 being our first index (just like 0) and our loop will be relating between 2 and the number provided
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {   // if any of the numbers divide the given even number(2) then they are not prime numbers
      return false;
    }
  }
//   If there is nodivisor ,return true which is === prime number.
  return true;  
}
// filterPrimeNumber takes in an array of numbers and filters out the prime numbers using the Prime function above. 
function filterPrimeNumber(array) {
  return array.filter((number) => Prime(number));   // It will return a new set of array containing only prime numbers.
}

questionArray = [20,21,22,23,24,25,26,27,28,29,30,100,101,102,103,104,105,106,107,108,109,110,110];
const primeNumbers = filterPrimeNumber(questionArray);
console.log(primeNumbers);