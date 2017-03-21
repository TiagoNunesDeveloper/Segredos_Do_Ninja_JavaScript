/**
 * Implemetação do uso da definição de um palíndromo
 */


function isPalindrome(text) {
  if(!!text === false) {
    throw new Error('Defina um argumento válido!')
  }
  if (text.length <= 1)
    return true
  if (text.charAt(0) != text.charAt(text.length - 1))
    return false
  return isPalindrome(text.substr(1, text.length - 2))
}

console.log(isPalindrome('rotor'))