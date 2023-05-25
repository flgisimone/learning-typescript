<h1>Capitolo 4 - Classi e interfacce</h1>
<h2>Cosa sono le classi</h2>
<p>Le classi ci permettono di definire la struttura e il comportamento degli oggetti.</p>
<p>Possiamo pensare alle classi come modelli o tipi di oggetti che descrivono quali dati devono contenere e quali azioni possono compiere.</p>
<p>Un oggetto è un'istanza di una classe. Significa che possiamo creare facilmente più oggetti simili basati sulla stessa classe, con la stessa struttura e le stesse azioni.</p>
<p>Quando si ottengono degli oggetti e si esegue l’approccio orientato agli oggetti, si può pensare di suddividere un’applicazione o la logica applicativa in tali oggetti. </p>
<p>L’idea alla base della programmazione ad oggetti è quella di lavorare con entità reali nel codice, il più possibile a oggetti reali.</p>
<p>Ad esempio, la costruzione di un negozio online potrebbe essere basato su:</p>
<p> Esempio
<h4><b>Oggetto ProductList</b></h4>
<p>Un oggetto che che ha tutto ciò che serve per gestire un elenco di prodotti e la sua logica, responsabile del suo rendering attraverso il recupero da un servizio o da un database.</p>
<h4><b>Oggetto Product</b></h4>
<p>Potrebbe essere necessario per i singoli prodotti della lista avere un oggetto, che sia responsabile della gestione del singolo prodotto, come mostrare i dettagli del prodotto o la possibilità di aggiungere al carrello.</p>
<h4><b>Oggetto ShoppingCart</b></h4>
<p>Potrebbe essere presente un oggetto dedicato al carrello, con il compito di eseguire la logica e il rendering della lista dei prodotti da acquistare e conseguentemente effettuare ordini e comunicare con il server. </p>

<h2>Creare una classe</h2>
<p>Per creare una classe in TypeScript, si utilizza la parola chiave "class" seguita dal nome della classe con la prima lettera in maiuscolo. All'interno della classe vanno definiti i campi che definiscono la classe, specificando il tipo di dato di ciascun campo.</p>
<p>Oltre ai campi, una classe può contenere una funzione speciale chiamata "constructor". Il costruttore è una funzione che viene eseguita quando si crea un nuovo oggetto basato sulla classe. Per dichiarare il costruttore, si utilizza la sintassi "constructor() {}", dove all'interno delle parentesi tonde possono essere specificati degli argomenti che verranno passati al momento della creazione dell'oggetto.</p>
<p>All'interno del costruttore, per memorizzare i valori degli argomenti nei campi della classe, si utilizza la parola chiave "this" seguita dal nome del campo e l'operatore di assegnazione "=", seguito dal valore dell'argomento corrispondente.</p>
<p>Per creare un oggetto basato sulla classe, si utilizza la parola chiave "new" seguita dal nome della classe e le parentesi tonde (). All'interno delle parentesi tonde, si passano i valori degli argomenti del costruttore, se presenti.</p>
<p>
Esempio:

    class Department {
        name: string;
        employeesNum: number;

        constructor(nameDep: string, numEmployees: number) {
            this.name = nameDep;
            this.employeesNum = numEmployees;
        }
    }

    const accountingDepartment = new Department("Accounting", 10 console.log(accountingDepartment))
</p>

<h2>Funzioni Constructor & Keyword “this”</h2>
<p>Oltre al Constructor, all’interno della classe è possibile aggiungere altre funzioni o metodi che vengono chiamati e che possono essere richiamati sull’oggetto creato.</p>
<p>Uno di questi metodi è il describe(){}.</p>
<p>Con questo metodo si possono andare ad aggiungere informazioni in più.
Una volta aggiunte le istruzioni al suo interno, utilizzando i campi attraverso il this, è necessario richiamarlo all'esterno della classe, utilizzando il nome della costante dichiarata per la creazione dell'oggetto seguito dal metodo.</p>
<p>
Esempio:

    class Department {
        name: string;
        employeesNum: number;

        //CONSTRUCTOR
        constructor(nameDep: string, numEmployees: number) {
            this.name = nameDep;
            this.employees = numEmployees;
        }

        //DESCRIBE
        describe(){
            console.log("Department: " + this.name + " with " +
            this.employeesNum + " employees")
        }
    }

    const accountingDepartment = new Department("Accounting", 10)
    accountingDepartment.describe()// -> Metodo richiamato

    console.log(accountingDepartment)
