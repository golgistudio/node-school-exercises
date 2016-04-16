const max = process.argv[2];

let FizzBuzz = function*() {
	let cur = 0;
	while (cur < max) {
		cur++
		let fizzBuzzValue = ""

		if (cur % 3 === 0) { 
			fizzBuzzValue = 'Fizz' 
		}
		if (cur % 5 === 0) { 
			fizzBuzzValue  += 'Buzz' 
		}
		if (fizzBuzzValue.length === 0) { 
			fizzBuzzValue = cur 
		}	
			
		yield fizzBuzzValue
	}	
}()

for (var n of FizzBuzz) {
  console.log(n);
}
