/***************************************************************** */
/* TODO1: Utilizza React per creare un'applicazione che includa un input di testo dove 
l'utente può inserire il nome della città. */
/* TODO2: Crea un componente che utilizzi l'OpenWeatherMap API per fare una richiesta di 
condizioni meteo attuali per la città inserita dall'utente. */
/* TODO3: Mostra le informazioni meteo attuali sulla pagina, ad esempio temperatura, umidità, 
condizioni meteorologiche, ecc. */
/* TODO4: Gestisci i casi in cui l'utente inserisce una città non valida o la richiesta API non riesce. */
/* TODO5: Aggiungi un po' di stile per rendere l'applicazione più accattivante. */

import { useOpenWeatherMap } from "./useOpenWeatherMap";
import { useState } from "react";

/*http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=8c679d9817401dbf31cb36b41cf5bec2&units=metric*/

function App() {
  const [value, setValue] = useState("");
  const { fetchData, data } = useOpenWeatherMap(value);
  return (
    <>
      <h1>Cerca la citta</h1>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={fetchData}>Cerca</button>
      {data.map((element) => (
        <h2 key={element.id}>{element.name}</h2>
      ))}
    </>
  );
}

export default App;
