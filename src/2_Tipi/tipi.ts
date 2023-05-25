//TUPLE
    let tuplaPerson: [string, object] //-> Dichiarazione Tupla con all'interno i Type
    tuplaPerson = ["ADMIN", {
        subRole: ["Editor", "Autor"]
    }] //-> assegnazione valori elementi della tupla in base a dove si trovano posizionati i Type nella tupla

    
//ENUM
    enum RoleIndex { ADMIN_index , AUTHOR_index} //-> Dichiarazione costanti. In questo caso senza avergli assegnato un valore prende l'indice
    let role_index = RoleIndex.ADMIN_index

    console.log("ENUM SOLO INDICE \n", "Indice ruolo:", role_index) //output -> 0

    enum Role { ADMIN = "ADMIN", AUTHOR = "AUTHOR"} //-> Dichiarazione costanti. In questo caso avendo assegnato un valore prende quest ultimo
    let role = Role.ADMIN

    console.log("ENUM PROPRIETA' ASSEGNATA \n", role) //output -> "ADMIN"

//UNION TYPES
    function combineFunc(
        input1: number | string, 
        input2: number | string)
        {
            let result
        
            if(typeof input1 === "number" 
            && typeof input2 === "number") 
            result = input1 + input2
        
            if(typeof input1 === "string" 
            && typeof input2 === "string")
            result = input1 + input2

            return result
    }

    const combinedAges = combineFunc(1, 1)
    const combinedNames = combineFunc("Mario ", "Rossi")

    console.log("UNITON TYPES \n", "combinedAges:", combinedAges) //-> 2
    console.log("UNION TYPES \n", "combinedNames:", combinedNames) // -> Mario Rossi

//TYPE ALIASES
    type Combinable = number | string

    function combineInp(inp1: Combinable){
        let resultCombinable
        if(typeof inp1 === "number") return resultCombinable = inp1
        if(typeof inp1 === "string") return resultCombinable = inp1
        
        return resultCombinable
    }

    const combineNum = combineInp(10)
    const combineString = combineInp("Paolo Rossi")

    console.log("TYPE ALIASES \n", "combineNum: ", combineNum)
    console.log("TYPE ALIASES \n", "combineString: ", combineString)

//TYPE ALIASES & OBJECT TYPES
    type User = { name: string; age: number }
    const user: User = { name: "Simone", age: 26 }

    function greet(userInfo: User) {
        console.log("TYPE ALIASES & OBJECT TYPES \n", "Ciao " + userInfo.name) //-> Ciao, sono Simone
    }

    greet(user)

//FUNCTIONS AS TYPES
    let compareNums: (num1: number, num2: number) => boolean

    compareNums = (num1: number, num2: number) => {
       return num1 > num2
    }

    const resultCompare = compareNums(5, 4)
    console.log("FUNCTIONS AS TYPES \n", resultCompare) //-> true

//FUNCTION TYPES & CALLBACKS
    function stringLength(
        word1: string, 
        word2: string, 
        lengthFunc: (word: string) => void){

        let wordLength = word1.length > word2.length ? word1 : word2

        lengthFunc(wordLength)
    }

    stringLength("ciao", "hello", (wordLength) => {
        console.log("FUNCTION TYPES & CALLBACKS \n", wordLength) //-> hello
    })


