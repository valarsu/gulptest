console.log("we can log stuff out.");
function add(a, b) {
    return a + b;
}
function reduce(a, b) {
    return a - b;
}
console.log("We can execute regular JS to:", add(4, 9));
console.log("We can execute regular JS to:", add(9, 4));
phantom.exit();