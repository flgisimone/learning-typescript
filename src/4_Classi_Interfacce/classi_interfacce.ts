
    class Department {
        //CONSTRUCTOR
        constructor(public nameDep: string, public readonly idDep: number, public numEmployees: number, public employees: string[]) {}
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
    itDepartment.addEmployee("Franco")// -> Metodo richiamato con argomento
    itDepartment.addEmployee("Orazio")// -> Metodo richiamato con argomento

    console.log("CLASSE BASE", department)
    console.log("CLASSE DERIVATA", itDepartment)

    //GETTER & SETTER
    class MKTDepartment extends Department{
        private balance: number

        //GETTER
        get getterBalance(){
            return this.activeBalance ? this.balance : "No Balance Found" //-> Il getter ha bisogno del return
        }

        constructor(public admins: string[], private activeBalance: number){
            super("Marketing", 3, 3, ["Marco", "Giulia", "Carlo"])
            this.balance = activeBalance //-> Assegnazione valore preso dal parametro del costruttore "activeBalance"
        }

        //SETTER
        set setterBalance(value: number){ //-> Valore preso dal metodo addBalance()
            value ? this.addBalance(value) : "No Balance Found" //-> Il setter non ha bisogno del return
        }

        //METODO PER AGGIUNGERE IL NUOVO VALORE NEL SETTER
        addBalance(value: number){
            this.balance = value //-> valore 
        }
    }

    const mktDepartment = new MKTDepartment(["Giulio"], 10_000)
    mktDepartment.setterBalance = 6_000 //-> valore nuovo da settare

    console.log("CLASSE DERIVATA CON UTILIZZO DI GETTER/SETTER", mktDepartment)
    console.log("UTILIZZO DEL GETTER \n", "Bilancio attuale:", mktDepartment.getterBalance)//-> utilizziamo il metodo senza aver bisogno delle parentesi

    //ABSTRACT CLASS
    abstract class Animal { //-> Aggiungere la parola chiave Abstract prima di definire la classe
        protected abstract extinction: string //-> proprietà abstract da ereditare
        constructor(protected weight: string, protected longevity: string, protected classAnimal: string){}
        abstract describe(this: Animal): void //-> Aggiungere al metodo principale la parola chiave abstract prima del metodo, con dentro le parentesi la classe principale e aggiungere il void
    }

    class Dog extends Animal{
        extinction: string //-> Tipizziamo la proprietà ereditata dalla classe principale
        constructor(){
            super("1.4kg - 100kg", "10 - 13 years", "Mammal")
            this.extinction = "Minimal Risk" //-> Assegnamo il valore alla proprietà ereditata
        }

        describe(){ //-> Deve implementare obbligatoriamente questo metodo se la classe base è abstract
            console.log("DESCRIBE CON CLASSE DERIVATA", "\n", "Weight:", this.weight, "\n", "Longevity:", this.longevity, "\n", "Class Animal:", this.classAnimal)
        }
    }

    class Cat extends Animal{
        extinction: string //-> Tipizziamo la proprietà ereditata dalla classe principale
        constructor(){
            super("4kg - 5kg", "12 - 18 years", "Mammal")
            this.extinction = "Minimal Risk" //-> Assegnamo il valore alla proprietà ereditata
        }

        describe(){ //-> Deve implementare obbligatoriamente questo metodo se la classe base è abstract
            console.log("DESCRIBE CON CLASSE DERIVATA","\n", "Weight:", this.weight, "\n", "Longevity:", this.longevity, "\n", "Class Animal:", this.classAnimal)
        }
    }

    const dog = new Dog()
    dog.describe()
    console.log("CLASSE DERIVATA", dog)

    const cat = new Cat()
    cat.describe()
    console.log("CLASSE DERIVATA", cat)

    //INTERFACE
    interface IPerson{
        firstName: string,
        lastName: string,
        age: number,
        birth?: string //-> Attraverso il punto interrogativo si definisce il parametro opzionale, quindi non necessario utilizzarlo in tutte le classi

        infoUser(phrase: string): void //-> Metodo con eventuali parametri
    }

    let user1: IPerson //-> Inizializziamo una variabile che prenderà le proprietà dell'interfaccia nell'oggetto

    user1 = { //-> Inseriamo i valori relativi alle proprietà dell'interfaccia
        firstName: "Paolo",
        lastName: "Rossi",
        age: 35,
        birth: "04-03-1985",

        infoUser(phrase: string){
            console.log("UTILIZZO INTERFACE \n", phrase + ":", this.firstName, this.lastName, this.age + "yo", this.birth)
        }
    }

    user1.infoUser("User1") //-> Chiamiamo il metodo per dare valore a phrase

    class Person implements IPerson { //-> Andiamo ad implementare l'interfaccia nella classe
        firstName: string
        lastName: string
        age: number
        birth?: string //-> Si aggiunge il punto interrogativo al parametro

        constructor(fN: string, lN: string, a: number, bt?: string){ //-> Si aggiunge il punto interrogativo al parametro
            this.firstName = fN
            this.lastName = lN
            this.age = a
            this.birth = bt
        }

        infoUser(phrase: string){
            return phrase
        }
    }

    user1 = new Person("Mirko", "Galileo", 30) //-> Corrisponderà ad un oggetto e non avendo l'argomento per "birth" tornerà per il suo valore undefined
    console.log("CLASSE CON INTERFACE E PARAMETRO OPZIONALE (tornato in undefined)", user1)
