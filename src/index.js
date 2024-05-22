import { darkmode } from './darkmode.js';
import { mascaraCNPJ, mascaraCPF, mascaraIPv4, mascaraIPv6, mascaraMoeda, mascaraCEP } from './mascaras.js';
import { validarCPF, validarCNPJ } from './validador.js';
import { consultarCEP } from './buscaCep.js';
import './../node_modules/flatpickr/dist/flatpickr.js';

const toggleButton = document.getElementById('darkmode-toggle');
toggleButton ? darkmode(toggleButton) : "";

const cpfInputs = document.getElementsByClassName('mascara-cpf');
Array.from(cpfInputs).forEach(input => mascaraCPF(input));

const cnpjInputs = document.getElementsByClassName('mascara-cnpj');
Array.from(cnpjInputs).forEach(input => mascaraCNPJ(input));

const moedaInputs = document.getElementsByClassName('mascara-moeda');
Array.from(moedaInputs).forEach(input => mascaraMoeda(input));

const ipv4Inputs = document.getElementsByClassName('mascara-ipv4');
Array.from(ipv4Inputs).forEach(input => mascaraIPv4(input));

const ipv6Inputs = document.getElementsByClassName('mascara-ipv6');
Array.from(ipv6Inputs).forEach(input => mascaraIPv6(input));

const cepInputs = document.getElementsByClassName('mascara-cep');
Array.from(cepInputs).forEach(input => mascaraCEP(input));

const validadorCPFInputs = document.getElementsByClassName('valida-CPF');
Array.from(validadorCPFInputs).forEach(input => validarCPF(input));

const validadorCNPJInputs = document.getElementsByClassName('valida-CNPJ');
Array.from(validadorCNPJInputs).forEach(input => validarCNPJ(input));

const buscarCEPInputs = document.getElementsByClassName('busca-cep');
Array.from(buscarCEPInputs).forEach(input => consultarCEP(input));

const buscarDataHoraInputs = document.getElementsByClassName('data-hora');
Array.from(buscarDataHoraInputs).forEach(input => flatpickr(".data-hora", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
}));

const formataMoedaInputs = document.getElementsByClassName('valor-monetario');
Array.from(moedaInputs).forEach(input => formatarMoeda(input));