var inputs = process.argv.slice(2);
var result = inputs.map( item =>  item.charAt(0))
              .reduce( (letters, character) => letters + character)
console.log(result);
