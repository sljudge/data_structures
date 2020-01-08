let myMap = new Map

myMap.set('dog', 'Fido')
myMap.set('cat', 'Whiskers')
myMap.set('rat', 'Ratatouille')

console.log(myMap.has('rat'))
console.log(myMap.get('cat'))
console.log(myMap.delete('rat'))
console.log(myMap.entries())
console.log(myMap.values())