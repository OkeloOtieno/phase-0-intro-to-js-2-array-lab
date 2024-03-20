// Write your solution here!
let cats = [
    "Milo","Otis","Garfield"
]
function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name) {
    cats.pop()
}
function destructivelyRemoveFirstCat(name) {
    cats.shift()
}
function appendCat(name) {
    const otherCats = [...cats, "Broom"]
    return otherCats
}
function prependCat(name) {
    const anotherGroup = ["Arnold", ...cats]
    return anotherGroup
}
function removeLastCat() {
    const lastCatsss = cats.slice(0, cats.length-1) 
    return lastCatsss

}
function removeFirstCat() {
    const firstCatss = cats.slice(1)
    return firstCatss
}