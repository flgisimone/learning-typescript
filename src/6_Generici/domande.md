<h2>Domande sui Generici</h2>

<span>Quando i "Generici" possono tornare molto utili?</span>
<br>
<span>Si usa nei casi in cui si dispone di un Tipo che funziona insieme ad altri possibili Tipi.</span>
<br><br>
<span>Il seguente utilizzo di un Tipo generico avrebbe senso?</span>
<br>
<p>

    const data = extractData<string>(user, 'userId');

</p>

<span>Si, in quanto extractData() probabilmente ritornerà differenti dati basati su argomenti che vengono dati.</span>

<span>Qual è l'idea alla base dei “constraints” (quando si parla di generici)?</span>
<br>
<span>Constraints contente di restringere i Tipi concreti che possono essere utilizzati in una funzione generica, ecc.</span>