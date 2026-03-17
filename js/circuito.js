// função para simular a leitura do sensor de temperatura
function conversorADC(valorAnalogico) {

    // simula conversão analógica para digital
    let valorDigital = Math.floor(valorAnalogico * 10);

    return valorDigital;

}

// função para processar o valor digital e obter a temperatura real
function processarTemperatura(valorDigital) {

    // converte de volta para temperatura com 1 casa decimal (retorna número)
    const temperatura = Number((valorDigital / 10).toFixed(1));

    return temperatura;

}