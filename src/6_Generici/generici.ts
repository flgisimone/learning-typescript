
    //FUNZIONI GENERICHE
    interface Lunghezza {
        length: number;
    }

    function lengthValue<T extends Lunghezza>(valore: T){ 
    //-> All'interno delle <> andiamo a definire con "T" il Tipo generico e con "extends" il constraints. All'argomento della funzione viene assegnato il Tipo generico presente tra <>
    return valore.length;
    }

    let lengthWord = lengthValue("Hello everyone");
    let lengthArray = lengthValue([1, 2, 3])

    console.log("FUNZIONI GENERICHE \n", "Lunghezza parola:", lengthWord) 
    //-> Tornerà come valore numerico: 14, in quanto conterà la lunghezza della stringa
    console.log("FUNZIONI GENERICHE \n", "Lunghezza array:", lengthArray) 
    //-> Tornerà come valore numerico: 3, in quanto conterà gli elementi presenti nell'array

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

    function stampaProprietà<T, K extends keyof T>(oggetto: T, chiave: K){ //-> L'oggetto prende il Tipo generico "T", mentre "K"
        console.log("KEYOF \n", oggetto[chiave]) 
        //-> Tornerà la chiave con il valore dell'oggetto, in questo caso di persona  che deve essere una delle chiavi valide di "T"
      }

      stampaProprietà(persona, "nome")

      console.log("OGGETTO KEYOF \n", persona) //-> Tornerà l'intero oggetto

      //CLASSI GENERICHE
      class UserPerson<T>{ //-> Assegniamo un Tipo generico che potrà essere usato dalle proprietà all'interno della classe
        private informations: T[] = [] //-> Assegniamo alla proprietà una Array che può contenere qualsiasi Tipo 

        addInfo(info: T){ //-> Assegniamo all'argomento il Tipo generico
          this.informations.push(info)
        }

        printInfo(){
          return this.informations
        }
      }

      const infoList = new UserPerson<string | number>() //-> Assegniamo all'oggetto della classe i Tipi da prendere per le proprietà, in questo caso stringhe o numeri 
      infoList.addInfo("Enrico")
      infoList.addInfo("Carducci")
      infoList.addInfo(46)

      console.log("OGGETTO CLASSE GENERICA \n", infoList)
      console.log("ARRAY CLASSE GENERICA \n", infoList.printInfo())
