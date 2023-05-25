var employee1 = {
    privileges: ["Access BE", "Access FE"],
    firstName: "Giorgio",
    lastName: "Pellegrini"
};
console.log("TIPO AVANZATO", employee1);
function unknownEmployee(emp) {
    console.log("PROTEZIONI DI TIPO \n", "Name", emp.firstName);
    console.log("PROTEZIONI DI TIPO \n", "Name", emp.lastName);
    if ("privileges" in emp) { //-> Per effettuare un'operazione utilizzando le proprietà dei Tipi combinati è necessario che queste siano all'interno del Tipo, andando ad inserire nella condizione il nome della proprietà
        console.log("PROTEZIONI DI TIPO \n", "Priveleges: ", emp.privileges);
    }
}
unknownEmployee(employee1);
function speedAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            console.log("UNIONI DISCRIMINATE \n", "Bird's Speed", speed);
            break;
        case "horse":
            speed = animal.runningSpeed;
            console.log("UNIONI DISCRIMINATE \n", "Horse's Speed", speed);
            break;
    }
}
speedAnimal({ type: "bird", flyingSpeed: 150 });
speedAnimal({ type: "horse", runningSpeed: 120 });
