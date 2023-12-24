/**
 * Te permite pedir una carta de la baraja
 * @param {Array<String>} deck 
 * @returns {String} Retorna la carta del deck - Ejemplo: "A1"
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) throw new Error('No hay cartas en el deck');

    const carta = deck.pop();
    return carta;
}