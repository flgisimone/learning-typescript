<h2>Capitolo 6 - Generici</h2>

<h3>Creare una funzione generica</h3>
<p>In TypeScript, una funzione generica è una funzione che può essere parametrizzata per lavorare con diversi tipi di dati in modo flessibile.</p>
<p>Per definire una funzione generica in TypeScript, è possibile utilizzare la sintassi <T> per indicare il tipo generico.</p>
<p>Una funzionalità delle funzioni generiche è il constraints, che permette di limitare i Tipi che possono essere utilizzati come argomenti generici. Consentono di specificare che il Tipo generico deve soddisfare determinate condizioni o implementare determinati membri o proprietà.</p>
<p>Per applicare un constraint a un tipo generico, si utilizza la parola chiave extends seguita dal tipo o dall'interfaccia che si desidera usare come vincolo.</p>
<p>
Esempio:

    //FUNZIONI GENERICHE
    interface Lunghezza {
        length: number;
    }

    function lengthValue<T extends Lunghezza>(valore: T){
    //-> All'interno delle <> andiamo a definire con "T" il Tipo generico e con "extends" 
         il constraints. All'argomento della funzione viene assegnato il Tipo generico 
         presente tra <> return valore.length;
    }

    let lengthWord = lengthValue("Hello everyone");
    let lengthArray = lengthValue([1, 2, 3])

    console.log("FUNZIONI GENERICHE \n", "Lunghezza parola:", lengthWord)
                //-> Tornerà come valore numerico: 14,  in quanto conterà la lunghezza 
                     della stringa
    console.log("FUNZIONI GENERICHE \n", "Lunghezza array:", lengthArray)
                //-> Tornerà come valore numerico: 3, in quanto conterà gli elementi 
                     presenti nell'array
</p>

<h3>Constraint “keyof”</h3>
<p>L'operatore <b>keyof</b> in TypeScript restituisce un'unione di Tipi che rappresenta tutte le chiavi (proprietà) di un tipo oggetto. </p>
<p>È particolarmente utile quando si desidera accedere dinamicamente alle proprietà di un oggetto o quando si vogliono limitare le operazioni solo alle chiavi valide di un tipo oggetto.</p>
<p>
Esempio:

    //KEYOF
    interface Persona {
        nome: string;
        cognome: string;
        età: number;
      };

      const persona: Persona = {
        nome: "Mario",
        cognome: "Rossi",
        età: 30,
      };

    function stampaProprietà<T, K extends keyof T>(oggetto: T, chiave: K){ 
    //-> L'oggetto prende il Tipo generico "T", mentre "K"
        console.log("KEYOF \n", oggetto[chiave])
        //-> Tornerà la chiave con il valore dell'oggetto, in questo caso di persona che 
             deve essere una delle chiavi valide di "T"
      }

      stampaProprietà(persona, "nome")

      console.log("OGGETTO KEYOF \n", persona) //-> Tornerà l'intero oggetto
</p>

<h3>Classi generiche</h3>
<p>In TypeScript, le classi generiche consentono di definire classi che possono essere parametrizzate con uno o più tipi. Ciò offre una maggiore flessibilità e riutilizzo del codice, consentendo di creare componenti o strutture dati che possono lavorare con diversi tipi di dati senza dover essere riscritte per ogni tipo specifico.</p>
<p>
Esempio:

      //CLASSI GENERICHE
      class UserPerson<T>{ 
      //-> Assegniamo un Tipo generico che potrà essere usato dalle 
           proprietà all'interno della classe
        private informations: T[] = [] 
        //-> Assegniamo alla proprietà una Array che può contenere 
             qualsiasi Tipo

        addInfo(info: T){ //-> Assegniamo all'argomento il Tipo generico
          this.informations.push(info)
        }

        printInfo(){
          return this.informations
        }
      }


      const infoList = new UserPerson<string | number>() 
      //-> Assegniamo all'oggetto della classe i Tipi da prendere per le proprietà, 
           in questo caso stringhe o numeri
      infoList.addInfo("Enrico")
      infoList.addInfo("Carducci")
      infoList.addInfo(46)


      console.log("OGGETTO CLASSE GENERICA \n", infoList)
      console.log("ARRAY CLASSE GENERICA \n", infoList.printInfo())

</p>