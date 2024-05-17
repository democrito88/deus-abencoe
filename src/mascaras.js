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

export function mascaraCNPJ(cnpj){
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
    input.addEventListener('input', function(e) {
        let value = input.value;
        
        // DEixa apenas dígitos e ponto
        value = value.replace(/[^0-9.]/g, '');

        // Divide os valores em octetos
        let octets = value.split('.').map(octet => parseInt(octet, 10));

        // Impõe o valor máximo de 255 em cada octeto
        for (let i = 0; i < octets.length; i++) {
            if (isNaN(octets[i]) || octets[i] < 0 || octets[i] > 255) {
                octets[i] = '';
            } else {
                octets[i] = octets[i].toString();
            }
        }

        // junta as partes
        value = octets.filter(octet => octet !== '').join('.');

        // Limita os octetos a 4
        if (octets.length > 4) {
            octets = octets.slice(0, 4);
        }
        
        input.value = value;
    });
}

export function mascaraIPv6(ip) {

    // Remove tudo o que não é dígito, letra (a-f, A-F), ou dois pontos
    let ipv6 = ip.replace(/[^0-9a-fA-F:]/g, "");

    // Divida o valor em partes usando os dois pontos
    let partes = ipv6.split(':');

    // Limite cada parte a 4 caracteres
    for (let i = 0; i < partes.length; i++) {
        if (partes[i].length > 4) {
            partes[i] = partes[i].slice(0, 4);
        }
    }

    // Reúne as partes com dois pontos
    return partes.join(':');
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