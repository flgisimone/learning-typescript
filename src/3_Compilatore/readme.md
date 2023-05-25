<h1>Capitolo 3 - Compilatore TypeScript e configurazione</h1>
<h2>Watch Mode</h2>
<p>Con la Watch Mode è possibile dire a TypeScript di osservare un file e ogni volta che questo viene modificato, TypeScript lo ricompila.</p>
<p><b>Per utilizzare questa modalità bisogna utilizzare il comando -> tsc [percorso file] –watch (o -w).</b></p>

<h2>Compilare intero progetto/file multipli</h2>
<p>È possibile compilare l’intero progetto attraverso il comando -> tsc –init. In questo caso all’interno del progetto verrà generato un file tsconfig.json.</p>
<p>Qualora esso sia presente, bisognerà rimuoverlo perché altrimenti non potrà essere generato, o in alternativa, aggiungere nel file presente all’interno dell’oggetto "compilerOptions":

    "module": "commonjs",
    "esModuleInterop": true,  
    "forceConsistentCasingInFileNames": true,  
    "strict": true,  
    "skipLibCheck": true
</p>
<p>Andando a rimuovere i duplicati o key che vanno in conflitto.</p>

<h2>Includere ed escludere File</h2>
<p>Per includere o escludere determinati file da un compilatore è possibile inserire all’interno del file tsconfig.json le opzioni:
  
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules"
  ]
</p>
<p>Con l’opzione “include” andremo ad includere mentre con l’opzione “exclude” andremo ad escludere file o cartelle.</p>
