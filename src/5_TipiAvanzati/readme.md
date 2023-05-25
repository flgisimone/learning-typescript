<h1>Capitolo 5 - Tipi Avanzati</h1>
<h2>Tipi Intersezione</h2>
<p>I Tipi di intersezione consentono di basare un Tipo sulla combinazione di più Tipi.</p>
<p>Una volta definiti i Tipi da utilizzare per la combinazione, si definisce il Tipo a cui si assegnerà tramite l’<b>uguale (=)</b> i Tipi da combinare attraverso la <b>e commerciale (&)</b>.</p>
<p>Fatto ciò si assegnerà ad una costante il Tipo con all’interno tutte le proprietà comprese tra i vari Tipi combinati.</p>
<p>
Esempio:

    //TIPI AVANZATI
    type Admin = {
        privileges: string[];
    }

    type Employee = {
        firstName: string;
        lastName: string;
    }

    type ElevatedEmployee = Admin & Employee; 
    //-> Attraverso la & andiamo a definire che il Tipo avrà le 
    proprietà dai Tipi assegnatigli

    const employee1: ElevatedEmployee = { 
    //-> Assegnamo ad una costante l'oggetto, ovvero il Tipo combinato, con 
         le proprietà dei Tipi assegnatigli
        privileges: ["Access BE", "Access FE"],
        firstName: "Giorgio",
        lastName: "Pellegrini"
    }

    console.log("TIPO AVANZATO", employee1)
</p>

<h2>Protezione di tipi</h2>
<p>Un altro modo per cui un Tipo può prendere proprietà da Tipi diversi e attraverso l’utilizzo della <b>pipe (|)</b>, come se fosse un unione.</p>
<p>In questo caso per poter avere la possibilità di utilizzare entrambe le proprietà all’interno della funzione è necessario che entrambi i Tipi combinati abbiano le proprietà in comune.</p>
<p>
Esempio:
   
    //TIPI AVANZATI
    type Admin = {
        privileges: string[];
        firstName: string; //-> Proprietà in comune
        lastName: string; //-> Proprietà in comune
    }

    type Employee = {
        firstName: string; //-> Proprietà in comune
        lastName: string; //-> Proprietà in comune
    }

    type ElevatedEmployee = Admin & Employee; 
    //-> Attraverso la & andiamo a definire che il Tipo avrà le proprietà 
         dai Tipi assegnatigli

    const employee1: ElevatedEmployee = { 
    //-> Assegnamo ad una costante l'oggetto, ovvero il Tipo combinato, con le 
         proprietà dei Tipi assegnatigli
        privileges: ["Access BE", "Access FE"],
        firstName: "Giorgio",
        lastName: "Pellegrini"
    }

    console.log("TIPO AVANZATO", employee1)

    //PROTEZIONI DI TIPO
    type UnknownEmployee = Employee | Admin

    function unknownEmployee(emp: UnknownEmployee){
        console.log("PROTEZIONI DI TIPO \n", "Name", emp.firstName)
        console.log("PROTEZIONI DI TIPO \n", "Name", emp.lastName)
        if("privileges" in emp){ 
        //-> Per effettuare un'operazione utilizzando le proprietà dei Tipi 
             combinati è necessario che queste siano all'interno del Tipo, 
             andando ad inserire nella condizione il nome della proprietà

            console.log("PROTEZIONI DI TIPO \n", "Priveleges: ", 
                         emp.privileges)
        }
    }

    unknownEmployee(employee1)
</p>

<h2>Unioni discriminanti</h2>
<p><b>Le unioni discriminanti consentono di combinare diversi Tipi in un unico Tipo utilizzando un discriminante, ovvero una proprietà comune che ha valori specifici per ogni Tipo.</b></p>
<p>Inoltre, sono spesso utilizzate insieme a costrutti come switch o if-else per implementare la logica condizionale in base al Tipo specifico. In questo modo, è possibile eseguire operazioni specifiche per ogni tipo all'interno della stessa funzione o blocco di codice.</p>
<p>
Esempio:

    //UNIONI DISCRIMINATE
    interface Bird {
        type: "bird"; //-> Proprietà discriminante
        flyingSpeed: number;
    }

    interface Horse {
        type: "horse"; //-> Proprietà discriminante
        runningSpeed: number;
    }

    type AnimalSpeed = Bird | Horse

    function speedAnimal(animal: AnimalSpeed){
        let speed;
        switch(animal.type){
            case "bird":
                speed = animal.flyingSpeed
                console.log("UNIONI DISCRIMINATE \n", "Bird's Speed", speed)
                break;

            case "horse":
                speed = animal.runningSpeed
                console.log("UNIONI DISCRIMINATE \n", "Horse's Speed", speed)
                break;
        }
    }

    speedAnimal({type: "bird", flyingSpeed: 150})
    speedAnimal({type: "horse", runningSpeed: 120})
</p>

<h2>Type Casting</h2>
<p>Il Type Casting aiuta a dire a TypeScript che un valore è di un tipo specifico, quando TypeScript non è in grado di rilevarlo da solo.</p>
<p>Esistono due modi per effettuare il casting dei Tipi, attraverso due tipologie di sintassi che sono equivalenti:</p>
<li>Aggiungere <b><[Tipo]></b> davanti a ciò che vogliamo convertire o far sapere a TypeScript di cosa si tratta.</li>
<li>Aggiungere <b>as</b> dopo aver dichiarato ciò che vogliamo convertire o far sapere a TypeScript di cosa si tratta.</li>