</p>

<h2>Modificatori di accesso “Private” e “Public”</h2>
<p>Quando si costruiscono le classi, al suo interno i campi possono essere di tipo pubblico o privato. Ciò vuol dire che possono essere accessibili solo dall'interno o anche dall'esterno.</p>
<p>Nel caso in cui un campo sia privato non è possibile chiamare i metodi all’esterno della classe.</p>
<p>Spesso le classi sono molto complesse e quindi possono richiedere più metodi.</p>
<p>
Esempio:

    class Department {
        name: string;
        employeesNum: number;
        private employees: string[] = []

        //CONSTRUCTOR
        constructor(nameDep: string, numEmployees: number) {
            this.name = nameDep;
            this.employeesNum = numEmployees;
        }

        //DESCRIBE
        describe(){
            console.log("Department: " + this.name + " with " +
            this.employeesNum + " employees")
        }

        //AGGIUNGERE IMPIEGATI IN EMPLOYEES
        addEmployee(employee: string){
            this.employees.push(employee)
        }

        //STAMPARE INFORMAZIONI IMPIEGATI
        infoEmployee(){
            console.log(this.employees)//-> Mario, Paolo
        }
    }

    const accountingDepartment = new Department("Accounting", 10)
    accountingDepartment.describe()
    // -> Metodo richiamato
    accountingDepartment.addEmployee("Mario")
    // -> Metodo richiamato con argomento
    accountingDepartment.addEmployee("Paolo")
    // -> Metodo richiamato con argomento
    accountingDepartment.infoEmployee()// -> Metodo richiamato

    console.log(accountingDepartment)
</p>

<h2>Shorthand Inizializzazione</h2>
<p>Per evitare di fare una doppia inizializzazione dei campi - sia all’interno della classe che tra i parametri del constructor - si può eliminare la definizione dei campi nella classe, andando ad inserire tra i parametri il modificatore di accesso e il campo con il suo Tipo.</p>
<p>Esempio:

    class Department {
        name: string;
        employeesNum: number;
        private employees: string[] = []

        //CONSTRUCTOR
        constructor(private idDep: number, 
            nameDep: string, numEmployees: number) {
            this.name = nameDep;
            this.employeesNum = numEmployees;
        }

        //DESCRIBE
        describe(){
            console.log(
                "Department: " + this.name + "\n" +
                this.employeesNum + " employees \n"  +
                `ID: ${this.idDep}\n`//-> Campo nel costruttore
            )
        }
    }

    const accountingDepartment = 
    new Department(Math.floor(Math.random() * 100), "Accounting", 10)

    console.log(accountingDepartment)
</p>

<h2>Proprietà “readonly”</h2>
<p>La parola chiave readonly, come private e public, è presente solo TypeScript e si assicura che se si tenta di scrivere sulla sua proprietà in seguito, ciò non avviene. Quindi, rende quella proprietà inizializzabile solo la prima volta.</p>

<h2>Modificatore "protected"</h2>
<p>Il modificatore “protected” ha la stessa funzione del modificatore “private” con la differenza che rende visibili le proprietà alle sottoclassi di appartenenza.</p>
<p>
Esempio: 

     constructor(private readonly idDep: number, 
         nameDep: string, numEmployees: number) {
         this.name = nameDep;
         this.employeesNum = numEmployees;
     }
</p>

