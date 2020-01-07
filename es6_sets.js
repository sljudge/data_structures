
// ADD
function checkSet() {
    var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);

    array = ['Taco', 'Cat', 'Awesome']
    array.forEach(el => set.add(el))

    console.log(Array.from(set));
    return set;
}
checkSet();


// DELETE
function checkSet() {
    var set = new Set([1, 2, 3, 4, 5])
    set.delete(2)
    set.delete(5)

    console.log(Array.from(set))

    return set;
}
checkSet()


// HAS / SIZE
function checkSet(arrToBeSet, checkValue) {

    let set = new set(arrToBeSet)
    return [set.has(checkValue), set.size]

}
checkSet([1, 2, 3], 2); // Should return [ true, 3 ]
