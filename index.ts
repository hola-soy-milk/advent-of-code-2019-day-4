class Password {
  value: number

  constructor(value: number) {
    this.value = value
  }

  isValid(constrained: boolean) {
    let numbers = this.value.toString().split('').map(Number)
    var increasing = true
    var includes2adjacentTwins = false
    for (var i = 1; i < numbers.length; i++) {
      let isMoreThanTwo = (i >= 2 && numbers[i-2] === numbers[i]) || (i < 5 && numbers[i+1] === numbers[i]) && constrained
      if (numbers[i-1] === numbers[i] && !isMoreThanTwo) {
        includes2adjacentTwins = true
      } else if (numbers[i-1] > numbers[i]) {
        increasing = false
      }
    }
    return includes2adjacentTwins && increasing
  }

}

let validPasswordsInRange = (lower: number, upper: number, constrained: boolean) => {
  var passwords = []
  for (var i = lower; i <= upper; i++) {
    let password = new Password(i)
    if (password.isValid(constrained)) {
      passwords.push(password)
    }
  }
  return passwords
}

console.log(`Number of valid passwords: ${validPasswordsInRange(193651, 649729, false).length}`)
console.log(`Number of valid constrained passwords: ${validPasswordsInRange(193651, 649729, true).length}`)
