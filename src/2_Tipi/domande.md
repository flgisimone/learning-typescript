<h2>Domande sui Tipi</h2>
<span>Perché i Tipi sono utili e offrono un vantaggio rispetto a JavaScript Vanilla?</span>
<br>
<span>I tipi consentono di rilevare se vengono utilizzati o trasmessi dati di un Tipo errato, quindi è possibile evitare errori di runtime imprevisti.</span>

<br>

<span>Il codice seguente genererà un errore di compilazione?</span>
<br>
<span>

    let userName: string;
    userName = 'Maximilian';
    userName = false;
    
</span>
<span>L'assegnazione di un valore booleano a una variabile a cui è stato assegnato un Tipo "stringa" non è consentita e produrrà un errore di compilazione.</span>
<br><br>

<span>Questo codice si basa sull'inferenza del tipo?</span>
<span>

    const age: number = 29;

</span>

<span>JavaScript non ha una fase di compilazione ma in fase di esecuzione è possibile verificare determinati Tipi (ad esempio in if condizioni). TypeScript d'altra parte consente di rilevare determinati errori durante lo sviluppo poiché controlla anche i Tipi durante la compilazione.</span>
<br><br>

<span>Il codice seguente genererà un errore di compilazione?</span>
<span>

    type User = {name: string; age: number};
    const u1: User = ['Max', 29];

</span>

<span>Genera un errore di compilazione, in quanto il tipo "User" vuole un oggetto con una proprietà "nome" e una proprietà "età". Non un array.</span>
<br><br>

<span>Questo codice riuscirà a superare la compilazione?</span>
<span>

    type Product = {title: string; price: number;};
    const p1: Product = { title: 'A Book', price: 12.99, isListed: true }

</span>

<span>Non supererà la compilazione in quanto “isListed” non fa parte del Tipo “Product”.</span>
<br><br>

<span>Questo codice verrà compilato?</span>
<span>

    function sendRequest(data: string, cb: (response: any) => void) {
         // ... sending a request with "data"
         return cb({data: 'Hi there!'});
         }

         sendRequest('Send this!', (response) => {
             console.log(response);
             return true;
              });

</span>

<span>Il codice verrà compilato perché* le funzioni di callback possono restituire qualcosa, anche se l'argomento su cui vengono passate non si aspetta un valore restituito.</span>
<br><br>

<span>Qual è l'idea alla base di un "Tipo di funzione"?</span>

<span>I Tipi di funzione definiscono i parametri e il Tipo restituito di una funzione.</span>