<h2>Inheritance</h2>
<p>Attraverso l’inheritance è possibile creare delle classi che utilizzano delle proprietà da un’altra classe. Per fare ciò è necessario utilizzare l’espressione <b>extends</b>, utilizzando la nomenclatura: <b>class [nome classe] extends [classe da cui ereditare le proprietà]{}</b>.</p>
<p>Una volta dentro la classe, all’interno del costruttore si inseriscono le proprietà che si vogliono utilizzare per questa classe, mentre per utilizzare le proprietà ereditate bisogna utilizzare l’espressione <b>super()</b>, con all’interno le proprietà a cui attribuire un valore.</p>
<p><b>N.B. Nell’esempio di seguito non viene utilizzato il this in quanto all’interno della classe non sono stati impostati i campi. Ciò perché vengono definite direttamente dentro al costruttore mediante l’utilizzo dei modificatori di accesso (public o private).</b></p>
<p>Esempio:

    class Department {
        //CONSTRUCTOR
        constructor(
        public nameDep: string, public readonly idDep: number, 
        public numEmployees: number, public employees: string[]) {}
    }

    //INHERITANCE
    class ITDepartment extends Department{
        constructor(public admins: string[]){
            super("IT", 2, 4, ["Tino"])
        }

        //DESCRIBE
        describe(){
            console.log("DESCRIBE INHERITANCE CLASSE DERIVATA \n" +
                `Department: ${this.nameDep} \n` +
                `Employees Num.: ${this.numEmployees} \n` +
                `ID: ${this.idDep} \n`
            )
        }

        //AGGIUNGERE IMPIEGATI IN EMPLOYEES
        addEmployee(employee: string){
            this.employees.push(employee)
        }    
    }

    const department = new Department("", 0, 0, [])

    const itDepartment = new ITDepartment(["Elisa"])
    itDepartment.describe()// -> Metodo richiamato
    itDepartment.addEmployee("Franco")
    // -> Metodo richiamato con argomento
    itDepartment.addEmployee("Orazio")
    // -> Metodo richiamato con argomento

    console.log("CLASSE BASE", department)
    console.log("CLASSE DERIVATA", itDepartment)
</p>

<h2>Getters & Setters</h2>
<p>Un getter è una proprietà in cui si esegue una funzione o un metodo quando si recupera un valore e che consente allo sviluppatore di aggiungere una logica più complessa.</p>
<p>Per creare un getter si utilizza la parola chiave <b>get</b> seguita da un nome identificativo, in genere legato alla proprietà di cui si vuole controllare l’accesso.</p>
<p><b>Il get deve essere definito come metodo, quindi get [nome]() {}</b>. Inoltre, <b>è importante che il getter restituisca (return) qualcosa.</b></p>
<p><b>Come il get, il set ha la stessa nomenclatura</b> con la differenza che all’interno delle parentesi tonde vanno aggiunti i valori che l’utente vuole inserire e non ha bisogno del return.</p>
<p>Inoltre, per aggiungere un nuovo valore è necessario avere un metodo che te lo permetta, con parametro il valore da assegnare al campo della classe, che richiama tramite il costruttore il valore inserito fuori dalla classe attraverso la nomenclatura: <b>[nome classe].[nomesetter] = valore</b>.</p>
<p>
Esempio:

    //GETTER & SETTER
    class MKTDepartment extends Department{
        private balance: number

        //GETTER
        get getterBalance(){
            return this.activeBalance ? 
            this.balance : "No Balance Found" 
            //-> Il getter ha bisogno del return
        }

        //SETTER
        set setterBalance(value: number){ 
        //-> Valore preso dal metodo addBalance()

            value ? this.addBalance(value) : "No Balance Found" 
            //-> Il setter non ha bisogno del return
        }

        constructor(
         public admins: string[], private activeBalance: number){
            super("Marketing", 3, 3, ["Marco", "Giulia", "Carlo"])
            this.balance = activeBalance
 		    //-> Assegnazione valore preso dal parametro del costruttore "activeBalance"
        }

        //METODO PER AGGIUNGERE IL NUOVO VALORE NEL SETTER
        addBalance(value: number){
            this.balance = value
        }
    }


    const mktDepartment = new MKTDepartment(["Giulio"], 10_000)
    mktDepartment.setterBalance = 6_000 //-> Valore nuovo da settare

    console.log("CLASSE DERIVATA CON UTILIZZO DI GETTER/SETTER", mktDepartment)
    console.log("UTILIZZO DEL GETTER \n", "Bilancio attuale:", 
                mktDepartment.getterBalance)
    //-> utilizziamo il metodo senza aver bisogno delle parentesi
