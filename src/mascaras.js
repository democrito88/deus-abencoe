export function mascaraCPF(cpf) {
    cpf.addEventListener('input', () => {
        // Remove tudo o que não é dígito
        let cpfFormatado = cpf.value.replace(/\D/g, "").slice(0, 11);

        // Adiciona os pontos e o traço conforme necessário
        if (cpfFormatado.length <= 11) {
            cpfFormatado = cpfFormatado.replace(/(\d{3})(\d)/, "$1.$2");
            cpfFormatado = cpfFormatado.replace(/(\d{3})(\d)/, "$1.$2");
            cpfFormatado = cpfFormatado.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }

        cpf.value = cpfFormatado;
    })
}

export function mascaraCNPJ(cnpj) {
    cnpj.addEventListener('input', () => {
        //Remove tudo que não é dígito
        let cnpjFormatado = cnpj.value.replace(/\D/g, "").slice(0, 14);

        // Adiciona os pontos, a barra e o traço conforme necessário
        if (cnpjFormatado.length <= 14) {
            cnpjFormatado = cnpjFormatado.replace(/^(\d{2})(\d)/, "$1.$2");
            cnpjFormatado = cnpjFormatado.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            cnpjFormatado = cnpjFormatado.replace(/\.(\d{3})(\d)/, ".$1/$2");
            cnpjFormatado = cnpjFormatado.replace(/(\d{4})(\d)/, "$1-$2");
        }

        cnpj.value = cnpjFormatado;
    })
}

export function mascaraMoeda(valor) {
    valor.addEventListener('input', () => {
        // Remove tudo o que não é dígito ou vírgula
        let valorFormatado = valor.value.replace(/[^\d,]/g, "");

        // Substitui vírgulas adicionais
        const pedaco = valorFormatado.split(',');
        if (pedaco.length > 2) {
            valorFormatado = pedaco[0] + ',' + pedaco.slice(1).join('');
        }

        // Formata o valor antes da vírgula
        let parteInteira = pedaco[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        // Reúne a parte inteira e a parte decimal (se existir)
        if (pedaco.length === 2) {
            valor.value = parteInteira + ',' + pedaco[1];
        } else {
            valor.value = parteInteira;
        }
    })
}

export function mascaraIPv4(input) {
    input.addEventListener('input', function (e) {
        let value = input.value;

        // Deixa apenas dígitos e ponto
        value = value.replace(/[^0-9]/g, '');

        let octets = [];
        value.length < 4 ? (octets[0] = parseInt(value.substring(0, 3)) > 255 ? 255 : parseInt(value.substring(0, 3))) : octets[0] = value.substring(0, 3);
        value.length < 7 ? (octets[1] = parseInt(value.substring(3, 6)) > 255 ? 255 : parseInt(value.substring(3, 6))) : octets[1] = value.substring(3, 6);
        value.length < 10 ? (octets[2] = parseInt(value.substring(6, 9)) > 255 ? 255 : parseInt(value.substring(6, 9))) : octets[2] = value.substring(6, 9);
        value.length < 13 ? (octets[3] = parseInt(value.substring(9, 12)) > 255 ? 255 : parseInt(value.substring(9, 12))) : octets[3] = value.substring(9, 12);

        octets = octets.filter(octet => !isNaN(octet));

        // junta os octetos
        octets = octets.join('.');

        input.value = octets;
    });
}

export function mascaraIPv6(ip) {
    ip.addEventListener('input', function (e) {
        // Remove tudo o que não é dígito, letra (a-f, A-F), ou dois pontos
        let ipv6 = ip.value.replace(/[^0-9a-fA-F]/g, "");
        let partes = ipv6.split('').map((character, index) => index < 32 ? (index % 4 === 0 ? ipv6.substring(index, index + 4) : '') : '')
            .filter(character => character !== "");
        console.log(partes);
        // Divida o valor em partes usando os dois pontos
        //let partes = ipv6.split(':');

        // Limite cada parte a 4 caracteres
        for (let i = 0; i < partes.length; i++) {
            if (partes[i].length > 4) {
                partes[i] = partes[i].slice(0, 4);
            }
        }

        // Reúne as partes com dois pontos
        ip.value = partes.join(':');
    });
}

export function teclaEHexOuDoisPontos(evt) {
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    // Permite números (0-9), letras (a-f, A-F) e dois pontos (58)
    if ((charCode >= 48 && charCode <= 57) || // 0-9
        (charCode >= 65 && charCode <= 70) || // A-F
        (charCode >= 97 && charCode <= 102) || // a-f
        charCode === 58) { // :
        return true;
    }
    return false;
}

export function teclaNumeroOuPonto(evt) {
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    // Permite números (0-9) e ponto (46)
    if (charCode !== 46 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

export function teclaNumeroOuVirgula(evt) {
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    // Permite números (0-9), vírgula (44), backspace (8) e delete (46)
    if (charCode !== 44 && (charCode > 31 && (charCode < 48 || charCode > 57))) {
        return false;
    }
    return true;
}

export function teclaNumero(evt) {
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    // Permite apenas números (0-9), tecla de backspace (8) e delete (46)
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

export function mascaraCEP(input) {
    input.addEventListener('input', function (e) {
        let value = input.value;

        // Remove todos os caracteres que não são dígitos
        value = value.replace(/\D/g, '');

        // Formata o valor como um CEP (99999-999)
        if (value.length > 5) {
            value = value.substring(0, 5) + '-' + value.substring(5, 8);
        } else {
            value = value.substring(0, 5);
        }

        // Atualiza o valor do input
        input.value = value;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const camposMonetarios = document.querySelectorAll('.valor-monetario');

    camposMonetarios.forEach(campo => {
        campo.addEventListener('input', function () {
            formatarMoeda(this);
        });
    });
});

export function formatarMoeda(element) {
    let valor = element.value;

    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Converte o valor para um número inteiro
    valor = parseInt(valor);

    // Verifica se o valor é um número
    if (isNaN(valor)) {
        element.value = '';
        return;
    }

    // Converte o valor para uma string e adiciona os separadores de milhar e o símbolo de reais
    valor = (valor / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Atualiza o valor do campo de entrada
    element.value = valor;
}


// Adiciona o evento de input aos elementos com a classe especificada
window.onload = function () {
    var elements = document.querySelectorAll('.apenasNumeros');
    elements.forEach(function (element) {
        apenasNumeros(element);
    });
}
// Função para remover todos os caracteres que não são números
function apenasNumeros(input) {
    return input.replace(/\D/g, '');
}

// Função para copiar valor de um input para outro removendo caracteres não numéricos
function copyAndCleanInput(sourceElement, targetElement) {
    sourceElement.addEventListener('input', function () {
        let valor = sourceElement.value;
        let cleanedValue = apenasNumeros(valor);
        targetElement.value = cleanedValue;
    });
}

// Adiciona o evento de input aos elementos de origem e destino
window.onload = function () {
    var sourceElement = document.querySelector('.sourceInput');
    var targetElement = document.querySelector('.targetInput');

    if (sourceElement && targetElement) {
        copyAndCleanInput(sourceElement, targetElement);
    } else {
        console.error("Um ou ambos os elementos não foram encontrados.");
    }
}

// Adiciona o evento de input aos elementos de origem e destino
window.onload = function () {
    var sourceElement = document.querySelector('.sourceInputCNPJ');
    var targetElement = document.querySelector('.targetInputCNPJ');

    if (sourceElement && targetElement) {
        copyAndCleanInput(sourceElement, targetElement);
    } else {
        console.error("Um ou ambos os elementos não foram encontrados.");
    }
}