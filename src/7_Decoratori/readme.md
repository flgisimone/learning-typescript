<h2>Capitolo 7 - Decoratori</h2>

<h3>Decoratore Classe</h3>
<p><b>I Decoratori sono funzioni che si applicano a qualcosa</b>e in generale riguardano le classi.</p>
<p>Per poter utilizzare i Decoratori bisogna avere all’interno del tsconfig.json, nel “compilerOptions”, come target “es6” e aggiungere la riga:<p>
<p>

    "experimentalDecorators": true,

</p>

<p>Per aggiungere - una volta creata la funzione - un Decoratore ad una classe si utilizza l’identificatore <b>“@”</b> con il suo nome prima della classe stessa.</p>
<p>Quando si crea una funzione che ha il compito di essere un Decoratore, al suo interno deve avere un argomento.</p>
<p><b>N.B. I Decoratori vengono eseguiti quando la Classe è definita, senza aver necessariamente proprietà istanziate al suo interno. Ciò implica di essere eseguito prima di ciò che è presente eventualmente nella Classe.</b></p>
<p>
Esempio:

    //DECORATORI
    console.log("---------------------- \n", "DECORATORI")
    function Logger(constructor: Function){ 
    //-> Utilizziamo come argomento la funzione construttore della classe User_Person
        console.log("Logging...")
        console.log("ARGOMENTO DECORATORE \n", constructor) 
        //-> Chiamiamo necessariamenteo l'argomento
    }

    @Logger 
    //-> Aggiungiamo il Decoratore tramite l'identificatore "@" seguito dal nome della funzione
    class User_Person {
        firstName = "Fabio"

        constructor(protected lastName: string){
            console.log("Creating person object...")
        }
    }

    const pers = new User_Person("Rizzo")

    console.log(pers)
</p>

<h3>Factory di Decoratori</h3>
<p><b>Una Factory di Decoratori restituisce fondamentalmente una funzione di Decoratore </b>ma ci consente di configurarla quando la assegnamo come Decoratore a qualcosa, esempio una Classe, <b>dando la possibilità di utilizzare più argomenti invece che solo uno</b>.</p>
<p>Per convertire una funzione come Decoratore in una Factory, bisogna prendere l’argomento presente dentro la funzione e ritornarlo dentro la funzione stessa, istanziando ciò di cui si ha bisogno dentro la funzione ritornata.</p>
<p>A questo punto è possibile passare dentro la funzione del Decoratore qualsivoglia argomento, da chiamare quando viene aggiunto il Decoratore ad una classe.</p>
<p>
Esempio:

    //FACTORY DI DECORATORI
    console.log("---------------------- \n", "FACTORY DI DECORATORI")
    function LoggerUser(firstAccess: string, lastAccess: string){ 
    //-> Multipli argomenti che si vogliono chiamare nel Decoratore
        return function(constructor: Function){ //-> Ritorniam
            console.log("ARGOMENTO DEL DECORATORE DA CHIAMARE \n", 
                        "First Access: " + firstAccess)
            console.log("ARGOMENTO DEL DECORATORE DA CHIAMARE \n", 
                        "Last Access: " + lastAccess)
            console.log("ARGOMENTO DELLA FUNZIONE RITORNATA \n", 
                        constructor)
        }
    }

    @LoggerUser(Date(), Date()) 
    //-> Parametri chiamati per gli argomenti passati all'interno della 
         funzione del Decoratore
    class Logge_User {
        firstName = "Jacopo"

        constructor(protected lastName: string){
            console.log("Creating person object...")
        }
    }

    const logUser = new Logge_User("Lazzarini")

    console.log(logUser)
</p>

<h3>Decoratori utili (manipolazione del DOM)</h3>
<h4><b>index.html</b></h4>
<p>
Esempio:

    <div id="app">
      <div id="userId">
      </div>
    </div>
</p>

<h4><b>decoratori.ts</b></h4>
<p>
Esempio:

    //DECORATORI UTILI (MANIPOLAZIONE DEL DOM CON LE CLASSI)
    function ManipulateDOM(title_h1: string, userId: string){ 
    //-> userId rappresenta l'id del tag HTML
        return function(constructor: any){
            const hookDiv = document.getElementById(userId)
            const infoUser = new constructor() 
            //-> Inizializziamo una costante, ovvero un oggetto, con il 
                 costruttore della classe da cui si prenderanno 
                 firstName e lastName


            if(hookDiv){
                hookDiv.innerHTML = title_h1

                const span_FirstName = document.createElement("p")
                span_FirstName.className = "firstName"
                span_FirstName.textContent = infoUser.firstName

                const spanLastName = document.createElement("p")
                spanLastName.className = "lastName"
                spanLastName.textContent = infoUser.lastName

                hookDiv.append(span_FirstName, spanLastName)
            }
        }
    }


    @ManipulateDOM("<h1>User</h1>", "userId") 
    //-> Applichiamo il Decoratore alla classe e chiamiamo i parametri 
         da passare negli argomenti title_h1 e userId del Decoratore
    class Object_User{
        firstName = "Alessandro"
        lastName = "Vanetti"
        constructor(){}
    }
</p>
<p>Viene definita una funzione da utilizzare come Decoratore che prende due argomenti: “title_h1” e “userId”. Questa funzione restituisce un'altra funzione che prende un costruttore come parametro.</p>
<p>All'interno della funzione restituita, viene effettuata la manipolazione del DOM. Viene ottenuto l'elemento con l'<b>ID specificato da userId utilizzando document.getElementById()</b>. Successivamente, viene istanziata una nuova istanza del costruttore passato come parametro.</p>
<p>Se l'elemento con l'ID userId esiste nel DOM, vengono eseguite le seguenti operazioni.</p>
<p>Infine, viene applicato il Decoratore <b>@ManipulateDOM("<h_1>User</h_1>", "userId")</b> alla classe <b>Object_User</b>.</p>
<p>Questo decoratore applica la manipolazione del DOM descritta sopra all'elemento con l'<b>ID "userId" usando come titolo <h_1>User</h_1></b>. La classe <b>Object_User</b> definisce due proprietà firstName e lastName con i valori "Alessandro" e "Vanetti" rispettivamente.</p>

<h3>Aggiungere Decoratori Multipli</h3>
<p>È possibile aggiungere più Decoratori ad una Classe o in qualsiasi punto si possa usare un Decoratore. </p>
<p><b>N.B. L’esecuzione di più Decoratori avviene dal basso verso l’alto.</b</p>