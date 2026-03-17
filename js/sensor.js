/**
 * Gera temperatura simulada entre min e max.
 *
 * @param {number} [min=20] Valor mínimo da temperatura.
 * @param {number} [max=30] Valor máximo da temperatura.
 * @returns {number} Retorna temperatura simulada.
 */
function lerSensorTemperatura(min = 20, max = 30) {

    // temperatura simulada entre min e max graus
    const temperatura = Math.random() * (max - min) + min;

    return Math.round(temperatura);

}