</p>

<h2>Classi astratte</h2>
<p>L’astrattezza può essere molto utile se si vuole imporre che tutte le classi basate su una classe principale condividano metodi o proprietà comuni. </p>
<p>
Esempio:

    //ABSTRACT CLASS
    abstract class Animal { 
    //-> Aggiungere la parola chiave Abstract prima di definire la classe

        protected abstract extinction: string //-> proprietà abstract da ereditare
        constructor(protected weight: string, protected longevity: string,
                    protected classAnimal: string){}

        abstract describe(this: Animal): void 
        //-> Aggiungere al metodo principale la parola chiave abstract prima del metodo, 
        con dentro le parentesi la classe principale e aggiungere il void
    }

    class Dog extends Animal{
        extinction: string 
        //-> Tipizziamo la proprietà ereditata dalla classe principale

        constructor(){
            super("1.4kg - 100kg", "10 - 13 years", "Mammal")
            this.extinction = "Minimal Risk" 
            //-> Assegnamo il valore alla proprietà ereditata
        }

        describe(){ 
        //-> Deve implementare obbligatoriamente questo metodo 
        se la classe base è abstract
           console.log("DESCRIBE CON CLASSE DERIVATA", "\n", 
                       "Weight:", this.weight, "\n", 
                       "Longevity:", this.longevity, "\n", 
                       "Class Animal:", this.classAnimal)
        }
    }
   
    class Cat extends Animal{
        extinction: string 
        //-> Tipizziamo la proprietà ereditata dalla classe principale

        constructor(){
            super("4kg - 5kg", "12 - 18 years", "Mammal")
            this.extinction = "Minimal Risk" 
            //-> Assegnamo il valore alla proprietà ereditata
        }

        describe(){ //-> Deve implementare obbligatoriamente questo metodo se la 
                         classe base è abstract
            console.log("DESCRIBE CON CLASSE DERIVATA", "\n", 
                        "Weight:", this.weight, "\n", 
                        "Longevity:", this.longevity, "\n", 
                        "Class Animal:", this.classAnimal)
        }
    }

    const dog = new Dog()
    dog.describe()
    console.log("CLASSE DERIVATA", dog)

    const cat = new Cat()
    cat.describe()
    console.log("CLASSE DERIVATA", cat)
</p>

<h2>Interface</h2>
<p>Un'interfaccia descrive la struttura di un oggetto.</p>
<p>Per definire un’interfaccia bisogna utilizzare la parola chiave <b>interface</b> seguita dal nome identificativo dell’oggetto a cui fa riferimento e le parentesi graffe.</p>
<p>All’interno delle graffe andiamo a definire l’aspetto dell’oggetto, andando ad inserire proprietà e Tipo.</p>
<p><b>N.B. All’interno di un'interfaccia è possibile aggiungere anche dei metodi.</b></p>
<p>L’idea alla base delle interfacce è verificare la dichiarazione di un oggetto con le sue proprietà.</p>
<p>Esempio:

    //INTERFACE
    interface IPerson{
        firstName: string,
        lastName: string,
        age: number,

        infoUser(phrase: string): void, 
        //-> Metodo con eventuali parametri
    }

    let user1: IPerson 
    //-> Inizializziamo una variabile che prenderà le proprietà dell'interfaccia 
         nell'oggetto

    user1 = { //-> Inseriamo i valori relativi alle proprietà dell'interfaccia
        firstName: "Paolo",
        lastName: "Rossi",
        age: 35,

        infoUser(phrase: string){
            console.log(phrase + ":", 
                        this.firstName, this.lastName, this.age + "yo")
        }
    }

    user1.infoUser("User1") //-> Chiamiamo il metodo per dare valore a phrase
</p>

