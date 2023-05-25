    
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

    type ElevatedEmployee = Admin & Employee; //-> Attraverso la & andiamo a definire che il Tipo avrà le proprietà dai Tipi assegnatigli

    const employee1: ElevatedEmployee = { //-> Assegnamo ad una costante l'oggetto, ovvero il Tipo combinato, con le proprietà dei Tipi assegnatigli
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
        if("privileges" in emp){ //-> Per effettuare un'operazione utilizzando le proprietà dei Tipi combinati è necessario che queste siano all'interno del Tipo, andando ad inserire nella condizione il nome della proprietà
            console.log("PROTEZIONI DI TIPO \n", "Priveleges: ", emp.privileges)
        }
    }

    unknownEmployee(employee1)

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
