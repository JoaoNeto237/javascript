const statusPantera  = '';

const isPanteraFeliz = new Promise((resolve, reject) =>{
    switch (statusPantera){
        case "feliz":
            resolve({
                mensagem: "FELIZ",
            });
            break;
        case "entediado":
            reject({
                mensagem: "ENTEDIADO",
            });
            break;
        case "triste":
            reject({
                mensagem: "TRISTE",
            });
            break;
        default: 
            reject({
                mensagem: "EMOCIONAMENTE INDEFINIDO",
            });
            
    }
})
isPanteraFeliz.then((response) =>{
    console.log(`Tudo certo, o gatos está ${response.mensagem}`)
}).catch((error)=>{
    console.log(`Deu ruim... O gato está ${error.mensagem}`)
})
