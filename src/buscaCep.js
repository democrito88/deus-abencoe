export function consultarCEP(input) {
    input.addEventListener('input', function (e) {
        let value = input.value;

        // Remove todos os caracteres que não são dígitos
        value = value.replace(/\D/g, '');

        // Atualiza o valor do input
        input.value = value;

        // Se o valor tiver 8 dígitos, faz a consulta
        if (value.length === 8) {
            pesquisarCEP(value, input);
        } else {
            // Limpa o formulário se o CEP não tiver 8 dígitos
            limpaFormularioCEP();
            document.getElementsByClassName('cep-message')[0].textContent = 'CEP deve ter 8 dígitos';
            document.getElementsByClassName('cep-message')[0].style.color = 'red';
        }
    });
}

function limpaFormularioCEP() {
    // Limpa valores do formulário de cep
    const inputsEndereco = document.getElementsByClassName('endereco');
    Array.from(inputsEndereco).forEach(inputEndereco => inputEndereco.value = '');
}

function meuCallback(conteudo, input) {
    if (!("erro" in conteudo)) {
        // Atualiza os campos com os valores
        document.getElementsByClassName('rua')[0].value = conteudo.logradouro;
        document.getElementsByClassName('bairro')[0].value = conteudo.bairro;
        document.getElementsByClassName('cidade')[0].value = conteudo.localidade;
        document.getElementsByClassName('uf')[0].value = conteudo.uf;
        document.getElementsByClassName('ibge')[0].value = conteudo.ibge;
        

        // Indica que o CEP é válido
        input.style.borderColor = '#28a745'; // Cor da borda verde para CEP válido
        document.getElementsByClassName('cep-message')[0].textContent = ''; // Limpa a mensagem de erro
    } else {
        // CEP não encontrado
        limpaFormularioCEP();
        input.style.borderColor = '#dc3545'; // Cor da borda vermelha para CEP inválido
        document.getElementsByClassName('cep-message')[0].textContent = 'CEP não encontrado'; // Define a mensagem de erro
        document.getElementsByClassName('cep-message')[0].style.color = 'red'; // Define a cor do texto como vermelho
    }
}

function pesquisarCEP(cep, input) {
    if (cep.length === 8) {
        // Preenche os campos com "..." enquanto consulta webservice
        limpaFormularioCEP();
        const inputsEndereco = document.getElementsByClassName('endereco');
        Array.from(inputsEndereco).forEach(inputEndereco => inputEndereco.value = '...');
        console.log(inputsEndereco);
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => meuCallback(data, input))
            .catch(error => {
                console.error('Erro ao buscar o CEP:', error);
                limpaFormularioCEP();
                console.log(cep);
                input.style.borderColor = '#dc3545';
                document.getElementsByClassName('cep-message')[0].textContent = 'Erro ao buscar o CEP';
                document.getElementsByClassName('cep-message')[0].style.color = 'red';
            });
    }
}
