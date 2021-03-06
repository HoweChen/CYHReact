// 0.5秒后返回input*input的计算结果:
function multiply(input) {
  return new Promise(function(resolve, reject) {
    console.log("calculating " + input + " x " + input + "...");
    setTimeout(resolve, 500, input * input);
  });
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
  return new Promise(function(resolve, reject) {
    console.log("calculating " + input + " + " + input + "...");
    setTimeout(resolve, 500, input + input);
  });
}

var p = new Promise(function(resolve, reject) {
  console.log("start new Promise...");
  resolve(123);
});

p
  .then(multiply)
  .then(add)
  .then(multiply)
  .then(add)
  .then(function(result) {
    console.log("Got value: " + result);
  });
