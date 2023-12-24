/**
 * Te da el valor de la carta elegida 
 * @param {String} carta Ejemplo: "A1"
 * @returns {number} Valor de la carta
 */
export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? ( valor === 'A' ) ? 11 : 10 : valor * 1;
}