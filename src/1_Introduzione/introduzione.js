"use strict";
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const result = document.getElementById("result");
const button = document.querySelector("button");
function add(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", (e) => {
    e.preventDefault();
    let res = add(Number(input1.value), Number(input2.value));
    result.innerHTML = res.toString();
    console.log(res);
});
