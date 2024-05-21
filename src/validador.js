export function validarCPF(input) {
    input.addEventListener('input', function (e) {
        let value = input.value;

        // Remove todos os caracteres que não são dígitos
        value = value.replace(/\D/g, '');

        // Se o valor tiver mais de 11 dígitos, corta o excesso
        if (value.length === 11) {
            if (isCPFValid(value)) {
                input.style.borderColor = '#28a745'; // Cor da borda verde para CPF válido
                input.setCustomValidity(''); // Mensagem de validação vazia
                document.getElementById('cpf-message').textContent = ''; // Limpa a mensagem de erro
            } else {
                //  input.value = ''; // Caso queria que o campo seja apagado descomente está linha !!!!
                input.style.borderColor = '#dc3545'; // Cor da borda vermelha para CPF inválido
                input.setCustomValidity('CPF inválido'); // Mensagem de validação como 'CPF inválido'
                document.getElementById('cpf-message').textContent = 'CPF inválido'; // Define a mensagem de erro
                document.getElementById('cpf-message').style.color = 'red'; // Define a cor do texto como vermelho
            }
        } else {
            input.style.borderColor = '#dc3545'; // Cor da borda vermelha se o CPF não tiver 11 dígitos
            input.setCustomValidity('CPF deve ter 11 dígitos'); // Mensagem de validação como 'CPF deve ter 11 dígitos'
            document.getElementById('cpf-message').textContent = 'CPF deve ter 11 dígitos'; // Define a mensagem de erro
            document.getElementById('cpf-message').style.color = 'red'; // Define a cor do texto como vermelho
        }

    });
}

function isCPFValid(cpf) {
    // CPF deve ter 11 dígitos
    if (cpf.length !== 11) return false;

    // Verifica se todos os dígitos são iguais (caso mais comum de CPF inválido)
    if (/^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    let remainder;

    // Calcula o primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;

    // Calcula o segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}

export function validarCNPJ(input) {
    input.addEventListener('input', function (e) {
        let value = input.value;

        // Remove todos os caracteres que não são dígitos
        value = value.replace(/\D/g, '');

        // Se o valor tiver mais de 14 dígitos, corta o excesso
        if (value.length > 14) {
            value = value.substring(0, 14);
        }

        // Atualiza o valor do input
        input.value = value;

        // Verifica se o CNPJ é válido
        if (value.length === 14) {
            if (isCNPJValid(value)) {
                input.style.borderColor = '#28a745'; // Cor da borda verde para CNPJ válido
                input.setCustomValidity(''); // Mensagem de validação vazia
                document.getElementById('cnpj-message').textContent = ''; // Limpa a mensagem de erro
            } else {
                //  input.value = ''; // Caso queria que o campo seja apagado descomente está linha !!!!
                input.style.borderColor = '#dc3545'; // Cor da borda vermelha para CNPJ inválido
                input.setCustomValidity('CNPJ inválido'); // Mensagem de validação como 'CNPJ inválido'
                document.getElementById('cnpj-message').textContent = 'CNPJ inválido'; // Define a mensagem de erro
                document.getElementById('cnpj-message').style.color = 'red'; // Define a cor do texto como vermelho
            }
        } else {
            input.style.borderColor = '#dc3545'; // Cor da borda vermelha se o CNPJ não tiver 14 dígitos
            input.setCustomValidity('CNPJ deve ter 14 dígitos'); // Mensagem de validação como 'CNPJ deve ter 14 dígitos'
            document.getElementById('cnpj-message').textContent = 'CNPJ deve ter 14 dígitos'; // Define a mensagem de erro
            document.getElementById('cnpj-message').style.color = 'red'; // Define a cor do texto como vermelho
        }
    });
}

function isCNPJValid(cnpj) {
    // Verifica se o CNPJ tem 14 dígitos
    if (cnpj.length !== 14) return false;

    // Verifica se todos os dígitos são iguais (caso comum de CNPJ inválido)
    if (/^(\d)\1+$/.test(cnpj)) return false;

    // Calcula o primeiro dígito verificador
    let sum = 0;
    let weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 12; i++) {
        sum += parseInt(cnpj.charAt(i)) * weight[i];
    }

    let firstDigit = 11 - (sum % 11);
    if (firstDigit >= 10) firstDigit = 0;

    if (parseInt(cnpj.charAt(12)) !== firstDigit) return false;

    // Calcula o segundo dígito verificador
    sum = 0;
    weight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 13; i++) {
        sum += parseInt(cnpj.charAt(i)) * weight[i];
    }

    let secondDigit = 11 - (sum % 11);
    if (secondDigit >= 10) secondDigit = 0;

    if (parseInt(cnpj.charAt(13)) !== secondDigit) return false;

    return true;
}

