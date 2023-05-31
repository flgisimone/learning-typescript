<h1>Capitolo 1 - Introduzione</h1>

<h2>Cos’è TypeScript e perchè viene utilizzato</h2>
<p>TypeScript è un linguaggio basato su JavaScript con nuove caratteristiche e vantaggi, rendendo la scrittura più facile e più potente. Tuttavia, gli ambienti in cui è possibile eseguire JavaScript non supportano TypeScript, esempio il Browser.</p>
<p>Oltre ad essere un linguaggio di programmazione, rappresenta uno strumento: un potente compilatore che viene eseguito sul codice per compilare il codice in JavaScript. </p>
<p>Il risultato che si ottiene scrivendo codice in TypeScript è normale codice JavaScript ma con tutte le nuove funzionalità e tutti i vantaggi, tra questi la tipizzazione.</p>

<h2>Installare e usare TypeScript</h2>
<p>Link per l’installazione -> <a href="https://www.typescriptlang.org/">TypeScript: JavaScript With Syntax For Types. (typescriptlang.org)</a></p>
<p>Il commando che permette l’installazione a livello globale tramite terminale è:
<li>npm install -g typescript</li></p>
<p>Altrimenti per installarlo in un determinato progetto basterà installarlo nella cartella di esso tramite il comando:
<li>npm install typescript</li></p>
<p><b>N.B. Per installare TypeScript tramite pacchetto NPM è necessario installare Node JS</b> -> <a href="https://nodejs.org/en">Node.js (nodejs.org)</a></p>
<p>Un file TypeScript utilizza come estensione <b>.ts</b> </p>
<p>Uno dei motivi per cui si utilizza TypeScript risiede nel fatto che ci costringe ad essere più espliciti e più chiari.</p>
<p>Il vantaggio maggiore è l’aggiunta dei Tipi.</p>
<p>Esempio: 
<b>index.html</b>

`<input type="number" placeholder="num1" id="num1"><br>`<br>
`<input type="number" placeholder="num2" id="num2"><br>`<br>
`<span id="result"></span>`<br>
`<button type="submit">Send</button>`
</p>

<p>Esempio: 
<b>introduzione.js</b>

`const input1 = document.getElementById("num1")! as HTMLInputElement`<br>
`const input2 = document.getElementById("num2")! as HTMLInputElement`<br>
`const result = document.getElementById("result")! as HTMLElement`<br>
`const button = document.querySelector("button")`<br>

`function add(num1: number, num2: number){`<br>
`return num1 + num2`<br>
`}`<br>

`button?.addEventListener("click", (e) =>{`<br>
`e.preventDefault()`<br>
`let res: number = add(Number(input1.value), Number(input2.value))`<br>
`result.innerHTML = res.toString()`<br>
   
`console.log(result)`<br>
`})`<br></p>

<p>In questo caso TypeScript non riconosce gli Id, e di conseguenza il <b>value</b> da assegnare alle costanti dichiarate.</p>

<h3 style="color:red"><b>Tipizzazione input1 e input2</b></h3>
<p><b>Per far sapere a Typescript che siamo sicuri di ottenere un elemento bisogna aggiungere il punto esclamativo (!)</b>. In questo modo si indicherà a TypeScript che questa operazione non produrrà mai un risultato nullo. </p>
<p>Inoltre, <b>essendo un elemento di input</b> si può usare come elemento di input HTML, una sintassi chiamata typecasting, <b>per fare sapere a TypeScript quale tipo di elemento sarà. In questo caso: as HTMLInputElment.</b></p>

<h3 style="color:red"><b>Tipizzazione num1 e num2</b></h3>
<p><b>Typescript non riconosce di che tipo sono gli argomenti</b> non essendo specificati esplicitamente, <b>per fare ciò è necessario aggiungere i due punti (:) e specificare il tipo</b>, in questo caso number.</p>
<p><b>In JavaScript quando si accede al valore di un elemento di input qualsiasi, questo è sempre una stringa, pertanto sarà necessario convertire input1.value e input2.value da string a number, in questo caso utilizzando il costruttore Number(), o in alternativa il simbolo +.</b></p>
<p><b>N.B. Per verificare se ci sono errori in Typescripts si può utilizzare il comando npx tsc [percorso file] all’interno del terminale. Per installare il pacchetto -> npm i tsc.</b></p>

<h2>Panoramica vantaggi Typescript</h2>
<p>Alcuni dei vantaggi di TypeScript sono: </p>
<li>Aggiunge tipi e dati super importanti</li>
<li>Con i tipi bisogna essere molto più espliciti su come funzionano le cose evitando errori</li>
<li>È possibile utilizzare funzionalità JavaScript di nuova generazione che funzionano anche con i browser più vecchi</li>
<li>Aggiunge funzionalità proprietarie, quali Interfacce e Generici, che danno errori più chiari e aiutano ad evitarli</li>
<li>Aggiunge funzionalità di metaprogrammazione come i Decoratori</li>
<li>È altamente configurabile</li>

