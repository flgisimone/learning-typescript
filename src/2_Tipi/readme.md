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


