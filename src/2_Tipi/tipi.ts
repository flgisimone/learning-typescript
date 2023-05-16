//TUPLE

    let tuplaPerson: [string, object] //-> Dichiarazione Tupla con all'interno i Type
    tuplaPerson = ["ADMIN", {
        subRole: ["Editor", "Autor"]
    }] //-> assegnazione valori elementi della tupla in base a dove si trovano posizionati i Type nella tupla

    
//ENUM

    enum RoleIndex { ADMIN_index , AUTHOR_index} //-> Dichiarazione costanti. In questo caso senza avergli assegnato un valore prende l'indice
    let role_index = RoleIndex.ADMIN_index

    console.log(role_index) //output -> 0

    enum Role { ADMIN = "ADMIN", AUTHOR = "AUTHOR"} //-> Dichiarazione costanti. In questo caso avendo assegnato un valore prende quest ultimo
    let role = Role.ADMIN

    console.log(role) //output -> "ADMIN"




