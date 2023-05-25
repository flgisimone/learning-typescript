"use strict";
//TUPLE
let tuplaPerson; //-> Dichiarazione Tupla con all'interno i Type
tuplaPerson = ["ADMIN", {
        subRole: ["Editor", "Autor"]
    }]; //-> assegnazione valori elementi della tupla in base a dove si trovano posizionati i Type nella tupla
//ENUM
var RoleIndex;
(function (RoleIndex) {
    RoleIndex[RoleIndex["ADMIN_index"] = 0] = "ADMIN_index";
    RoleIndex[RoleIndex["AUTHOR_index"] = 1] = "AUTHOR_index";
})(RoleIndex || (RoleIndex = {})); //-> Dichiarazione costanti. In questo caso senza avergli assegnato un valore prende l'indice
let role_index = RoleIndex.ADMIN_index;
console.log("Indice ruolo:", role_index); //output -> 0
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {})); //-> Dichiarazione costanti. In questo caso avendo assegnato un valore prende quest ultimo
let role = Role.ADMIN;
console.log(role); //output -> "ADMIN"
//UNION TYPES
function combineFunc(input1, input2) {
    let result;
    if (typeof input1 === "number"
        && typeof input2 === "number")
        result = input1 + input2;
    if (typeof input1 === "string"
        && typeof input2 === "string")
        result = input1 + input2;
    return result;
}
const combinedAges = combineFunc(1, 1);
const combinedNames = combineFunc("Mario ", "Rossi");
console.log("combinedAges:", combinedAges); //-> 2
console.log("combinedNames:", combinedNames); // -> Mario Rossi
function combineInp(inp1) {
    let result;
    if (typeof inp1 === "number")
        return result = inp1;
    if (typeof inp1 === "string")
        return result = inp1;
}
combineInp(10);
combineInp("Mario Rossi");
const user = { name: "Simone", age: 26 };
function greet(userInfo) {
    console.log("Ciao " + userInfo.name); //-> Ciao, sono Simone
}
greet(user);
//FUNCTIONS AS TYPES
let compareNums;
compareNums = (num1, num2) => {
    return num1 > num2;
};
const resultCompare = compareNums(5, 4);
console.log(resultCompare); //-> true
//FUNCTION TYPES & CALLBACKS
function stringLength(word1, word2, lengthFunc) {
    let wordLength = word1.length > word2.length ? word1 : word2;
    lengthFunc(wordLength);
}
stringLength("ciao", "hello", (wordLength) => {
    console.log(wordLength); //-> hello
});
