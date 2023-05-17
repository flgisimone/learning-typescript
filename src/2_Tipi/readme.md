<h1>Capitolo 2 - Basi di TypeScript e Tipi base</h1>
<h2>Utilizzare i Tipi</h2> 

<p>I Tipi fondamentali che JavaScript conosce e che TypeScript supporta sono:

<li>number - tutte le tipologie dei numeri</li>
<li>string - tutti i valori testuali</li>
<li>boolean</li></p>

<b>N.B. I Tipi fondamentali string e number sono tutti in minuscolo</b>
<br>
<h2>Tipi in JavaScript e Tipi in TypeScript</h2>
<p>La differenza di Tipo tra Javascript e TypeScript è che nel primo caso la tipizzazione avviene dinamicamente, ciò significa che una variabile potrebbe cambiare Tipo dopo la prima assegnazione. <b>In TypeScript</b> la tipizzazione avviene staticamente, il che significa che <b>definiamo i tipi di variabili e parametri durante lo sviluppo</b>, senza che essi cambino. </p>
<p>Inoltre, TypeScript conosce molti più Tipi di JavaScript.</p>

<p>Tra i Tipi complessi abbiamo: array, object, tuple e enum.</p>

<h2>Tipo Tupla</h2>
<p>Le Tuple è un Tipo che permette di definire un array con un numero di elementi fissi di elementi di diversi Tipo: string, number, array, object, ecc.</p>

<p>I valori all’interno dell’array devono rispettare il Tipo all’interno della tupla, in ordine di assegnazione.</p>

<p>Esempio:

    let tuplaPerson: [string, object] //-> Dichiarazione Tupla
    tuplaPerson = ["ADMIN", {
        subRole: ["Editor", "Author"]
    }] //-> assegnazione valori elementi della tupla
</p>

<p>In questo caso nella dichiarazione della tupla sono presenti in ordine string e object. Conseguentemente quando andiamo a definire l’array, questo avrà in ordine la stringa “ADMIN” e l’oggetto subRole.</p>

<h2>Tipo Enum</h2>
<p>Enum è un Tipo che consente di definire un insieme di costanti con nomi significativi. 
Può assumere solo determinati valori predefiniti, noti come membri, che non possono cambiare dinamicamente.
</p>
<p>I membri all’interno di un Enum senza un valore assegnato prendono l’indice in cui si trovano in ordine crescente, altrimenti è possibile assegnare un valore a patto che questo sia dato a tutti i membri</p>

<p>Esempio:

    enum RoleIndex { ADMIN_index , AUTHOR_index}
    let role_index = RoleIndex.ADMIN_index

    console.log(role_index) //output -> 0

    enum Role { ADMIN = "ADMIN", AUTHOR = "AUTHOR"}
    let role = Role.ADMIN

    console.log(role) //output -> "ADMIN"
</p>

<h2>Union Types</h2>
<p>L’Union Types è una combinazione tra più Tipi di parametri all’interno di una funzione così da poter ottenere più scenari.</p>
<p>Per fare ciò è necessario utilizzare come separatore una pipe (|) tra un Tipo e l’altro da assegnare ad un parametro, così da far capire a TypeScript che va bene qualsiasi Tipo assegnato.</p>
<p>Tuttavia TypeScript vede solo la presenza di un'unione e non analizza cosa c’è in essa, pertanto nel caso in cui i parametri vengano utilizzati ad esempio in un operazione, utilizzando degli operatori, darà errore.</p>
<p>Per evitare questo problema è possibile aggiungere un controllo runtime sul Tipo di parametri.</p>

<p>Esempio:

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

    console.log("combinedAges:", combinedAges) //-> 2
    console.log("combinedNames:", combinedNames) // -> Mario Rossi
</p>

<h2>Type Aliases</h2>
<p>Quando si lavora con gli Union Types può essere complicato e ridondante ripetere sempre lo stesso tipo di unione, pertanto si può utilizzare Type Aliases.</p>

<p>Esempio:

    type Combinable = number | string

    function combineInp(inp1: Combinable){
        let result
        if(typeof inp1 === "number") return result = inp1
        if(typeof inp1 === "string") return result = inp1
    }

    combineInp(10)
    combineInp("Mario Rossi")
</p>

<p>Si dichiara la parola chiave <b>Type</b>, supportata solo da TypeScript, <b>seguita da</b> un nome identificativo, cioè l’<b>alias</b>. Dopodiché <b>aggiungiamo il simbolo uguale (=) seguito dai Tipi</b> delle variabili da utilizzare <b>separati dalla pipe (|)</b>.</p>

<h2>Type Aliases & Object Types</h2>
<p>I Type Aliases possono essere usati anche per fornire un alias a un Tipo di oggetto (possibilmente complesso).</p>

<p>Esempio:

    type User = { name: string; age: number }
    const u1: User = { name: "Simone", age: 26 }

    function greet(userInfo: User) {
        console.log("Ciao " + userInfo.name) //-> Ciao, sono Simone
    }

    greet(u1)
</p>

<h2>Funzioni come Tipi</h2>
<p>Per utilizzare una funzione come Tipo, è possibile farlo attraverso un arrow function.</p>

<p>Esempio: 

    let compareNums: (num1: number, num2: number) => boolean

    compareNums= (num1: number, num2: number) => {
       return num1 > num2
    }

    const resultCompare = compareNums(5, 4)
    console.log(resultCompare) //-> true
</p>

<p>In questo caso andiamo a dichiarare una variabile (functionTypes) che accetta due parametri, entrambi con Tipo number e restituisce un valore booleano.</p>
<p>Successivamente è stato assegnato a functionTypes un arrow function che al suo interno ritorna il confronto tra i valori assegnati da parametro, entrambi number.</p>
<p>Fatto ciò andiamo ad analizzare una costante (resultCompare) uguale alla chiamata di funzione (functionTypes) con all’interno i valori da assegnare come argomenti, che ritornerà come risultato finale true o false.</p>

<h2>Tipi di funzione & Callbacks</h2>
<p>Per utilizzare una callback tra i parametri di una funzione è necessario utilizzare le funzioni come Tipi.</p>

<p>Esempio:

    function stringLength(
        word1: string,
        word2: string,
        lengthFunc: (word: string) => void){

        let wordLength = word1.length > word2.length ? word1 : word2

        lengthFunc(wordLength)
    }

    stringLength("ciao", "hello", (wordLength) => {
        console.log(wordLength) //-> hello
    })
</p>

<p>All’interno della funzione andiamo a definire i parametri, tra questi una funzione come Tipo, che avrà al suo interno un parametro, in questo caso di tipo stringa, e ritornerà void, ovvero l’assenza di un valore.</p>

<p>Dopo aver implementato ciò che deve fare la funzione, bisogna chiamare la funzione come parametro con all’interno l’eventuale variabile a cui è stata assegnata l’operazione da svolgere, in questo caso <b>lengthFunc è la funzione come parametro e wordLength la variabile assegnata ad essa</b>.</p>

<p>Una volta fatto ciò, bisognerà chiamare la funzione (stringLength) con gli argomenti da passare all’interno dei parametri. In particolare, <b>per la funzione come Tipo verrà assegnata un arrow function con la variabile utilizzata e chiamata all’interno della funzione come Tipo stessa</b>.</p>