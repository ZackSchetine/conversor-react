// 
export function ValidarPositivo(valor) {
    if (valor < 0) {
        return alert("Cheque o valor inserido, apenas números positivos são válidos");
    } else {
        return valor;
    }
}

export function ValidarNumero(valor) {
    if (isNaN(valor)) {
        return alert("Por favor informar apenas dados numéricos");
    } else {
        return valor;
    }
}