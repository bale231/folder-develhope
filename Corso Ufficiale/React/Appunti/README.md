### METODI PER VISUALIZZARE L'API:

Il metodo ".json()": per visualizzare un oggetto in formato JSON;
Metodo ".blob()": utile per prendere delle immagini, ad esempio:

`import React, { useState, useEffect } from 'react';
const ImageFetcher = () => {
const [imageUrl, setImageUrl] = useState('');
const [imageBlob, setImageBlob] = useState(null);

useEffect(() => {
if (imageUrl) {
fetch(imageUrl)
.then(response => response.blob())
.then(blob => {
const objectURL = URL.createObjectURL(blob);
setImageBlob(objectURL);
});
}
}, [imageUrl]);

return (
<div>
<input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
{imageBlob && <img src={imageBlob} alt="Immagine scaricata" />}
</div>
);
};

export default ImageFetcher;
`;

Metodo ".text()": Restituisce un codice in formato XML o in formato WSDL per estrarre del testo normale, ad esempio:

`
import React, { useState, useEffect } from 'react';

function App() {
const [data, setData] = useState('');

useEffect(() => {
fetch('dati.txt')
.then(response => response.text())
.then(text => setData(text))
.catch(error => console.error('Errore durante il fetch:', error));
}, []);

return (
<div>
{data && <p>{data}</p>}
</div>
);
}

export default App;
`.

### **************************************************************\*\***************************************************************

Il tag <BrowserRouter></BrowserRouter> è un componente speciale che viene fornito dall'installazione di React Router, gestisce la navigazione tra le diverse Routes, le Routes sono le diverse "strade" su cui vuole andare il sigolo Route.

### npm install react-router-dom : comando per installare React Router.
