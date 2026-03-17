// função responsável por mostrar a temp no display 
function mostrarTemperatura(valor) {

    const display = document.getElementById("display7seg");

    //verifica se o elemento existe antes alterar 
    if (!display) return;

    //exibe a temp formatada com 1 casa decimal 
    display.innerText = `${Number(valor).toFixed(1)}°C`;

    //horario atual para mostrar a última medição
    const agora = new Date().toLocaleTimeString();

    //exibe o horário da última medição
    document.getElementById("ultimaMedicao").innerText = agora;

}

let intervaloId = null;

//inicia a medição
function iniciarMedicao() {
    if (intervaloId) return;

    //executa a medição a cada 1 segundo 
    intervaloId = setInterval(medirTemperatura, 1000);
}

// para a medição
function pararMedicao() { //parar a medição
    clearInterval(intervaloId);
    intervaloId = null;
}

// função principal que realiza a medição 
function medirTemperatura() {

    //simula a leitura do sensor de temperatura (valor analógico)
    let analogico = lerSensorTemperatura();

    //converte o valor analógico para digital
    let digital = conversorADC(analogico);

    //processa o valor digital para obter a temperatura real
    let temperatura = processarTemperatura(digital);

    mostrarTemperatura(temperatura);

}