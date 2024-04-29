Immagina di avere un sito web che mostra informazioni sugli utenti GitHub.

Fase 1: Creare una lista di utenti GitHub

Crea un componente chiamato GithubUserList.
Questo componente farà due cose:
Ottenere un elenco di nomi utente GitHub da un sito web (API GitHub).
Mostrare una lista di collegamenti a ciascun nome utente.
Collega questo componente al percorso /users del tuo sito web. In questo modo, quando un utente visita /users, vedrà la lista di nomi utente GitHub.
Fase 2: Visualizzare i dettagli di un utente GitHub

Crea un altro componente chiamato ShowGithubUser.
Questo componente mostrerà i dettagli di un singolo utente GitHub, come nome, biografia, repository e così via.
Quando un utente clicca su un nome utente nella lista GithubUserList, il sito web dovrebbe navigare al percorso /users/:username, dove :username è il nome utente cliccato.
Al percorso /users/:username, il componente ShowGithubUser dovrebbe essere visualizzato con le informazioni specifiche dell'utente cliccato.
In parole semplici:

Un componente mostra una lista di nomi utente GitHub (collegamenti).
Cliccando su un nome utente, si apre un altro componente che mostra i dettagli di quell'utente.
