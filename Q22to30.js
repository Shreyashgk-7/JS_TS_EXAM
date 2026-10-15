//Q21
const a = (numm, diss) => {
  return numm - diss;
};

console.log(a(3, 2));
//Q22

const b = (num, inc) => {
  return num + inc;
};

console.log(b(23, 45));

//Q23
const p1 = [2, 43, 53, 224, 3244];

const p2 = console.log(...p1);

function expensiveprod(p2) {
  return p1.filter((...p1) => {
    return p1 < 10;
  });
}

expensiveprod(p2);

//Q25

const arr = ["Raj", "shreyash", "leo"];
const [n1, n2, n3] = arr;
console.log(n1);

//Q26
function prodavail(avail) {
  return new Promise((resolve, reject) => {
    if (avail) {
      resolve("Product available");
    } else {
      reject("not available");
    }
  });
}
prodavail(false)
  .then((r) => {
    console.log(r);
  })
  .catch((error) => {
    console.log(error.message);
  });

//Q29

function deliverycharge(num, fee = 100) {
  return num + fee;
}

console.log(deliverycharge(100));

//q30

function totalamt(...num) {
  return num.reduce((total, num) => {
    return (total = num + total);
  });
}

console.log(totalamt(2, 3, 4, 2));
