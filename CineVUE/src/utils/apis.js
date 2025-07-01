// Funzione asincrona che recupera una recensione in base all'ID
// L'uso di "async" permette di effettuare una chiamata non bloccante,
// cioè il resto dell'app continua a funzionare mentre aspettiamo la risposta del server.
// Questo è fondamentale per non congelare l'interfaccia utente durante operazioni lente (es: rete).

const getReviewById = async (id) => {
    // Effettuiamo una richiesta HTTP GET al backend per ottenere una recensione
    // "await" aspetta che la risposta arrivi, senza bloccare il programma
    const response = await fetch(`api/recensioni/${id}`);

    // Convertiamo il corpo della risposta (che è in formato JSON) in oggetto JavaScript
    // Anche questa è un'operazione asincrona
    return await response.json();
}


const getReviews = async () => {
    const response = await fetch(`api/recensioni/`); 
    return await response.json();
}

const addReview = async(voto, commento, data, num_like, num_dislike, utente_id, film_id) => {
    const response = await fetch('api/recensioni/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({voto, commento, data, num_like, num_dislike, utente_id, film_id})
    });
    return await response.json();
}

const getFilmList = async() => {
    const response = await fetch('api/film/');
    return await response.json();
}


// Esportiamo la funzione per poterla usare in altri file
export { 
    getReviewById,
    getReviews,
    addReview,
    getFilmList
}