<h2>Usare le interfacce con le Classi</h2>
<p>Il motivo per cui spesso si lavora con le interfacce è che un’interfaccia può essere usata come un contratto che una classe può implementare e a cui la classe deve aderire.</p>
<p>Se si vuole usare un’interfaccia per condividerla tra più classi, bisogna assicurarsi che ogni classe che aderisce abbia le proprietà dell’interfaccia.</p>
<p><b>N.B. Si possono implementare più interfacce utilizzando la virgola tra un'interfaccia e l'altra.</b></p>
<p>
    //INTERFACE
    interface IPerson{
        firstName: string,
        lastName: string,
        age: number,

        infoUser(phrase: string): void //-> Metodo con eventuali parametri
    }

    let user1: IPerson //-> Inizializziamo una variabile che prenderà le proprietà 
                            dell'interfaccia nell'oggetto

    user1 = {  //-> Inseriamo i valori relativi alle proprietà dell'interfaccia
        firstName: "Paolo",
        lastName: "Rossi",
        age: 35,

        infoUser(phrase: string){
            console.log("UTILIZZO INTERFACE \n",
                        phrase + ":", 
                        this.firstName, 
                        this.lastName, 
                        this.age + "yo")
        }
    }

    user1.infoUser("User1") //-> Chiamiamo il metodo per dare valore a phrase

    class Person implements IPerson{ 
        //-> Andiamo ad implementare l'interfaccia nella classe
        firstName: string
        lastName: string
        age: number

        constructor(fN: string, lN: string, a: number){
            this.firstName = fN
            this.lastName = lN
            this.age = a
        }

        infoUser(phrase: string){
            return phrase
        }
    }

    user1 = new Person("Mirko", "Galileo", 23) //-> Corrisponderà ad un oggetto

    console.log(user1)
</p>

<h2>Parametri e Proprietà opzionali</h2>
<p>All’interno delle Interfacce è possibile inserire delle proprietà opzionali che facciano sì che non sia necessario essere chiamate nell’oggetto, ritornando però come valore della proprietà undefined. </p>
<p><b>Per far si che le proprietà siano opzionali bisogna aggiungere il punto interrogativo (?)</b> all’interno dell’interfaccia, all’interno della classe e nel suo costruttore.</p>
<p>
Esempio:

    //INTERFACE
    interface IPerson{
        firstName: string,
        lastName: string,
        age: number,
        birth?: string //-> Attraverso il punto interrogativo si definisce il parametro 
                            opzionale, quindi non necessario utilizzarlo in tutte le 
                            classi

        infoUser(phrase: string): void 
        //-> Metodo con eventuali parametri
    }

    let user1: IPerson //-> Inizializziamo una variabile che prenderà le proprietà 
                            dell'interfaccia nell'oggetto

    user1 = { //-> Inseriamo i valori relativi alle proprietà dell'interfaccia
        firstName: "Paolo",
        lastName: "Rossi",
        age: 35,
        birth: "04-03-1985",

        infoUser(phrase: string){
            console.log("UTILIZZO INTERFACE \n", 
                        phrase + ":", this.firstName, 
                        this.lastName, this.age + "yo", this.birth)
        }
    }


    user1.infoUser("User1")  //-> Chiamiamo il metodo per dare valore a phrase


    class Person implements IPerson { 
        //-> Andiamo ad implementare l'interfaccia nella classe
        firstName: string
        lastName: string
        age: number
        birth?: string //-> Si aggiunge il punto interrogativo al parametro


        constructor(fN: string, lN: string, a: number, bt?: string){ 
        //-> Si aggiunge il punto interrogativo al parametro
            this.firstName = fN
            this.lastName = lN
            this.age = a
            this.birth = bt
        }


        infoUser(phrase: string){
            return phrase
        }
    }


    user1 = new Person("Mirko", "Galileo", 30) 
    //-> Corrisponderà ad un oggetto e non avendo  l'argomento per "birth" tornerà per il suo valore undefined
    console.log("CLASSE CON INTERFACE E PARAMETRO OPZIONALE (tornato in undefined)", 
                 user1)
</p>