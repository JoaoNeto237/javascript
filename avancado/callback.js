const statusPantera  = 'feliz';

function isPanteraFeliz(callback, errorCallback){
    switch (statusPantera){
        case "feliz":
            callback({
                mensagem: "FELIZ",
            });
            break;
        case "entediado":
            errorCallback({
                mensagem: "ENTEDIADO",
            });
            break;
        case "triste":
            errorCallback({
                mensagem: "TRISTE",
            });
            break;
        default:
            errorCallback({
                mensagem: "EMOCIONAMENTE INDEFINIDO",
            });
            
    }
}

isPanteraFeliz(
    (response) => console.log(`Tudo certo, o gatos está ${response.mensagem}`),
    (error) => console.log(`Deu ruim... O gato está ${error.mensagem}`)
);