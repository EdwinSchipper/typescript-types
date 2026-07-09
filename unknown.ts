// Functie met een parameter van het type 'unknown'. We weten nog niets over de waarde.
function process(val: unknown) { 

    if(
        typeof val === 'object' &&  // Controleer of 'val' een object is (let op: null is ook een "object").
        !!val &&                    // Controleer dat 'val' niet null is (null is een falsy waarde).
        'log' in val &&             // Controleer of het object een property met de naam 'log' heeft.
        typeof val.log === 'function' // Controleer of de 'log'-property daadwerkelijk een functie is.
    ) {
        val.log(); // Alle controles zijn geslaagd, dus het is veilig om de functie 'log()' aan te roepen.
    }
}

