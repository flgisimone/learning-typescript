
    //DECORATORI
    console.log("---------------------- \n", "DECORATORI")
    function Logger(constructor: Function){ //-> Utilizziamo come argomento la funzione construttore della classe User_Person
        console.log("Logging...")
        console.log("ARGOMENTO DECORATORE \n", constructor) //-> Chiamiamo necessariamenteo l'argomento
    }

    @Logger //-> Aggiungiamo il Decoratore tramite l'identificatore "@" seguito dal nome della funzione
    class User_Person {
        firstName = "Fabio"

        constructor(protected lastName: string){
            console.log("Creating person object...")
        }
    }

    const pers = new User_Person("Rizzo")

    console.log(pers)

    //FACTORY DI DECORATORI
    console.log("---------------------- \n", "FACTORY DI DECORATORI")
    function LoggerUser(firstAccess: string, lastAccess: string){ //Multipli argomenti che si vogliono chiamare nel Decoratore
        return function(constructor: Function){ //-> Ritorniam
            console.log("ARGOMENTO DEL DECORATORE DA CHIAMARE \n", "First Access: " + firstAccess) 
            console.log("ARGOMENTO DEL DECORATORE DA CHIAMARE \n", "Last Access: " + lastAccess)
            console.log("ARGOMENTO DELLA FUNZIONE RITORNATA \n", constructor) 
        }
    }

    @LoggerUser(Date(), Date()) //Parametri chiamati per gli argomenti passati all'interno della funzione del Decoratore
    class Logge_User {
        firstName = "Jacopo"

        constructor(protected lastName: string){
            console.log("Creating person object...")
        }
    }

    const logUser = new Logge_User("Lazzarini")

    console.log(logUser)

    //DECORATORI UTILI (MANIPOLAZIONE DEL DOM CON LE CLASSI)
    function ManipulateDOM(title_h1: string, userId: string){ //-> userId rappresenta l'id del tag HTML
        return function(originalConstructor: any){
            const hookDiv = document.getElementById(userId)
            const infoUser = new originalConstructor() //-> Inizializziamo una costante, ovvero un oggetto, con il costruttore della classe da cui si prenderanno firstName e lastName

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

    @ManipulateDOM("<h1>User</h1>", "userId") //-> Applichiamo il Decoratore alla classe e chiamiamo i parametri da passare negli argomenti title_h1 e userId del Decoratore
    class Object_User{
        firstName = "Alessandro" 
        lastName = "Vanetti"
        constructor(){}
    }
