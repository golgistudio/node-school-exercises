const max = process.argv[2];

let FizzBuzz = {
  [Symbol.iterator]() {
		let cur = 0;
	  return {
		 	next() {
				cur++;
				let fizzBuzzValue = ""

			 	if (cur % 3 === 0) { fizzBuzzValue = 'Fizz' }
			 	if (cur % 5 === 0) { fizzBuzzValue  += 'Buzz' }
			 	if (fizzBuzzValue.length === 0) { fizzBuzzValue = cur }	
				
		  	if (cur <= max) {
			 		return {
						done: false,
						value: fizzBuzzValue
			 		}
				} else {
					return {
						done: true
					}
				}
			}
		}	
	}
}

for (var n of FizzBuzz) {
  console.log(n);
  // 1
  // 2
  // Fizz
  // 4
  // Buzz
  // Fizz
  // 7
  // 8
  // Fizz
  // Buzz
  // 11
  // Fizz
  // 13
  // 14
  // FizzBuzz
  // 16
  // 17
  // Fizz
  // 19
  // Buzz
  // Fizz
  // 22
  // 23
  // Fizz
  // Buzz
	// 26
  // Fizz
  // 28
  // 29
  // FizzBuzz
  // ...
}
