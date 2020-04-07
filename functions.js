// pure function:
// both its arguments are explicitly
// listed (x,y)
// and it uses the return keyword
// to explicitly return a value
function sum(x,y) {
  return x + y;
}

// this is also a pure function
function greet(name) {
  return "Hello, " + name + "!";
}

// this is an impure function; it
// has an explicit argument (name),
// but it does not return a value;
// instead it produces a side-effect:
// logging something to the console
function impure_greet(name) {
  console.log("Hello", name, "!");
}
